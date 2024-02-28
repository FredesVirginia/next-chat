import Image from 'next/image'

export default function Chats() {
  return (
    <div className='border-t border-gray-400'>
    <div className=' pl-3 py-2 flex space-x-2 items-center'>
        <Image
          src="/img/1.png"
          width={30}
          height={30}
          alt="Picture of the author"
          className=' rounded-full'
        />
        <p className='text-sm'>Jonh</p>
      
       
      </div>
      </div>
  )
}