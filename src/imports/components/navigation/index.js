import React, { PropTypes } from 'react';

import Button from '../general/button';
import radium from 'radium';
import styles from './styles';

@radium
export default class Navigation extends React.Component {

  static propTypes = {
    isHeader: PropTypes.bool,
  }
  render() {
    return (
      <div style={styles.navigationWrapper}>
        <Button
          label="About"
          path="/about"
          target="_self"
          isHeader={this.props.isHeader}
        />
        <Button
          label="Work"
          path="/work"
          target="_self"
          isHeader={this.props.isHeader}
        />
        <Button
          label="Contact"
          path="/contact"
          target="_self"
          isHeader={this.props.isHeader}
        />
      </div>
    );
  }
};
