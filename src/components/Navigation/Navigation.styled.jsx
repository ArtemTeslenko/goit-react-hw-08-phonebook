import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavBox = styled.nav`
  display: flex;
`;

export const NavItem = styled(NavLink)`
  font-size: 24px;

  &:not(:last-child) {
    margin-right: 20px;
  }
`;
