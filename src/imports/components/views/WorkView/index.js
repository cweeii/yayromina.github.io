import 'whatwg-fetch';

import React, { PropTypes } from 'react';

import EasyTransition from 'react-easy-transition';
import Project from './Project';
import { hashHistory } from 'react-router';
import portfolioData from '../../data/portfolio.json';
import radium from 'radium';
import styles from './styles';

@radium
export default class WorkView extends React.Component {
  static propTypes = {
    isHome: PropTypes.func,
  };

  componentWillMount() {
    this.props.isHome(false);
  }

  state = {
    portfolio: [],
    portfolio_loaded: true,
  };

  componentDidMount() {
    console.log(portfolioData.portfolio);
  }

  render() {
    return (
      <div>
        <EasyTransition
          path={location.pathname} //eslint-disable-line
          initialStyle={{ opacity: 0 }}
          transition="all 0.3s ease-in"
          finalStyle={{ opacity: 1 }}
        >
          <div style={styles.base}>
            <h1 style={styles.headline}>
              Here are a few of my favorite past projects! I was the sole
              developer for these websites, client and server-side.
            </h1>
            <h2 style={styles.tagline}>
              I currently specialize in React projects.
            </h2>
            <div>
              {portfolioData.portfolio.map((project, index) =>
                <Project
                  title={project.title}
                  description={project.description}
                  index={index}
                  url={project.url}
                  imageUrl={project.imageUrl}
                  logoUrl={project.logoUrl}
                  key={`project-${index}`}
                />
              )}
            </div>
            <div>
              <p style={styles.footerType}>
                These are just a few of the sites that I've worked on. Want to
                see more?{' '}
                <a
                  onClick={() => {
                    hashHistory.push('/contact');
                  }}
                >
                  Let's talk!
                </a>
              </p>
            </div>
          </div>
        </EasyTransition>
      </div>
    );
  }
}
