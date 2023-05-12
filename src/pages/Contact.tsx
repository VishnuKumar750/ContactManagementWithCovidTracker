import React, { ChangeEvent, FormEvent, useState } from 'react'
import ItemCon from '/nocon.svg'
import ContactDetails from '../components/ContactDetails'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/Store'
import { addContact, updateContact, deleteContact } from '../redux/Reducers'

const Contact: React.FC = () => {
  const [createContactOption, setCreateContactOption] = useState(false)

  const [selectedOption, setSelectedOption] = useState('');

  const dispatch = useDispatch()
  const { contacts } = useSelector((state: RootState) => state.contacts)

  const [isEdit, setIsEdit] = useState(false)
  const [ formData, setFormData ] = useState({
    id: 0,
    firstName: '',
    lastName: '',
    status: 0,
  })

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleCreateContact = () => {
    setCreateContactOption(true)
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    // handle errors 
    if (!formData.firstName || !formData.lastName || !selectedOption) {
      return
    }

    const contact = {
      id: contacts.length + 1,
      firstName: formData.firstName,
      lastName: formData.lastName,
      status: selectedOption === 'active' ? 0 : 1
    }

    dispatch(addContact(contact))
    setCreateContactOption(false)
  
    console.log('You have submitted the form.')
  }

  const handleEdit = (id: number) => {
    console.log('edit contact')
    setIsEdit(true)
    const contact = contacts.find((contact) => contact.id === id)
    if (contact) {
      setFormData({
        id: contact.id,
        firstName: contact.firstName,
        lastName: contact.lastName,
        status: contact.status
      })
    }
  }

  const handleUpdate = (event: FormEvent) => {
    event.preventDefault();

    // handle errors
    if (!formData.firstName || !formData.lastName || !selectedOption) {
      alert('Please fill all the fields')
      return
    }

    const contact = {
      id: formData.id,
      firstName: formData.firstName,
      lastName: formData.lastName,
      status: selectedOption === 'active' ? 0 : 1
    }

    dispatch(updateContact(contact))
    setIsEdit(false)
    
  }

  const handleDelete = (id : number) => {
    dispatch(deleteContact(id))
  }

  return (
    <div className='col-span-6 md:col-span-7 w-full h-full border-none'>
      <div className='w-full h-full flex items-center flex-col justify-center'>

      {!isEdit && !createContactOption &&  
      <button
      type='button'
      className='text-lg bg-[#99A98F] py-4 px-4 rounded-md font-roboto font-bold text-white mx-auto my-4'
      onClick={handleCreateContact}
      >Create Contact</button>
      }
 

      { !isEdit && !createContactOption && contacts.length <= 0 &&
      <div className='border-4 flex  items-center py-12 px-2 w-[25em] md:w-[32em] h-[18em]
      justify-center my-16'>
         <img src={ItemCon} alt="nocontactsvg" 
            className='w-[4em] md:w-[6em] md:h-[6em] h-[4em] mx-8'
         />
         <p className='text-[1rem] md:text-2xl font-semibold text-gray-800 font-serif'>
            No Contact Found <br />
            Please add contact from <br />
            Create Contact Button
         </p>
      </div>
      }

      { !createContactOption && !isEdit && contacts.length > 0 && 
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
          {contacts.map((contact) => (
            <ContactDetails key={contact.id} contact={contact} handleDelete={handleDelete}  handleEdit={handleEdit} />
          ))}
        </div>
      }
     

      { (createContactOption ||  isEdit) &&
      <>
      <h1 className='text-2xl font-bold'>{!isEdit ? "Create Contact Screen" : "Edit Contact Screen"}</h1>
      <div className='flex  items-center py-12  w-[22em] md:w-[40em] h-[18em]
      justify-center my-16 border-2 px-4'>
      <form className='w-full flex flex-col justify-center'
          onSubmit={handleSubmit}
          >
            <div className=''>
            <div className='flex items-center justify-between'>
            <label className='text-lg font-roboto font-bold text-gray-800'>First Name: </label>
            <input type='text' className='border-2 border-gray-400 w-[60%] md:w-[80%] py-2 px-2 my-2 outline-none' value={formData.firstName} onChange={(event) => setFormData({ ...formData, firstName: event.target.value })} />
            </div>

            <div className='flex items-center justify-between'>
            <label className='text-lg font-roboto font-bold text-gray-800'>Last Name: </label>
            <input type='text' className='border-2 border-gray-400 w-[60%] md:w-[80%] py-2 px-2 my-2 outline-none'  value={formData.lastName} onChange={(event) => setFormData({ ...formData, lastName: event.target.value })} />
            </div>

            <div className='flex items-center my-4 w-full justify-center '>
              <label className='text-lg font-roboto font-bold text-gray-800 '>Status: </label>

              {/* create check box */}
              <div className='flex flex-col items-center w-[50%]'>
                <label className='text-lg font-bold text-gray-800'>
                  <input type='radio' value='active'
                  className='mr-8 w-4 h-4'
                  checked={selectedOption === 'active'} onChange={handleOptionChange} />
                  Active
                </label>
                <label className='text-lg font-bold text-gray-800'>
                  <input type='radio' value='inactive' 
                  className='mr-5 w-4 h-4'
                  checked={selectedOption === 'inactive'} onChange={handleOptionChange} />
                  Inactive
                </label>
              </div>
            </div>
            </div>

            { !isEdit ? 
            <button
              type='submit'
              className='text-lg bg-[#99A98F] py-2 px-4 mt-4 rounded-md font-roboto font-bold text-white mx-auto'
            >Save Contact</button>
            :
            <button
              className='text-lg bg-[#99A98F] py-2 px-4 mt-4 rounded-md font-roboto font-bold text-white mx-auto'
              onClick={handleUpdate}
            >Save Editted Contact</button>
            }
          </form>
      </div>
      </> 
      }


      </div>
    </div>
  )
}

export default Contact