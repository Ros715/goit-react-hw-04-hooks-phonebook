import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import PropTypes from "prop-types";

function ContactForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form
      className={styles.form}
      style={{ marginBottom: "32px" }}
      onSubmit={(e) => {
        e.preventDefault();
        //console.log(this.state.name, this.state.number);
        onSubmit(name, number);
        reset();
      }}
    >
      <p>Name</p>
      <input
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        onChange={(e) => {
          //console.log("name", e.currentTarget.value);
          setName(e.currentTarget.value);
        }}
      />

      <p>Number</p>
      <input
        type="tel"
        value={number}
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        onChange={(e) => {
          //console.log("number", e.currentTarget.value);
          setNumber(e.currentTarget.value);
        }}
      />
      <div>
        <br />
        <button type="submit">Add contact</button>
      </div>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
