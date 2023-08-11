import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import { Phonebook } from './Phonebook/Phonebook';
import { Contacts } from './Contacts/Contacts';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = (newName) => {
    this.setState( prevState => {
      return ({
        name: [...prevState.name, newName],
      })
        
      
    })
    // console.log(newName);
  }

  render() {
    return (
      <div>
        <GlobalStyle />

        <Section title='Phonebook'>
          <Phonebook addContact={this.addContact}/>
        </Section>

        <Section title='Contacts'>
          <Contacts name={this.state.name}/>
        </Section>
      </div>
    );
  }
}
