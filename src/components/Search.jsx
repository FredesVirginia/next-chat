import Image from 'next/image'

export default function Search() {
  return (
    <div >
      <input className='w-full pl-4 py-2 text-sm italic' placeholder='Buscar contacto'/>
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