import { styled } from 'styled-components';

export const StatList = styled.ul`
  list-style: none;
`;

export const StatItem = styled.li`
  text-transform: capitalize;
  color: ${setStatColor};
`;

function setStatColor({ option }) {
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
