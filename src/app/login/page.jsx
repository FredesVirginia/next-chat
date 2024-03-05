"use client"

import { AuthContext } from '@/context/AuthContext';
import { useContext } from 'react';
import {signInWithEmailAndPassword}  from "firebase/auth";
import {auth} from "@/firebase";
import toast from 'react-hot-toast';

export default function Login() {
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast("Iniciaste seccion!")
      window.location.href = '/';
    } catch (err) {
      toast.error("Error.Intentalo de Nuevo")
     
    }
  };

  return (
    <div className='flex justify-center align-center mt-[60px]'>
    <form  onSubmit={handleSubmit} className='w-[350px] bg-white h-30 text-gray-600 flex flex-col justify-center align-center p-10 lg:p-10 rounded-md'>
    <h1 className='text-center text-xl mb-3 font-bold '> Chat Fazt </h1>
        <h1 className='text-center '> Iniciar Secion </h1>
        <div className='flex flex-col space-y-3'>
            
            <label className='text-sm' >Correo</label>
            <input required  className='w-[260px] border border-blue-200 ' />
            <label className='text-sm' >Clave</label>
            <input required  className='w-[260px] border border-blue-200 ' />
           
          
            <button className=' w-[260px] bg-blue-200 py-1 hover:bg-blue-400 hover:text-white ' >Ingresar</button>
            <p>¿No tienes cuenta? <a className='text-blue-400 underline' href='#'>Registrate Aqui</a></p>
        </div>
    </form>
</div>
  )
}