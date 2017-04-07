import Button from '../general/button';
import React from 'react';
import { hashHistory } from 'react-router';
import styles from './styles';

export default class Navigation extends React.Component {
  render() {
    return (
      <div style={styles.navigationWrapper}>
        <Button
          label="About"
          path="/about"
          target="_self"
        />
        <Button
          label="Work"
          path="/work"
          target="_self"
        />
        <Button
          label="Contact"
          path="/contact"
          target="_self"
        />
      </div>
    );
  }
};
