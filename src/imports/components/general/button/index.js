import React, { PropTypes } from 'react';

import { hashHistory } from 'react-router';
import radium from 'radium';
import styles from './styles';

@radium
export default class Button extends React.Component {

  static propTypes = {
    label: PropTypes.string,
    path: PropTypes.string,
    target: PropTypes.string,
  }
  state = {
    hover: false,
  }

  changeLink = () => {
    hashHistory.push(this.props.path);
  }

  render() {
    return (
      <div style={styles.buttonWrapper}>
        <a
          onClick={() => this.changeLink()}
          tabIndex="0"
          style={styles.base(this.state.hover)}
          target={this.props.target}
          onMouseEnter={() =>
            this.setState({
              hover: true,
            })
          }
          onMouseLeave={() =>
            this.setState({
              hover: false,
            })
          }
        >
          {this.props.label}
        </a>
      </div>
    );
  }
}
