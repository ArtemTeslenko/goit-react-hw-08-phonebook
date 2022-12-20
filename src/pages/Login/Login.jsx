import { useSelector } from 'react-redux';
import { selectIsgettingCurrent } from 'redux/selectors';
import { LoginForm } from 'components/LoginForm';

export const Login = () => {
  const isFetchingCurrentUser = useSelector(selectIsgettingCurrent);

  return !isFetchingCurrentUser && <LoginForm />;
};
