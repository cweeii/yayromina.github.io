import React, {PropTypes} from 'react';

import {StyleRoot} from 'radium';
import pathData from '../../settings/paths.json';
import styles from './styles';

export default class App extends React.Component {

  static propTypes = {
    children: PropTypes.node,
    route: PropTypes.object, // eslint-disable-line
  }

  state = {
    loading: true,
  }

  toggleLoading = () => this.setState({ loading: !this.state.loading });

  baseUrl = () => {
    if (this.props && this.props.route && this.props.route.nodeEnd) {
      return pathData[this.props.route.nodeEnv].base_url;
    }
    return '';
  }

  render() {
    return (
      <StyleRoot>
        {React.cloneElement(this.props.children, {
          baseUrl: this.baseUrl(),
          toggleLoading: this.toggleLoading,
        })}
      </StyleRoot>
    );
  }
}
