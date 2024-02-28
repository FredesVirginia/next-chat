import Image from 'next/image'
import Search from '@/components/Search';
import Chat from '@/components/Chat';
import SildeBar from '@/components/SildeBar';
export default function Home() {
  return (
       <div className=' flex justify-center align-center mt-[60px]'>
         <div className='flex bg-red-100 w-[750px] h-[430px] rounded-full'>
           <SildeBar/>
           <Chat/>
         </div>
       </div>
  )
}
