import React from 'react';
import { hashHistory } from 'react-router';

export default class Navigation extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => hashHistory.push('/about')}>About</button>
        <button onClick={() => hashHistory.push('/work')}>Work</button>
        <button onClick={() => hashHistory.push('/Contact')}>Contact</button>
      </div>
    );
  }
};
