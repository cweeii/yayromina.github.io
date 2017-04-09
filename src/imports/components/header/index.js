import React, { PropTypes } from 'react';

import Logo from 'babel!svg-react!../../../../static/images/branding/logo.svg?name=Logo'; //eslint-disable-line
import Navigation from '../navigation';
import { hashHistory } from 'react-router';
import radium from 'radium';
import styles from './styles';

@radium
export default class Header extends React.Component {

  static propTypes = {
    isHome: PropTypes.bool,
  }

  state = {
    hover: false,
    isHome: true,
  }

  render() {
    return (
      <div style={styles.header(this.props.isHome)} key="header">
        <div style={styles.base}>
          <div
            style={styles.logoContainer}
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
            <a
              tabIndex="0"
              onClick={() => { hashHistory.push('/'); }}
            >
              <span style={styles.logo}><Logo /></span> <span style={styles.name} key="name">Romina Barrett</span>
            </a>
          </div>
          <div style={styles.navigation}>
            <Navigation
              isHeader
            />
          </div>
        </div>
      </div>
    );
  }
}
