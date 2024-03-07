import Image from 'next/image'
import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import Chat from "./Chat";

import { useMediaQuery } from 'react-responsive';

export default function Chats() {

  const [chats, setChats] = useState([]);
  const [mostrarChat, setMostrarChat] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 }); // Define el ancho máximo para considerar una pantalla como "chica"

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
    dispatch({ type: 'CHANGE_USER', payload: u });
  
  };

  const handleToggleSidebar = () => {

    dispatch({
      type: "TOGGLE_SIDEBAR",
      payload: true,
    });
  }
 
    const handleSelect2 = (u) => {
      dispatch({ type: 'CHANGE_USER', payload: u });
      handleToggleSidebar();
    };
  return (
    <div className='flex-2'>
      <div className='hidden lg:block overflow-auto'>
        {Object.entries(chats)?.sort((a, b) => b[1].date - a[1].date).map((chat) => (
          <div
            className='px-4 mt-2 flex items-center gap-3 text-white cursor-pointer bg-color2 hover:bg-color1 transition'
            key={chat[0]}
            onClick={() => handleSelect2(chat[1].userInfo)}
          >
            <img src={chat[1].userInfo.photoURL} alt="" className='w-[30px] rounded-full' />
            <div >
              <span className=' font-bold   text-gray-300'> {chat[1].userInfo.displayName} </span>
              <p className=' overflow-hidden overflow-ellipsis max-w-[150px]'> {chat[1].lastMessage?.text} </p>
            </div>
          </div>
        ))
        }</div>


<div className='block sm:hidden overflow-auto'>
        {Object.entries(chats)?.sort((a, b) => b[1].date - a[1].date).map((chat) => (
          <div
            className='px-4 mt-2 flex items-center gap-3 text-white cursor-pointer bg-color2 hover:bg-color1 transition'
            key={chat[0]}
            onClick={() => handleSelect(chat[1].userInfo)}
          >
            <img src={chat[1].userInfo.photoURL} alt="" className='w-[50px] rounded-full' />
            <div >
              <span className=' font-bold  text-xl text-gray-300'> {chat[1].userInfo.displayName} </span>
              <p className='overflow-hidden overflow-ellipsis max-w-[150px]'>HOLA {chat[1].lastMessage?.text} </p>
            </div>
          </div>
        ))
        }</div>

     


    



    </div>




  )
}