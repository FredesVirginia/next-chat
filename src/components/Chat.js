
import Image from 'next/image'
import { FiAlignJustify } from "react-icons/fi";
import React  , {useContext}from 'react';
import {ChatContext} from "@/context/ChatContext";
import Messages from './Messages';
import Input from './Input';
export default function Chat() {
  const { data} = useContext(ChatContext);
  const { dispatch } = useContext(ChatContext);
  const handleToggleSidebar = () => {
    dispatch({
      type: "TOGGLE_SIDEBAR",
      payload: true,
    });
  };
  return (
    <div className='bg-color4 h-screen lg:h-0 flex flex-col'>
    <div className='h-[60px] text-white flex justify-between py-7 items-center bg-color3 px-4'>
      <span className=' mr-0 lg:mr-[350px]'>{data.user?.displayName}</span>
      <p onClick={handleToggleSidebar} className='text-white font-bold block lg:hidden'>
       Atraz
      </p>
      <FiAlignJustify className='hidden lg:block' />
    </div>
    <div className='flex-grow'>
      <Messages />
    </div>
    <Input />
  </div>
  
  )
}