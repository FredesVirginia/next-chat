import Image from 'next/image'
import Message from './Message'

import React , {useContext , useEffect , useState} from 'react';
import { ChatContext } from '../context/ChatContext';

import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '@/firebase';
export default function Messages() {

  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  
  return (
    <div className='text-center py-5 overflow-auto bg-gray-300 h-screem lg:h-[320px] flex flex-col items-end  px-5 lg:px-5'>
        {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </div>

  )
}