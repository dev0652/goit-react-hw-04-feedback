import React, { Component } from 'react';
import {
  Wrapper,
  Heading,
  ButtonList,
  ButtonItem,
  Button,
  StatList,
  StatItem,
} from './Feedback.styled';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <Wrapper>
        <Heading>Please leave your feedback</Heading>
        <ButtonList>
          {Object.keys(this.state).map(key => (
            <ButtonItem key={key}>
              <Button>{key}</Button>
            </ButtonItem>
          ))}
        </ButtonList>

        <Heading>Statistics</Heading>
        <StatList>
          {Object.entries(this.state).map(([key, value]) => (
            <StatItem key={key}>
              {key}: {value}
            </StatItem>
          ))}
        </StatList>
      </Wrapper>
    );
  }
}

export default Feedback;
