import { useState } from 'react';

import FeedbackOptions from '../FeedbackOptions';
import Notification from '../Notification';
import Section from '../Section';
import Statistics from '../Statistics';

import { Wrapper } from './App.styled';

// ######################################

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    // good / total * 100%
    const total = countTotalFeedback();
    return Math.round((good / total) * 100);
  };

  const updateFeedback = key => () => {
    switch (key) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        return;
    }
  };

  const state = { good, neutral, bad };
  const keys = Object.keys(state);

  return (
    <Wrapper>
      {/* Feedback */}
      <Section title="Please leave feedback">
        <FeedbackOptions optionsKeys={keys} onLeaveFeedback={updateFeedback} />
      </Section>

      {/* Stats */}
      <Section title="Statistics">
        {/* No feedback submitted */}
        {countTotalFeedback() === 0 && (
          <Notification message="There is no feedback yet" />
        )}

        {/* Feedback submitted */}
        {countTotalFeedback() !== 0 && (
          <Statistics
            options={state}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </Wrapper>
  );
}
