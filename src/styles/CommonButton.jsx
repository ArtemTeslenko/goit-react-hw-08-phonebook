import styled from 'styled-components';

export const Button = styled.button`
  box-sizing: border-box;
  padding: 5px 15px;
  font-size: 20px;
  color: #546e7a;
  background-color: transparent;
  border: 1px solid #546e7a;
  border-radius: 4px;
  transition: all 350ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    background-color: #757575;
    color: #ffffff;
  }
`;
