import React, { Component } from 'react';

import Section from './components/Section/Section';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  saveContacts = contact => {
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, contact] };
    });
  };

  setFilter = e => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  filterContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name
        .toLowerCase()
        .trim()
        .includes(this.state.filter.toLowerCase())
    );
  };

  removeContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    let filteredContacts = this.filterContacts();
    return (
      <main>
        <Section title="Phonebook">
          <ContactForm
            saveContacts={this.saveContacts}
            contacts={this.state.contacts}
          />
        </Section>
        <Section title="Contacts">
          <Filter setFilter={this.setFilter} filterState={this.state.filter} />
          <ContactList
            filteredContacts={filteredContacts}
            removeContact={this.removeContact}
          />
        </Section>
      </main>
    );
  }
}
