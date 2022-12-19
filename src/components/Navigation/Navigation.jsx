import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
import { NavBox, NavItem } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <NavBox>
      {!isLoggedIn ? (
        <>
          <NavItem to={'register'}>Register</NavItem>
          <NavItem to={'login'}>Log in</NavItem>
        </>
      ) : (
        <NavItem to={'contacts'}>Contacts</NavItem>
      )}
    </NavBox>
  );
};
