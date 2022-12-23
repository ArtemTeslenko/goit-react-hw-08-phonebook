import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavBox = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const NavItem = styled(NavLink)`
  font-size: 24px;
  text-decoration: none;
  color: #37474f;
  transition: all 350ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    transform: scale(1.1);
  }

  &:not(:last-child) {
    margin-right: 20px;
  }

  &.active {
    color: #e26060;
  }
`;
