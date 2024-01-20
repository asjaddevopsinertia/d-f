import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  userData: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    onLogin: (state, action) => {
      state.userData = action.payload;
      localStorage.setItem('userData', JSON.stringify(action.payload));
    },
    onLogout: (state) => {
      state.userData = null;
      localStorage.removeItem('userData');
    },
  },
});

export const { onLogin, onLogout } = userSlice.actions;

export const selectUserData = (state) => state.user.userData;

export const loginAsync = (userData) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:4000/user/register", userData);
    dispatch(onLogin(response.data));
  } catch (error) {
    console.error(error);
    // Handle the error as needed
  }
};

export default userSlice.reducer;