import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/authOperations';
import { selectIsLoggedIn, selectUser } from 'redux/selectors';
import { Logout, MenuContainer, MenuMail } from './UserMenu.styled';

export const UserMenu = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <>
      {isLoggedIn && (
        <MenuContainer>
          <MenuMail>{user.email}</MenuMail>
          <Logout type="button" onClick={() => dispatch(logout())}>
            Logout
          </Logout>
        </MenuContainer>
      )}
    </>
  );
};
