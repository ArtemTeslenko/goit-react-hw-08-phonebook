import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/authOperations';
import { selectUser } from 'redux/selectors';
import { MenuContainer, MenuMail } from './UserMenu.styled';
import Button from '@mui/material/Button';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <>
      <MenuContainer>
        <MenuMail>{user.email}</MenuMail>
        <Button
          type="button"
          onClick={() => dispatch(logout())}
          variant="outlined"
          color="primary"
          size="medium"
        >
          Logout
        </Button>
      </MenuContainer>
    </>
  );
};
