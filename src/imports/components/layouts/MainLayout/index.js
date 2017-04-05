import React, { PropTypes } from 'react';

import emoji from 'node-emoji';

export default class MainLayout extends React.Component {

  static propTypes = {
    children: PropTypes.node,
  }

  state = {
    seenAnimation: false,
  }

  componentDidMount() {
    console.log(emoji.get('wave') + ' Hi there, thanks for digging my code! You can check out the full repo for this website at https://github.com/yayromina/yayromina.github.io ' + emoji.get('star') + ' ' + emoji.get('sparkles') +' Please contact me at hi@romina.io or through this site if you\'re interested in working together! Thank you! '+ emoji.get('sparkling_heart')); // eslint-disable-line
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
