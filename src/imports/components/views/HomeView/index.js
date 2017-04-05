import React from 'react';
import styles from './styles';

export default class HomeView extends React.Component {
  render() {
    return (
      <div style={styles.base}>
        <div style={styles.headlines}>
          <h1>Romina Barrett</h1>
          <h2>Senior Web Engineer &amp; Animator</h2>
        </div>
      </div>
    );
  }
}
