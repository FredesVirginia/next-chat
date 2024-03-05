import Image from 'next/image'
import React , {useContext, useState} from 'react'

import  {collection ,  getDoc  , setDoc, getDocs, query , where , doc, serverTimestamp, updateDoc} from "firebase/firestore"
import {db} from "@/firebase";
import {AuthContext} from "@/context/AuthContext";



export default function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}

    setUser(null);
    setUsername("")
  };

  return (
    <div className="bg-color2 w-full">
      <input 
        type="text"
     
        onKeyDown={handleKey}
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      className='w-full pl-4  text-white bg-color2 py-2 text-sm italic  border-b border-gray-300' placeholder='Buscar contacto'/>
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