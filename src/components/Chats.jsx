import Image from 'next/image'
import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';  


export default function Chats() {

  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };
  
return (
  <div className='flex-2'>
   {
Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat)  => (
  <div
          className='px-4 mt-2 flex items-center gap-3 text-white cursor-pointer bg-color2 hover:bg-color1 transition'
          key={chat[0]}
          onClick={() => handleSelect(chat[1].userInfo)}
      >
        <img src={chat[1].userInfo.photoURL} alt="" className='w-[40px] rounded-full' />
        <div >
          <span className='text-gray-300'> {chat[1].userInfo.displayName} </span>
          <p> {chat[1].lastMessage?.text} </p>
        </div>
      </div>
))
}

    
  </div>
)
}