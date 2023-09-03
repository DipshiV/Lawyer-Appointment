import { configureStore } from '@reduxjs/toolkit';
import appointmentReducer from './appointmentReducer';
import lawyerReducer from './lawyerReducer';

const store = configureStore({
  reducer: {
    appointments: appointmentReducer,
    lawyers: lawyerReducer,
  },
});

export default store;
