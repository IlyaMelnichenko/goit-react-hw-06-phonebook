import { configureStore } from '@reduxjs/toolkit'
import {contactsSlice} from './contactsSlice'
export const store = configureStore({
  contacts:contactsSlice.reducer ,
})
