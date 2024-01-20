// servicesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedExtras: [],
};

const extrasSlice = createSlice({
  name: 'extras',
  initialState,
  reducers: {
    selectExtra: (state, action) => {
      const { id, name, price } = action.payload;
      // Check if the service is already selected
      const isServiceSelected = state.selectedExtras.some((service) => service.id === id);

      if (!isServiceSelected) {
        // If not selected, add it to the list
        state.selectedExtras.push({ id, name, price });
      }
    },
    unselectExtra: (state, action) => {
      const { id } = action.payload;
      // Remove the selected service by id
      state.selectedExtras = state.selectedExtras.filter((service) => service.id !== id);
    },
    clearSelectedExtra: (state) => {
      // Clear all selected services
      state.selectedExtras = [];
    },
  },
});

export const { selectExtra, unselectExtra, clearSelectedExtra } = extrasSlice.actions;
export const selectExtras = (state) => state.extras.selectedExtras;

export default extrasSlice.reducer;