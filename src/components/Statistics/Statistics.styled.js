import { styled } from 'styled-components';

export const StatList = styled.ul`
  list-style: none;
  margin-bottom: 1rem;
`;

export const StatItem = styled.li`
  text-transform: capitalize;
  color: ${setStatColor};
`;

function setStatColor({ option }) {
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

export const Total = styled.p``;

export const Percentage = styled.p`
  color: #4caf50;
  font-weight: 500;
`;
