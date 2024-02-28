import Image from 'next/image'

export default function Register() {img
  return (
    <div className='flex justify-center align-center mt-[60px]'>
      <form className='w-[400px] bg-red-300 h-30 text-white font-bold flex flex-col p-10'>
       <h1 className='text-center'>Registro </h1>
        <div className='flex flex-col space-y-1'>
        <label >Nombre</label>
       <input className='border border-blue-300 '/>
       <label >Correo</label>
       <input className='border border-blue-300 '/>
       <label >Clave</label>
       <input className='border border-blue-300 '/>
       <label >Foto de Perfil</label>
      <div>
      <Image
        src="/img/perfil.png"
        width={50}
        height={50}
        alt="Picture of the author"
        className=' rounded-full'
      />
      </div>
        </div>
      </form>
    </div>
  )
}