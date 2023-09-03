import { createSlice } from '@reduxjs/toolkit';

const appointmentSlice = createSlice({
  name: 'appointments',
  initialState: [],
  reducers: {
    bookAppointment: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { bookAppointment } = appointmentSlice.actions;

export default appointmentSlice.reducer;
