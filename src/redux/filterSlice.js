import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux';

export const filterSlice = createSlice({
    name: 'filter',
    initialState:'',
    reducers: {
      changeFilter: (state,action) => state =`${action.payload}`
      
    },
  })
  export const getFilter = state => state.filter;
  export const {changeFilter}=filterSlice.actions;