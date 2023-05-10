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
  border-radius: 50%;

  /* padding: 10px; */
  width: 6rem;
  height: 6rem;

  background-color: ${setButtonBgColor};

  &:hover {
    color: white;
    background-color: ${setButtonHoverBgColor};
  }
`;

function setButtonBgColor({ option }) {
  switch (option) {
    case 'good':
      // return '#4CAF50';
      return '#53d769';
    case 'neutral':
      // return 'goldenrod';
      return '#5ba4fc';
    case 'bad':
      // return '#f44336';
      return '#fc3d39';
    default:
      return 'normal';
  }
}

function setButtonHoverBgColor({ option }) {
  switch (option) {
    case 'good':
      return '#46c263';
    case 'neutral':
      return '#5897ee';
    case 'bad':
      return '#e33437';
    default:
      return 'normal';
  }
}
