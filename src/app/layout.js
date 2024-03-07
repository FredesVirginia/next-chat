"use client"


import './globals.css'
import {AuthContextProvider  } from '@/context/AuthContext';
import { ChatContextProvider } from '@/context/ChatContext';
import toast, {Toaster} from "react-hot-toast";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
      <AuthContextProvider>
        <ChatContextProvider>
        <Toaster/>
          {children}
        </ChatContextProvider>
        
      </AuthContextProvider>
       
        
      </body>
    </html>
  )
}
