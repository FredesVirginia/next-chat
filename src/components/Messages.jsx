import Image from 'next/image'
import Message from './Message'

import React , {useContext , useEffect , useState} from 'react';
import { ChatContext } from '../context/ChatContext';

import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '@/firebase';
export default function Messages() {
  const {data} = useContext(ChatContext);
  const [messages , setMessages] = useState([]);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  return (
    <div className='text-center h-[320px] flex flex-col items-end px-5'>
        {messages.legth > 0 
     ? ( 
      messages.map((m) =>(
        <Message message={m}  key={m.id}/>
      ))
     ) 
     :(<p>Cargando..</p>)
     }
    </div>

  )
}