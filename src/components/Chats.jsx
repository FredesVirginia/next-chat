import Image from 'next/image'
import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';  


export default function Chats() {

  const [chats , setChats] = useState([]);
  const {currentUser} = useContext(AuthContext);
  const {dispatch} = useContext(ChatContext);
  console.log("el current user es " , currentUser);
  useEffect(() => {
    const getChats = () => {
      if (currentUser) {
        const docRef = doc(db, 'userChats', currentUser.uid);

        const unsub = onSnapshot(docRef, (doc) => {
          if (doc.exists()) {
            console.log("EL DOC DATA ES  1233" , doc.data());
            setChats(doc.data());
          } else {
            setChats([]); // Si el documento no existe, establece los chats como un array vacío
          }
        });

        return () => {
          unsub();
        };
      }
    };

    currentUser.uid && getChats();
  }, [currentUser]);

  console.log('Los chat son en el componente de chat', chats);
  console.log("EL current user en chat es  " , currentUser);

  const handleSelect = (u)=>{
      dispatch({ type : "CHANGE_USER" , payload : u});
  }

  if(chats){
  console.log("Los chat en el inf de cha es ", chats)
  }
return (
 <div className='flex-2'>
  {Object.values(chats)?.map((chat) => (
    <div
      className='p-2 flex items-center gap-3 text-white cursor-pointer hover:bg-indigo-900 transition'
      key={chat.id}  // Usa el ID del chat como clave si está disponible
      onClick={() => handleSelect(chat)}
    >
      <img src={chat.photoURL} alt="" className='w-[40px] rounded-full' />
      <div>
        <span className='text-gray-300'>{chat.displayName}</span>
        <p>AAAA--- {chat.lastMessage?.text}</p>
      </div>
    </div>
  ))}
</div>

)
}