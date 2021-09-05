//import styles from "./ContactList.module.css";
import PropTypes from "prop-types";

function fits(name, filter) {
  return name.toLowerCase().includes(filter.toLowerCase());
}

function ContactList({ contacts, filter, onDelete }) {
  return (
    <ul>
      {contacts
        .filter((contact) => fits(contact.name, filter))
        .map((contact) => {
          return (
            <li key={contact.id}>
              {contact.name} {contact.number}
              <button
                type="button"
                onClick={() => {
                  onDelete(contact.id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
