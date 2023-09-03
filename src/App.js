import React from 'react';
import { Provider } from 'react-redux';
import store from './Store/Store';
import AppointmentForm from './component/AppointmentForm';
import AppointmentHistory from './component/AppointmentHistory';
import { CssBaseline, ThemeProvider, Container, Typography } from '@mui/material';
import theme from './theme';
import './App.css';

const lawyers = [
  {
    id: 1,
    name: 'John Doe',
    specialties: ['Divorce Lawyer', 'Criminal Lawyer'],
    availability: ['Monday 9:00 AM - 12:00 PM', 'Wednesday 1:00 PM - 4:00 PM'],
    costPerAppointment: 100,
  },
  {
    id: 2,
    name: 'Jane Smith',
    specialties: ['Property Dispute Lawyer', 'Family Lawyer'],
    availability: [
      'Tuesday 2:00 PM - 5:00 PM',
      'Thursday 9:00 AM - 12:00 PM',
      'Saturday 11:00 AM - 2:00 PM',
    ],
    costPerAppointment: 120,
  },
  
  {
    id: 10,
    name: 'Michael Johnson',
    specialties: ['Criminal Lawyer'],
    availability: [
      'Monday 10:00 AM - 1:00 PM',
      'Wednesday 2:00 PM - 5:00 PM',
      'Friday 9:00 AM - 12:00 PM',
    ],
    costPerAppointment: 110,
  },

];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" align="center">
          Lawyer Appointment App
        </Typography>
        <Provider store={store}>
          <AppointmentForm />
          {lawyers.map((lawyer) => (
            <AppointmentHistory key={lawyer.id} lawyer={lawyer} />
          ))}
        </Provider>
      </Container>
    </ThemeProvider>
  );
}

export default App;
