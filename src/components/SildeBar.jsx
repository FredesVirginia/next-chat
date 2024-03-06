import Image from 'next/image';
import NavBar from './NavBar';
import Search from './Search';
import Chats from './Chats';
export default function SildeBar() {
  return (
    <div className='   bg-colo2 '>
        <NavBar/>
        <Search/>
        <Chats/>
      </div>
  )
}