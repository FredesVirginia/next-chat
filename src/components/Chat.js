import Image from 'next/image'
import { FiAlignJustify } from "react-icons/fi";

import Messages from './Messages';
import Input from './Input';
export default function Chat() {
  return (
    <div className='w-[500px] bg-white'>
       <div className=' h-[62px] text-white flex  py-7  items-center bg-blue-700 px-2   '>
      <span className='mr-[350px]'> Jane </span>
      <FiAlignJustify />
       </div>
       <Messages/>
       <Input/>
      </div>
  )
}