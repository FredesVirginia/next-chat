import Image from 'next/image';
import NavBar from './NavBar';
import Search from './Search';
import Chats from './Chats';
import { useContext , useState } from 'react';
import { ChatContext } from '@/context/ChatContext';
export default function SildeBar() {



  return (
    <div className=" bg-color2">
        <NavBar/>
        <Search/>
        <Chats/>
      </div>
  )
}