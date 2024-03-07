import Image from 'next/image';
import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';


export default function Message({ message }) {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);




  return (
    <div
      ref={ref}
      className=' flex  items-center space-x-4 space-y-2'
    >

<div className="p-2  max-w-60 lg:max-w-80 bg-color5 font-bold rounded-md text-white">
  <p className='text-right max-w-full whitespace-normal break-words'>{message.text}</p>
  {message.img && <img src={message.img} alt="" />}
</div>

      <div className="">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }

          alt="" className='w-[30px] rounded-full mb-4'
        />

      </div>

    </div>
  )
}