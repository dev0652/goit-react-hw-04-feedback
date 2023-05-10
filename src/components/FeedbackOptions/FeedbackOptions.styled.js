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
  /* border-radius: 8px; */
  border-radius: 50%;

  padding: 10px;
  width: 7rem;
  height: 7rem;
`;

/* background-color: ${
  ({ color }) => {
  return switch (color) {
      case 'good': 'green'; break;
      case 'neutral': 'goldenrod'; break;
      case 'bad': 'red'; break;
      default: 'normal'; break;
    }
  }
  }; */
