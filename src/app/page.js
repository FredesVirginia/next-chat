"use client"
import Image from 'next/image'
import Search from '@/components/Search';
import Chat from '@/components/Chat';

import SildeBar from '@/components/SildeBar';
import { AuthContext } from '@/context/AuthContext';
import { useContext } from 'react';
export default function Home() {
  const { currentUser } = useContext(AuthContext);
  console.log("El usuario es: ", currentUser);

  const ProtectedRoute = ({children})=>{
    if (!currentUser) {
      // Redirigir a la página de login si el usuario no está autenticado
      window.location.href = "/login";
      // Devolver null para que el componente no se renderice
      return null;
    }
  
    // Renderizar el contenido si el usuario está autenticado
    return children;
  }
  return (
       <div className=' flex justify-center align-center mt-[60px]'>
        <ProtectedRoute>
        <div className='flex bg-red-100 w-[750px] h-[430px] rounded-full'>
           <SildeBar/>
           <Chat/>
         </div>
        </ProtectedRoute>
       </div>
  )
}
