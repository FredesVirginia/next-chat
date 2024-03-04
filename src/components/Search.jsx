import Image from 'next/image'
import React , {useContext, useState} from 'react'

import  {collection ,  getDoc  , setDoc, getDocs, query , where , doc, serverTimestamp, updateDoc} from "firebase/firestore"
import {db} from "@/firebase";
import {AuthContext} from "@/context/AuthContext";



export default function Search() {
  const [userName , setUserName] = useState("");
  const [user , setUser] = useState(null);
  
  const {currentUser} = useContext(AuthContext);

  const handleSearch = async  ()=>{
    const q =query (
     collection(db, "users"),
     where("displayName" , "==" , userName) 
    );
    try{
       const querySnapshot = await getDocs(q);
       querySnapshot.forEach((doc) =>{
         setUser(doc.data())
       })
    }catch(error){
       setError(true);
       console.log("Error en searbar"  , error)
    }
 }

 const handleKey = (e)=> {
   e.code === "Enter" && handleSearch();
 }

 const handleSelect= async (e)=>{
   const combineId = currentUser.uid > user.uid
   ? currentUser.uid + user.uid
   : user.uid + currentUser.uid;
    try{

     const res = await getDoc(doc(db , "chats" , combineId)); 
     if(!res.exists()){
       //create a chat in chats collecion
  
       await setDoc(doc(db, "chats", combineId), { messages: [] });

       
       //create user chats

       try {
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combineId + "userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combineId + ".date"]: serverTimestamp(),
        });
        
 
 
         await updateDoc(doc(db , "userChats", user.uid) , {
          [combineId+"userInfo"] : {
            uid:currentUser.uid,
            displayName : currentUser.displayName,
            photoURL: currentUser.photoURL
          } ,
          [combineId+".date"]: serverTimestamp()
        }) 
        console.log("Colección creada exitosamente");
      } catch (error) {
        console.error("Error al crear la colección", error);
      }
      
    
    
     }
     else{
      console.log("YA EXISTE LA EL REGISTRO" , res );
     }
   
   }catch(error){
       console.log(error);
    }

    setUser(null);
    setUserName("");
 }

  return (
    <div >
      <input 
        onChange={e=>setUserName(e.target.value)}
        onKeyDown={handleKey}
        value = {userName} 
      className='w-full pl-4 py-2 text-sm italic border-r border-gray-300' placeholder='Buscar contacto'/>
       {user &&
           <div className=' pl-3 py-2 flex space-x-2 items-center text-black hover:bg-indigo-700 hover:text-white'
           onClick={handleSelect}
           >
           <Image
             src={user.photoURL}
             width={30}
             height={30}
             alt="Picture of the author"
             className=' rounded-full'
           />
           <p className='text-sm'>{user.displayName}</p>
         
          
         </div>
       }
      </div>
  )
}