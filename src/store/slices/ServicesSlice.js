// servicesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedServices: [],
};

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    selectService: (state, action) => {
      const { id, name, price } = action.payload;
      // Check if the service is already selected
      const isServiceSelected = state.selectedServices.some((service) => service.id === id);

      if (!isServiceSelected) {
        // If not selected, add it to the list
        state.selectedServices = [{ id, name, price }];
      }
    },
    unselectService: (state, action) => {
      const { id } = action.payload;
      // Remove the selected service by id
      state.selectedServices = state.selectedServices.filter((service) => service.id !== id);
    },
    clearSelectedServices: (state) => {
      // Clear all selected services
      state.selectedServices = [];
    },
  },
});

export const { selectService, unselectService, clearSelectedServices } = servicesSlice.actions;
export const selectServices = (state) => state.services.selectedServices;

export default servicesSlice.reducer;