import { createSlice } from '@reduxjs/toolkit';

const lawyerSlice = createSlice({
  name: 'lawyers',
  initialState: [
    {
      id: 1,
      name: 'John Doe',
      specialties: ['Divorce Lawyer', 'Criminal Lawyer'],
      availability: ['Monday 9:00 AM - 12:00 PM', 'Wednesday 1:00 PM - 4:00 PM'],
      costPerAppointment: 100,
    },
    {
        id: 2,
        name: "Jane Smith",
        specialties: ["Property Dispute Lawyer", "Family Lawyer"],
        availability: [
          "Tuesday 2:00 PM - 5:00 PM",
          "Thursday 9:00 AM - 12:00 PM",
          "Saturday 11:00 AM - 2:00 PM",
        ],
        costPerAppointment: 120,
      },
     
      {
        id: 10,
        name: "Michael Johnson",
        specialties: ["Criminal Lawyer"],
        availability: [
          "Monday 10:00 AM - 1:00 PM",
          "Wednesday 2:00 PM - 5:00 PM",
          "Friday 9:00 AM - 12:00 PM",
        ],
        costPerAppointment: 110,
      },
  
  ],
  reducers: {},
});

export default lawyerSlice.reducer;
