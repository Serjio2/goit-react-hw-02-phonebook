import { nanoid } from 'nanoid';
import { StyledContactList } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <StyledContactList>
      {contacts.map(contact => (
        <li key={nanoid()}>{contact.name}: {contact.number}
        <button onClick={() => onDelete(contact.id)}>Delete</button>
        </li>
      ))}
    </StyledContactList>
  );
};
