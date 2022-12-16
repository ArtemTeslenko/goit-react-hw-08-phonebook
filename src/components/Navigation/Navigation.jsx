import { NavBox, NavItem } from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavBox>
      <NavItem to={'register'}>Register</NavItem>
      <NavItem to={'login'}>Log in</NavItem>
      <NavItem to={'contacts'}>Contacts</NavItem>
    </NavBox>
  );
};
