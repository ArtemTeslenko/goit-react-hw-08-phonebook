import { useDispatch } from 'react-redux';
import {
  FormLabel,
  FormInput,
} from 'components/ContactForm/ContactForm.styled';
import { filterContacts } from 'redux/filterSlice';
import { Wrapper } from './Filter.styled';

export function Filter() {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <FormLabel>Find contats by name</FormLabel>
      <FormInput
        name="filter"
        onChange={e => dispatch(filterContacts(e.target.value.toLowerCase()))}
      />
    </Wrapper>
  );
}
