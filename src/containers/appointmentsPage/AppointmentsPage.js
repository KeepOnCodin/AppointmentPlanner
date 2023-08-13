import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ appointments, contacts, onAdd}) => {
  /*
  Define state variables for 
  appointment info
  */
  const [ name, setName ] = useState('')
  const [ contact, setContact ] = useState('')
  const [date, setDate ] = useState('')
  const [time, setTime ] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   onAdd(name, contact, date, time) // use callack funtion to add input after submit
   setName('') // Clear Data
   setContact('')
   setDate('')
   setTime('')
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
        contacts={contacts}
        name={name}
        setName={setName}
        contact={contact}
        setContact={setContact}
        date={date}
        setDate={setDate}
        handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tileData={appointments}/>
      </section>
    </div>
  );
};