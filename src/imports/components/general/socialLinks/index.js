import React, { PropTypes } from 'react';

import radium from 'radium';
import styles from './styles';

@radium
export default class SocialLink extends React.Component {

  static propTypes = {
    url: PropTypes.string,
    icon: PropTypes.string,
    title: PropTypes.string,
  }

  state = {
    class: `fa fa-${this.props.icon}`,
    hover: false,
    target: '_blank',
    rel: 'noopener noreferrer',
  }
  render() {
    return (
      <li style={styles.socialLink}>
        <a
          style={styles.socialIcon(this.state.hover)}
          title={this.props.title} href={this.props.url}
          target={this.state.target}
          rel={this.state.rel}
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
          <i className={this.state.class} />
        </a>
      </li>
    );
  }
}
