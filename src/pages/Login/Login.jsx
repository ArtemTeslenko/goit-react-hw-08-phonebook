import { useSelector } from 'react-redux';
import { selectIsgettingCurrent } from 'redux/selectors';
import { LoginForm } from 'components/LoginForm';
import { Section, Title } from '../Common.styled';

export const Login = ({ setPath }) => {
  const isFetchingCurrentUser = useSelector(selectIsgettingCurrent);

  return (
    !isFetchingCurrentUser && (
      <Section>
        <Title>Login yourself</Title>
        <LoginForm setPath={setPath} />
      </Section>
    )
  );
};