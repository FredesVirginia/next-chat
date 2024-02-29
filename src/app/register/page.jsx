"use client"
import Image from 'next/image'
import {auth , storage , db} from "@/firebase";
import { AuthContext } from '@/context/AuthContext';
import { useContext } from 'react';
import {  createUserWithEmailAndPassword , updateProfile } from "firebase/auth";
import { getStorage ,ref, uploadBytesResumable , getDownloadURL} from "firebase/storage"
import toast from 'react-hot-toast';

import {doc , setDoc} from "firebase/firestore";

export default function Register() {
  const { currentUser } = useContext(AuthContext);
  console.log("El usuario es: ", currentUser);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e.target[0].value);
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
        
            const storageRef = ref(storage, `profile_images/${res.user.uid}`);
            const uploadTask = uploadBytesResumable(storageRef, file);
        
            uploadTask.on(
              'state_changed',
              (snapshot) => {
                // Manejar cambios de estado durante la carga, si es necesario
              },
              (error) => {
                console.error('Error durante la carga de la imagen:', error);
                
              },
              async () => {
                // La carga se completó con éxito, obtener la URL de descarga
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        
                // Actualizar el perfil del usuario
                await updateProfile(res.user, {
                  displayName,
                  photoURL: downloadURL,
                });
        
                // Almacenar información adicional en Firestore
                await setDoc(doc(db, 'users', res.user.uid), {
                  uid: res.user.uid,
                  displayName,
                  email,
                  photoURL: downloadURL,
                });
      
                await setDoc(doc(db , "userChats" , res.user.uid), {});
        
                console.log('Registro exitoso');
                window.location.href = '/';
              }
            );
          } catch (error) {
            console.error('Error durante la creación del usuario :', error);
          }
        };
    
    return (
        <div className='flex justify-center align-center mt-[60px]'>
          
            <form onSubmit={handleSubmit} className='w-[350px] bg-white h-30 text-gray-600 flex flex-col p-10 lg:p-10 rounded-md'>
                <h1 className='text-center text-white  text-xl mb-3 bg-blue-700 '> Chat Fazt </h1>
                <h1 className='text-center '>Registro </h1>
                <div className='flex flex-col space-y-1'>
                    <label className='text-sm'>Nombre</label>
                    <input required className=' w-[260px] border border-blue-200 ' />
                    <label className='text-sm' >Correo</label>
                    <input required className='w-[260px] border border-blue-200 ' />
                    <label className='text-sm' >Clave</label>
                    <input required className='w-[260px] border border-blue-200 ' />
                    <label className='text-sm' >Foto de Perfil</label>
                    <div className=' w-[260px] flex items-center space-x-2 py-2 '>
                        <Image
                            src="/img/perfil3.png"
                            width={50}
                            height={50}
                            alt="Picture of the author"
                            className=' rounded-full'
                        />
                        <input type="file" className='text-sm' />
                    </div>
                    <button className='bg-blue-200 py-1 hover:bg-blue-400 hover:text-white ' >Registrarse</button>
                    <p>¿Ya tienes cuentas? <a className='text-blue-400 underline' href='#'>Inicia secion</a></p>
                </div>
            </form>
        </div>
    )
}