import Image from 'next/image'
import Message from './Message'
export default function Messages() {
  return (
    <div className='text-center h-[320px] flex flex-col items-end px-5'>
      <Message />
      <Message />
      <Message />
      <Message />
    </div>

  )
}