import Image from 'next/image'
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase';
import { AuthContext } from '@/context/AuthContext';
import { useContext } from 'react';
export default function NavBar() {

  const {currentUser} = useContext(AuthContext);
  return (
    <div className=' text-white flex py-3 space-x-20 items-center bg-blue-800 px-2   '>
      <p className='text-sm font-extrabold'> Chat Fazt</p>
      <div className='flex space-x-2 items-center'>
        <Image
          src= {currentUser.photoURL}
          width={30}
          height={30}
          alt="Picture of the author"
          className=' rounded-full'
        />
        <p className='text-sm'>{currentUser.displayName}</p>
      
        <button onClick={() =>signOut(auth)} className='text-sm bg-blue-600  px-1 p-1'> Log Out</button>
      </div>
    </div>
  )
}