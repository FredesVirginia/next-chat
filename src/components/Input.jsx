
import { MdSend } from "react-icons/md";
import { FaFileArchive } from "react-icons/fa";

export default function Input() {
  return (
    <div className='border-t border-gray-300 px-2 py-3 px-1'>
     <div className="flex items-center">
        <input className="mr-40 w-full" placeholder="Escribee"/>
        <div className=" flex items-center  space-x-3">
        <input style={{display : "none"}} type="file" id="file"/>
            <label className='cursor-pointer' htmlFor="file">
            <FaFileArchive  /> 
               
            </label>
        <input type="file" hidden />
        <button>  <MdSend  /> </button>
          
        </div>

       
     </div>
      </div>
  )
}