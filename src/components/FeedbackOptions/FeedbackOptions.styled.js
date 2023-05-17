import { styled } from 'styled-components';

export const ButtonList = styled.ul`
  display: flex;
  gap: 10px;
`;

export const ButtonItem = styled.li``;

export const Button = styled.button`
  font-size: 1.2rem;
  text-transform: capitalize;
  border: none;
  border-radius: 4px;

  padding: 10px;
  min-width: 5.5rem;

  transition: all 300ms;

  &:hover {
    color: white;
    background-color: ${setButtonHoverBgColor};
  }
`;

function setButtonHoverBgColor({ option }) {
  switch (option) {
    case 'good':
      return '#4CAF50';
    case 'neutral':
      return 'goldenrod';
    case 'bad':
      return '#f44336';
    default:
      return 'normal';
  }
}
