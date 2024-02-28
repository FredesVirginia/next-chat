import Image from 'next/image'

export default function NavBar() {
  return (
    <div className='flex py-3 space-x-20 items-center bg-red-400 px-2 border-b border-gray-300  '>
      <span lassName='text-xl'> Chat Fazt</span>
      <div className='flex space-x-2 items-center'>
        <Image
          src="/img/perfil3.png"
          width={30}
          height={30}
          alt="Picture of the author"
          className=' rounded-full'
        />
        <p className='text-sm'>Jonh</p>
      
        <button className='text-sm'> Log Out</button>
      </div>
    </div>
  )
}