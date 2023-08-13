import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, onAdd}) => {
  const [ name, setName ] = useState();
  const [ phone, setPhone ] = useState();
  const [email, setEmail] = useState();
  const [ isDupeName, setIsDupeName ] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isDupeName) {
      onAdd(name, phone, email);
      setName('')
      setPhone('')
      setEmail('')
    }
  };

  useEffect(() => {
    const isDupeName = contacts.some(c => c.name === name) // .some checks to see if any of the name values match and returns true or false
    setIsDupeName(isDupeName) // Whatever output we set it to the booleon
  }, [name, contacts]);
  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
        /> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tileData={contacts} />
      </section>
    </div>
  );
};
