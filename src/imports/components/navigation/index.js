import Button from '../general/button';
import React from 'react';
import { hashHistory } from 'react-router';
import radium from 'radium';
import styles from './styles';

@radium
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
