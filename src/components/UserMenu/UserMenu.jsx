import { Logout, MenuContainer, MenuMail } from './UserMenu.styled';

export const UserMenu = () => {
  return (
    <MenuContainer>
      <MenuMail>qwe@mail.com</MenuMail>
      <Logout>Logout</Logout>
    </MenuContainer>
  );
};
