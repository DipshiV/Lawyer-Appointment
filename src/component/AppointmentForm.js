import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bookAppointment } from '../Store/appointmentReducer';
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
  } from '@mui/material';


function AppointmentForm() {
  const dispatch = useDispatch();
  const lawyers = useSelector((state) => state.lawyers);

  const [selectedLawyer, setSelectedLawyer] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');

  const handleAppointmentBooking = () => {
    const lawyer = lawyers.find((l) => l.id === selectedLawyer);

    if (!lawyer) {
      alert('Invalid lawyer selection');
      return;
    }

    const isAvailable = lawyer.availability.some((slot) => slot.includes(appointmentDate));

    if (isAvailable) {
      dispatch(
        bookAppointment({
          lawyerId: selectedLawyer,
          date: appointmentDate,
        })
      );
      alert('Appointment booked successfully');
    } else {
      alert('Appointment not available');
    }
  };

  return (
    <div>
      <h2>Book an Appointment</h2>
      <br/>
    
      <FormControl fullWidth>
        <InputLabel>Select a Lawyer</InputLabel>
        <br/>
        <Select
          value={selectedLawyer}
          onChange={(e) => setSelectedLawyer(parseInt(e.target.value))}
        >
        <br/>
        <br/>
          <MenuItem value="">
            <em>Select a Lawyer</em>
          </MenuItem>
          {lawyers.map((lawyer) => (
            <MenuItem key={lawyer.id} value={lawyer.id}>
              {lawyer.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <br/>
      <br/>
      <TextField
        fullWidth
        label="Appointment Date and Time"
        variant="outlined"
        value={appointmentDate}
        onChange={(e) => setAppointmentDate(e.target.value)}
      />
      <br/>
      <br/>
      <Button
        variant="contained"
        color="primary"
        onClick={handleAppointmentBooking}
      >
        Book Appointment
      </Button>
    </div>
  );
}

export default AppointmentForm;
