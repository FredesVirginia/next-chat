import Image from 'next/image'

export default function Message() {
  return (
    <div className=''>
          <div className=' pl-3 py-2 flex  space-x-2 items-center'>
          <p className='text-sm bg-blue-200 text-gray-700 rounded-full  px-3'>Hello</p>
        <Image
          src="/img/1.png"
          width={30}
          height={30}
          alt="Picture of the author"
          className=' rounded-full'
        />
        
      
       
      </div>
      <span className='text-gray-600 font-sm'>Just Now</span>
      </div>
  )
}