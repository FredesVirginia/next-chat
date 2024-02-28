import Image from 'next/image'

export default function NavBar() {
  return (
    <div className=' text-white flex py-3 space-x-20 items-center bg-blue-800 px-2   '>
      <p className='text-sm font-extrabold'> Chat Fazt</p>
      <div className='flex space-x-2 items-center'>
        <Image
          src="/img/1.png"
          width={30}
          height={30}
          alt="Picture of the author"
          className=' rounded-full'
        />
        <p className='text-sm'>Jonh</p>
      
        <button className='text-sm bg-blue-600  px-1 p-1'> Log Out</button>
      </div>
    </div>
  )
}