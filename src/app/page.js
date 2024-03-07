"use client"
import Image from 'next/image'
import Search from '@/components/Search';
import Chat from '@/components/Chat';

import SildeBar from '@/components/SildeBar';
import { AuthContext } from '@/context/AuthContext';
import { ChatContext } from '@/context/ChatContext';
import { useContext } from 'react';
export default function Home() {
  const { currentUser } = useContext(AuthContext);

  const { data: chatContextData } = useContext(ChatContext);
  const { mostrarSidebar } = chatContextData;


  const ProtectedRoute = ({ children }) => {
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
    <div className=' flex justify-center align-center min-h-screen lg:h-0 lg:mt-[60px]   '>
      <ProtectedRoute>
      
        <div className='flex w-full h-screem lg:w-[800px] lg:h-[430px] rounded-lg '>
          <div className={` bg-color2 lg:w-[300px] bg-color2 ${mostrarSidebar ? 'block w-full' : 'hidden'}`}>
          <div className='flex  lg:w-[800px] lg:h-[430px] rounded-lg '>
          <div className={`  lg:block lg:w-[300px] bg-color2 ${mostrarSidebar ? 'block w-full ' : 'hidden'}`}>
            <SildeBar />
          </div>
          <div className={` lg:block  lg:w-[500px] bg-color2 ${mostrarSidebar ? 'hidden' : 'block'}`}>
            <Chat />
          </div>
        </div>
          </div>
          <div className={`w-[350px] lg:block  lg:w-[500px] bg-color2 ${mostrarSidebar ? 'hidden' : 'block w-full'}`}>
            <Chat />
          </div>
        </div>

      </ProtectedRoute>
    </div>
  )
}
