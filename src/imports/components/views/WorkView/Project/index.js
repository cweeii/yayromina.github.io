import React, { PropTypes } from 'react';

import styles from './styles';

export default class Project extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    index: PropTypes.number,
    url: PropTypes.string,
    image: PropTypes.string,
  }

  componentDidMount() {
    console.log(this.props.url);
  }

  state = {
    index: this.props.index,
  }
  render() {
    return (
      <div style={styles.base}>
        <img src={this.props.image} alt={this.props.title} />
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
        <a href={this.props.url} target="_blank" rel="noreferrer noopener">Visit {this.props.title}</a>
      </div>
    );
  }
}
