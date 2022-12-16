import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';
import { AppBar } from '../AppBar';
import { Navigation } from 'components/Navigation';
import { UserMenu } from 'components/UserMenu';

export const Layout = () => {
  return (
    <Container>
      <AppBar>
        <Navigation />
        <UserMenu />
      </AppBar>
      <Outlet />
    </Container>
  );
};
