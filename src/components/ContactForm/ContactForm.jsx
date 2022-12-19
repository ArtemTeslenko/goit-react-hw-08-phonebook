import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsOperations';
import {
  FormInput,
  Form,
  FormLabel,
  AddContactBtn,
} from './ContactForm.styled';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const items = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (items.length > 0 && items.find(item => item.name === name)) {
      alert('The contact is already in your phonebook.');
      setName('');
      setNumber('');
      return;
    }

    dispatch(addContact({ name, number }));

    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel>Name</FormLabel>
      <FormInput
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <FormLabel />
      <FormInput
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={e => setNumber(e.target.value)}
      />
      <AddContactBtn type="submit">Add contact</AddContactBtn>
    </Form>
  );
}
