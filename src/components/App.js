import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { PhoneList } from './Phonelist/PhoneList';
import { Container } from './ContactForm/StyledContactFrom';

import { useSelector } from 'react-redux';
export const App = () => {

  const getContacts = useSelector(state=>state.contacts.items)
  


  // useEffect(() => {
  //   const savedContacts = localStorage.getItem('savedContacts');
  //   console.log(savedContacts);
  //   if (savedContacts !== null) {
  //     setContacts(JSON.parse(savedContacts));
  //   }
  // }, []);

  // useEffect(() => {
  //   if (contacts.length !== 0) {
  //     localStorage.setItem('savedContacts', JSON.stringify(contacts));
  //   }
  // }, [contacts]);

  // const addPhoneCard = newCard => {
  //   const checkName = newCard.Name;
  //   if (
  //     contacts.some(
  //       contact => contact.Name.toLowerCase() === checkName.toLowerCase()
  //     )
  //   ) {
  //     alert(`${checkName} already recorded in the directory`);
  //     return;
  //   }
  //   setContacts(prevState => [...prevState, newCard]);
  // };
  // const changefilterPhone = value => setFilter(value);

  // const getFiltered = () =>
  //   contacts.filter(contact =>
  //     contact.Name.toLowerCase().includes(filter.toLowerCase())
  //   );

 

  // const filtered = getFiltered();
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm  />
      {getContacts.length !== 0 && (
        <>
          <h2>Contacts</h2>
          <Filter  />
          <PhoneList/>
        </>
      )}
    </Container>
  );
};
