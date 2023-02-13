import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import React, {Component} from 'react';

import { StyledForm, StyledInput, ButtonAdd } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
	};

	resetForm = () => {
		this.setState({
			name: '',
			number: '',
		});
	}
	
  handleSubmit = e => {
	  e.preventDefault();
	  
    const { contacts, saveContacts } = this.props;
    const contact = {
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
	  };
	  
    if (contacts.filter(el => el.name === this.state.name).length) {
      return alert(`${this.state.name} is already in contacts!`);
    }
    saveContacts(contact);
    this.resetForm();
  };

  render() {
    return (
    <StyledForm onSubmit={this.handleSubmit}>
      <label>
        <p>Name</p>
        <StyledInput
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label>
        <p>Number</p>
        <StyledInput
          type="tel"
          name="number"
          value={this.state.number}
          onChange={this.handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <ButtonAdd type="submit">Add contact</ButtonAdd>
    </StyledForm>)
  }
}

export default ContactForm;

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
