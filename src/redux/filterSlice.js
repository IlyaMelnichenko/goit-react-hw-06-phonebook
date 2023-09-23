import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux';
export const getFilter = useSelector(state=>state.contacts)
export const filterSlice = createSlice({
    name: 'filter',
    initialState:'',
    reducers: {
      changeFilter: (state,action) => state =`${action.payload}`
      
    },
  })

  export const {changeFilter}=filterSlice.actions;