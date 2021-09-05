import React, { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm.js";
import Filter from "./components/Filter/Filter.js";
import ContactList from "./components/ContactList/ContactList.js";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem("phonebook")) ?? [];
  });
  const [filter, setFilter] = useState(() => {
    return "";
  });

  useEffect(() => {
    window.localStorage.setItem("phonebook", JSON.stringify(contacts));
  }, [contacts]);

  const onAddContact = (name, number) => {
    const selectedContact = contacts.filter((contact) => {
      return contact.name === name;
    });
    if (selectedContact.length > 0) {
      alert(name + " is already in contacts");
    } else {
      const id = uuidv4();
      //console.log(contacts);
      const newList = contacts.filter((contact) => {
        return true;
      });
      //console.log(newList);
      newList.push({
        id: id,
        name: name,
        number: number,
      });
      setContacts(newList);
      //console.log(newList);
    }
  };

  const onChangeFilter = (filter) => {
    //console.log("filter", filter);
    setFilter(filter);
  };

  const onDeleteContact = (contactId) => {
    //console.log(contactId);
    const reducedList = contacts.filter((contact) => {
      return contact.id !== contactId;
    });
    setContacts(reducedList);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onAddContact} />

      <h2>Contacts</h2>
      <Filter onChange={onChangeFilter} />
      <ContactList
        contacts={contacts}
        filter={filter}
        onDelete={onDeleteContact}
      />
    </div>
  );
}

export default App;
