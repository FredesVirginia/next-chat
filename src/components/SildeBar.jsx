import Image from 'next/image';
import NavBar from './NavBar';
import Search from './Search';
import Chats from './Chats';
export default function SildeBar() {
  return (
    <div className=' w-[350px] bg-blue-700 '>
        <NavBar/>
        <Search/>
        <Chats/>
      </div>
  )
}