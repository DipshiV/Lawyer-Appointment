import React from 'react';
import { useSelector } from 'react-redux';
import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';

function AppointmentHistory({ lawyer }) {
  const appointments = useSelector((state) => state.appointments);

  const lawyerAppointments = appointments.filter(
    (appointment) => appointment.lawyerId === lawyer.id
  );
  console.log('Appointment object:', appointments); 
console.log('Appointment ID:', lawyerAppointments); 

  return (
    <div>
    <h2>Appointment History for Lawyer {lawyer.name}</h2>
    <Card>
    <CardContent>
     
      <List>
        {lawyerAppointments.map((appointment, index) => (
          <div key={appointment.id}>
            <ListItem>
              <ListItemText
                primary={`Appointment ID: ${appointment.lawyerId}`}
                secondary={`Date and Time: ${appointment.date}`}
              />
            </ListItem>
            {index < lawyerAppointments.length - 1 && <Divider />}
          </div>
        ))}
      </List>
      </CardContent>
      </Card>
    </div>
  );
}

export default AppointmentHistory;
