import React from 'react'
import { Link } from 'react-router-dom'


const SideBar:React.FC = () => {
   const [ open, setOpen ] = React.useState(false)

  return (
    <div className={`border-2 min-h-screen max-h-full  md:col-span-1 bg-[#03001C] py-4 border-none md:translate-x-0 md:z-0 md:w-full
    ${open ? "translate-x-0 z-[9999]" : "-translate-x-36"} w-[10em] transition-all delay-200 ease-in-out
    `} onClick={() => setOpen(!open)}>
      <h1 className='text-xl px-4 text-white font-bold font-roboto'>Taiyo.io</h1>
      <div className='my-4'>
         <ul className='text-center'>
            <Link to={'/'}>
               <li className='py-2 my-2 cursor-pointer hover:bg-slate-800 
               hover:text-white font-bold
               text-slate-300 px-2
               '>
                     Contact
               </li>
            </Link>
            <Link to={'/charts'}>
               <li className='py-2 cursor-pointer hover:bg-slate-800 hover:text-white font-bold
               text-slate-300 
               px-2'>
                     Charts
               </li>
            </Link>
         </ul>
      </div>
    </div>
  )
}

export default SideBar