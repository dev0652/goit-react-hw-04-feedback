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
    good: 2,
    neutral: 3,
    bad: 5,
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((prev, value) => prev + value, 0);
  };

  countPositiveFeedbackPercentage = () => {};

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

          <StatItem key="total">Total: {this.countTotalFeedback}</StatItem>
        </StatList>
      </Wrapper>
    );
  }
}

export default Feedback;
