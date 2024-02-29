
import Image from 'next/image'
import { FiAlignJustify } from "react-icons/fi";
import React  , {useContext}from 'react';
import {ChatContext} from "@/context/ChatContext";
import Messages from './Messages';
import Input from './Input';
export default function Chat() {
  const { data} = useContext(ChatContext);

  console.log(" Estamosn e le componente Chat se imprime data de ChatContext" , data);
  return (
    <div className='w-[500px] bg-white'>
       <div className=' h-[62px] text-white flex  py-7  items-center bg-blue-700 px-2   '>
      <span className='mr-[350px]'>  {data.user?.displayName} </span>
      <FiAlignJustify />
       </div>
       <Messages/>
       <Input/>
      </div>
  )
}