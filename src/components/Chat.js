
import Image from 'next/image'
import { FiAlignJustify } from "react-icons/fi";
import React  , {useContext}from 'react';
import {ChatContext} from "@/context/ChatContext";
import Messages from './Messages';
import Input from './Input';
export default function Chat() {
  const { data} = useContext(ChatContext);


  return (
    <div className='w-[600px] bg-color4'>
       <div className=' h-[60px] text-white flex justify-between py-7  items-center bg-color3 px-4   '>
      <span className='mr-[350px]'>  {data.user?.displayName} </span>
      <FiAlignJustify />
       </div>
       <Messages/>
       <Input/>
      </div>
  )
}