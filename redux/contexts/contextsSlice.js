import { createSlice } from '@reduxjs/toolkit'




export const contextsSlice = createSlice({
  name: 'contextsMode',
  initialState: {
    //m_NOTE: this state for close the menu after submitting or closing the form
    popup: false,

    isEdit: false,

    editProjectIndex: -1,
  },
  reducers: {
    openPopup: (state) => {
      state.popup = true
    },

    closePopup: (state) => {
      state.popup = false
    },

    saveEdit: (state) => {
      state.isEdit = false
    },

    startEdit: (state) => {
      state.isEdit = true
    },

    setEditProjectIndex: (state, action) => {
    
      state.editProjectIndex = action.payload;
    },

    resetEditProjectIndex: (state) => {
      state.editProjectIndex = -1;
    },

  },
})

// Action creators are generated for each case reducer function
export const { openPopup, closePopup, saveEdit, startEdit, setEditProjectIndex, resetEditProjectIndex} = contextsSlice.actions

export default contextsSlice.reducer