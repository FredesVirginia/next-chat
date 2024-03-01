import { useState , useContext } from "react";
import { MdSend } from "react-icons/md";
import { FaFileArchive } from "react-icons/fa";
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
import { Timestamp, arrayUnion , doc , serverTimestamp, updateDoc } from 'firebase/firestore';
import { db, storage } from '@/firebase';
import { v4 as uuid} from "uuid";
import { ref, uploadBytesResumable , getDownloadURL } from 'firebase/storage';
export default function Input() {

  const [text , setText] = useState("");
  const[img , setImg] = useState(null);
  const {currentUser} = useContext(AuthContext);
  const {data} = useContext(ChatContext);


  const handleSend = async () => {
  
   
   
    if(img){
     let uuuid = uuid();
    
      const storageRef = ref(storage,uuuid);
      const uploadTask = uploadBytesResumable(storageRef, img);
      uploadTask.on(
       
        (error) => {
          console.error('Error durante la carga de la imagen:', error);
          
        },
        async () => {
          // La carga se completó con éxito, obtener la URL de descarga
          await getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL)=>{
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img : downloadURL,
              }),
            });
          });
          
         
        }
      );
    }else{
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
         
        }),
      });
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });
  
    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });
  
   setText("");
   setImg(null);
   
  };

  return (
    <div className='border-t border-gray-300 px-2 py-3 px-1'>
     <div className="flex items-center">
        <input className="mr-40 w-full" placeholder="Escribee"   onChange={e=>setText(e.target.value)}/>
        <div className=" flex items-center  space-x-3">
        <input style={{display : "none"}} type="file" id="file"   onChange={e => setImg(e.target.files[0])}/>
            <label className='cursor-pointer' htmlFor="file">
            <FaFileArchive  /> 
               
            </label>
        <input type="file" hidden />
        <button    onClick={handleSend} >  <MdSend  /> </button>
          
        </div>

       
     </div>
      </div>
  )
}