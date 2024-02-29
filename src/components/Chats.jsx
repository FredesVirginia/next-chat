import Image from 'next/image'
import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';  


export default function Chats() {


  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
 const {dispatch} = useContext(ChatContext);
  useEffect(() => {
    const getChats = () => {
      if (currentUser) {
        const docRef = doc(db, 'userChats', currentUser.uid);

        const unsub = onSnapshot(docRef, (doc) => {
          if (doc.exists()) {
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
  console.log("EL current user en chat es  ", currentUser);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  }

  if (chats) {
    console.log("Los chat en el inf de cha es ", chats)
  }
  return (
    <div className='flex-2'>
      {
        Object.entries(chats).map((chat) => (
          <div
            className='p-2 flex items-center gap-3 text-white cursor-pointer  hover:bg-blue-800  transition'
            key={chat[0]}
            onClick={() => handleSelect(chat[1])}
          >
            <img src={chat[1].photoURL} alt="" className='w-[40px] rounded-full' />
            
            <div className=' hover:text-white' >
              <span className='text-white  font-bold '>{chat[1].displayName}</span>
              <p  className='text-gray-700'>{chat[1].lastMessage?.text}</p>
            </div>
          </div>
        ))
      }


    </div>
  )
}