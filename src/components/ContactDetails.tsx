import React from 'react'
import search from '/search.svg'

type Contact = {
  id: number;
  firstName: string;
  lastName: string;
  status: number;
}

type ContactDetailsProps = {
  contact: Contact;
  handleDelete: (id: number) => void;
  handleEdit: (id: number) => void;
}

const ContactDetails:React.FC<ContactDetailsProps> = ({ contact, handleDelete, handleEdit }) => {


  return (
   <div>
   <div className='px-4 py-8 w-[20em] h-[10em] text-center border-2 group overflow-hidden cursor-pointer relative rounded-md'>
   <h1 className='text-md font-sans font-semibold text-[#99A98F] '>First Name: {contact?.firstName}</h1>
   <h1 className='text-md font-sans font-semibold text-[#99A98F]'>Last Name: {contact?.lastName}</h1>
   <h1 className='text-md font-sans font-semibold text-[#99A98F]'>Status: {contact?.status === 0 ? 'Active' : 'InActive'}</h1>
   <div className='absolute bg-gray-800 h-full translate-y-40 group-hover:-translate-y-0 rounded-md bg-opacity-50 w-full bottom-0 left-0 transition-all delay-500 ease-in-out flex items-center justify-center' >
     <img src={search} alt="viewcontact" className='w-6 h-6'/>
   </div>
 </div>
   <div className='flex items-center justify-around'>
      <button className='py-2 w-[8em] bg-green-700 font-bold text-white my-2 rounded-lg' onClick={() => handleEdit(contact.id)}>Edit</button>
      <button className='py-2 w-[8em] bg-red-600 font-bold text-white my-2 rounded-lg' onClick={() => handleDelete(contact.id)}>Delete</button>
   </div>
   </div>
  )
}

export default ContactDetails;