"use client"
import Image from 'next/image'

export default function Register() {

    const handleSubmit = (e)=>{
        e.preventDefault();
            console.log(e.target[0].value);
    }
    return (
        <div className='flex justify-center align-center mt-[60px]'>
            <form onSubmit={handleSubmit} className='w-[350px] bg-white h-30 text-gray-600 flex flex-col p-10 lg:p-10 rounded-md'>
            <h1 className='text-center text-xl mb-3'> Chat Fazt </h1>
                <h1 className='text-center '>Registro </h1>
                <div className='flex flex-col space-y-1'>
                    <label className='text-sm'>Nombre</label>
                    <input required className=' w-[260px] border border-blue-200 ' />
                    <label className='text-sm' >Correo</label>
                    <input required  className='w-[260px] border border-blue-200 ' />
                    <label className='text-sm' >Clave</label>
                    <input required  className='w-[260px] border border-blue-200 ' />
                    <label className='text-sm' >Foto de Perfil</label>
                    <div className=' w-[260px] flex items-center space-x-2 py-2 '>
                        <Image
                            src="/img/perfil3.png"
                            width={50}
                            height={50}
                            alt="Picture of the author"
                            className=' rounded-full'
                        />
                        <input type="file" className='text-sm' />
                    </div>
                    <button className='bg-blue-200 py-1 hover:bg-blue-400 hover:text-white ' >Registrarse</button>
                    <p>¿Ya tienes cuentas? <a className='text-blue-400 underline' href='#'>Inicia secion</a></p>
                </div>
            </form>
        </div>
    )
}