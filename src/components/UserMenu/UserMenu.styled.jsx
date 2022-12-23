import styled from 'styled-components';

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const MenuMail = styled.p`
  margin-right: 20px;
  margin-top: 0;
  margin-bottom: 0;
  color: #37474f;
`;

export const Logout = styled.button`
  box-sizing: border-box;
  height: 30px;
  padding: 5px 15px;
  color: #546e7a;
  background-color: transparent;
  border: 1px solid #546e7a;
  border-radius: 4px;
  transition: all 350ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover,
  &:focus {
    background-color: #757575;
    color: #ffffff;
  }
`;
