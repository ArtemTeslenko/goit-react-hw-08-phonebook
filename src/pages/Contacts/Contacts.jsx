import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Section, Tytle } from './Contacts.styled';

export function Contacts() {
  return (
    <Section>
      <Tytle>Contacts</Tytle>
      <ContactForm />
      <Filter />
      <ContactList />
    </Section>
  );
}
