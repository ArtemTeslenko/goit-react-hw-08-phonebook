import { Section, Title } from './Register.styled';
import { RegisterForm } from '../../components/RegisterForm';

export const Register = ({ setPath }) => {
  return (
    <Section>
      <Title>Register yourself</Title>
      <RegisterForm setPath={setPath} />
    </Section>
  );
};
