import React, { PropTypes } from 'react';

export default class MainLayout extends React.Component {

  static propTypes = {
    children: PropTypes.node,
  }
  render() {
    return (
      <div>
        <h1>MY layout</h1>
        {React.cloneElement(this.props.children)}
      </div>
    );
  }
}
