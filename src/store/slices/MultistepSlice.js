// servicesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  show: false,
  buttonState: false
};

const multiSlice = createSlice({
  name: 'multistep',
  initialState,
  reducers: {
    showForm: (state, action) => {
      state.show = true
    },
    closeForm: (state, action) => {
      state.show = false
    },
    showButton: (state, action) => {
      state.buttonState = true
    },
    hideButton: (state, action) => {
      state.buttonState = false
    },
  },
});

export const { showForm, closeForm, showButton, hideButton } = multiSlice.actions;
export const formState = (state) => state.multistep.show;

export default multiSlice.reducer;