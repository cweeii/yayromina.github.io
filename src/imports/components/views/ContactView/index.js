import React from 'react';
import styles from './styles';

export default class ContactView extends React.Component {
  render() {
    return (
      <div style={styles.base}>
        <h1>Contact</h1>
        <h2>Cool!</h2>
        <p>I'm excited to hear about what you have cookin' and how I may help!</p>
      </div>
    );
  }
}
