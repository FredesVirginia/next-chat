import Image from 'next/image'
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase';
import { AuthContext } from '@/context/AuthContext';
import { useContext } from 'react';
import toast from 'react-hot-toast';
export default function NavBar() {

  const {currentUser} = useContext(AuthContext);

  const logOut = () =>{
    try{
     
      signOut(auth);
      toast.success("Cerrando Session")
    }catch(error){
      toast.error("Ocurrio un error");
    }
  }
  return (
    <div className=' text-white flex  py-10 lg:py-3 justify-between items-center bg-color1 px-4   '>
      <p className=' text-xl lg:text-sm font-extrabold'> Chat Fazt</p>
      <div className='flex space-x-2 items-center'>
        <Image
          src= {currentUser.photoURL}
          width={30}
          height={30}
          alt="Picture of the author"
          className=' rounded-full'
        />
        <p className='text-xl  lg:text-sm'>{currentUser.displayName}</p>
      
        <button onClick={logOut} className='text-xl lg:text-sm bg-color3  px-1 p-1'> Log Out</button>
      </div>
    </div>
  )
}