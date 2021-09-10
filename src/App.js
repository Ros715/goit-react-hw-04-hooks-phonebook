import React, { useState /*, useEffect*/ } from "react";
import ContactForm from "./components/ContactForm/ContactForm.js";
import Filter from "./components/Filter/Filter.js";
import ContactList from "./components/ContactList/ContactList.js";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import useLocalStorage from "./hooks/useLocalStorage.js";

function App() {
  const [contacts, setContacts] = useLocalStorage("phonebook", []);
  const [filter, setFilter] = useState(() => {
    return "";
  });

  const onAddContact = (name, number) => {
    const selectedContact = contacts.filter((contact) => {
      return contact.name === name;
    });
    if (selectedContact.length > 0) {
      alert(name + " is already in contacts");
    } else {
      setContacts(
        contacts.concat({ id: uuidv4(), name: name, number: number })
      );
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
