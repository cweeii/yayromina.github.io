import React, { PropTypes } from 'react';

import radium from 'radium';
import styles from './styles';

@radium
export default class Project extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    index: PropTypes.number,
    url: PropTypes.string,
    imageUrl: PropTypes.string,
    logoUrl: PropTypes.string,
  };

  state = {
    index: this.props.index,
    hover: false,
  };
  render() {
    return (
      <div style={styles.projectBase}>
        <div style={styles.projectWrapper}>
          <div style={styles.projectImageWrapper(this.props.index % 2 === 0)}>
            <a href={this.props.url} target="_blank" rel="noreferrer noopener">
              <img
                style={styles.projectLogo(true)}
                src={this.props.logoUrl}
                alt={`${this.props.title} Logo`}
              />
            </a>
            <a
              href={this.props.title}
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                style={styles.projectImage}
                src={this.props.imageUrl}
                alt={`Romina Barrett and ${this.props.title}`}
                key={`${this.props.title} Image`}
              />
            </a>
          </div>
          <div
            style={styles.projectDescriptionWrapper(
              this.props.index % 2 != '1'
            )}
          >
            <a
              href={this.props.title}
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                style={styles.projectLogo(false, this.props.title === 'Emota')}
                src={this.props.logoUrl}
                alt={`${this.props.title} Logo`}
              />
            </a>
            <p>
              {this.props.description}
            </p>
            <a
              href={this.props.title}
              target="_blank"
              rel="noreferrer noopener"
              style={styles.button(this.state.hover)}
              onMouseEnter={() =>
                this.setState({
                  hover: true,
                })}
              onMouseLeave={() =>
                this.setState({
                  hover: false,
                })}
            >
              Visit {this.props.title}
            </a>
          </div>
        </div>
      </div>
    );
  }
}
