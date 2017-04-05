import React, { PropTypes } from 'react';

export default class MainLayout extends React.Component {

  static propTypes = {
    children: PropTypes.node,
  }
  render() {
    return (
      <div>
        <h1>Main Layout</h1>
        {this.props.children}
      </div>
    );
  }
}
