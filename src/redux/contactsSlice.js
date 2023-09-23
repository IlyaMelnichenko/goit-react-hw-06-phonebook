import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux';
export const getContacts = useSelector(state=>state.contacts)
export const contactsSlice = createSlice({
    name: 'contacts',
    initialState:[],
    reducers: {
      addContact: (state,action) => {
       state.contacts.push(action.payload)
      },
      deleteContact:(state,action)=>{
        state.contacts.filter(contact=>contact.id !==action.payload)
      }
    },
  })

  export const {addContact,deleteContact}=contactsSlice.actions;

 