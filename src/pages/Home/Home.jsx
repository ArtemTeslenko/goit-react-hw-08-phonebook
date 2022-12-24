import { useSelector } from 'react-redux';
import { selectUser } from 'redux/selectors';
import { Container, Welcome } from './Home.styled';

export const Home = () => {
  const user = useSelector(selectUser);
  return (
    <Container>
      <Welcome>Welcome, {user.name ?? 'somebody'}!</Welcome>
    </Container>
  );
};
