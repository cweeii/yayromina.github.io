import React, { PropTypes } from 'react';

import EasyTransition from 'react-easy-transition';
import { hashHistory } from 'react-router';
import radium from 'radium';
import styles from './styles';

@radium
export default class AboutView extends React.Component {

  static propTypes = {
    isHome: PropTypes.func,
  }

  componentWillMount() {
    this.props.isHome(false);
  }

  render() {
    return (
      <div>
        <EasyTransition
          path={location.pathname} //eslint-disable-line
          initialStyle={{opacity: 0}}
          transition="opacity 0.3s ease-in"
          finalStyle={{opacity: 1}}
        >
          <div style={styles.base}>
            <img
              src="../../../../static/images/branding/romina-large.png"
              style={styles.image}
              alt="Romina Barrett"
            />
            <h1
              style={styles.headline}
            >
              I am an award-winning developer and Woman of the Year nominee. I create web experiences that delight users, drive business goals, and hopefully make the world a better place.
            </h1>
            <div style={styles.halfTextWrapper}>
              <p style={styles.innerType}>I love creating cutting-edge, gorgeous websites that push the boundaries of CSS and javascript. I have dedicated my career to bringing stunning designs to life through thoughtful, performant code. I have years of experience with split testing and conversion optimization, through which I learned to harness the power of data and anticipate users' needs. I love the competitive nature of AB testing, and my work has helped businesses triple their conversion rates.</p>
            </div>
            <p style={styles.innerType}>I grew up in the Pacific Northwest and currently reside in sunny San Diego, California. When I'm not programming, you'll probably find me at a music festival, practicing bikram, or on a hike with my corgi and partner-in-crime, <a href="https://instagram.com/yaygus" target="_blank" rel="noopener noreferrer">Gus</a>.</p>
            <p style={styles.footerType}>Looking for a resume? <a href="../../../static/RominaBarrett_Resume.pdf" target="_blank">Download it here</a> and feel free to check out my <a href="https://www.linkedin.com/in/rominabarrett/" target="_blank">LinkedIn</a>!</p>
          </div>
        </EasyTransition>
      </div>
    );
  }
}
