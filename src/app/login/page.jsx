"use client"

import Image from 'next/image'

export default function Login() {
  return (
    <div className='flex justify-center align-center mt-[60px]'>
    <form className='w-[350px] bg-white h-30 text-gray-600 flex flex-col justify-center align-center p-10 lg:p-10 rounded-md'>
    <h1 className='text-center text-xl mb-3'> Chat Fazt </h1>
        <h1 className='text-center '> Iniciar Secion </h1>
        <div className='flex flex-col space-y-1'>
            
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