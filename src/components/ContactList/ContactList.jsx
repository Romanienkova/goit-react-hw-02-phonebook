import PropTypes from 'prop-types';

import {StyledContactList} from './ContactList.styled';


const ContactList = ({ filteredContacts, removeContact }) => {
  return (
    <StyledContactList>
      {filteredContacts.map(contact => {
        return (
          <li key={contact.id}>
            <span>{contact.name}: </span>
            <span>{contact.number}</span>
            <button type="button" onClick={() => removeContact(contact.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </StyledContactList>
  );
};

export default ContactList;

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  removeContact: PropTypes.func,
};
