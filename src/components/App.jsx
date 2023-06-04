import { Component } from 'react';
import Section from './section/section';
import FeedbackBtn from './buttons/buttons';
import { object } from 'prop-types';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    // const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    return (
      <>
        <Section title="Please leave feedback" />
        <FeedbackBtn options={options} />
        <Section />
        <Section title="Statictics"></Section>
      </>
    );
  }
}
export { App };
