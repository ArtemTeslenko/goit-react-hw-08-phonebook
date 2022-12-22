import { useSelector } from 'react-redux';
import { selectIsgettingCurrent } from 'redux/selectors';
import { LoginForm } from 'components/LoginForm';

export const Login = ({ setPath }) => {
  const isFetchingCurrentUser = useSelector(selectIsgettingCurrent);

  return !isFetchingCurrentUser && <LoginForm setPath={setPath} />;
};
