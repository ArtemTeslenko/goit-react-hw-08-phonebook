import { useSelector } from 'react-redux';
import { selectIsgettingCurrent } from 'redux/selectors';
import { LoginForm } from 'components/LoginForm';
import { Section, Tytle } from './Login.styled';

export const Login = ({ setPath }) => {
  const isFetchingCurrentUser = useSelector(selectIsgettingCurrent);

  return (
    !isFetchingCurrentUser && (
      <Section>
        <Tytle>Login yourself</Tytle>
        <LoginForm setPath={setPath} />
      </Section>
    )
  );
};
