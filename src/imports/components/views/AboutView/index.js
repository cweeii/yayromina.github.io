import EasyTransition from 'react-easy-transition';
import React from 'react';
import { hashHistory } from 'react-router';
import radium from 'radium';
import styles from './styles';

@radium
export default class AboutView extends React.Component {
  render() {
    return (
      <div>
        <EasyTransition
          path={location.pathname}
          initialStyle={{opacity: 0}}
          transition="opacity 0.3s ease-in"
          finalStyle={{opacity: 1}}
        >
          <div style={styles.base}>
            <img src="../../../../static/images/branding/romina-large.png" style={styles.image} />
            <h1 style={styles.headline}>I am an award-winning developer and Woman of the Year nominee. I create web experiences that delight users, drive business goals, and hopefully make the world a better place.</h1>
            <div style={styles.halfTextWrapper}>
              <p style={styles.innerType}>I love creating cutting-edge, gorgeous websites that push the boundaries of CSS and javascript. I have dedicated my career to bringing stunning designs to life through code; the goal of every request and pixel is a rewarding user experience. I also have years of experience with split testing and conversion optimization, through which I learned to harness the power of data and anticipate user's needs. I love the competitive nature of AB testing, and my work has helped businesses triple their conversion rates.</p>
            </div>
            <p style={styles.innerType}>I grew up in the Pacific Northwest and currently reside in sunny San Diego, California. When I'm not programming, you'll probably find me at a music festival, practicing bikram, or on a hike with my corgi and partner-in-crime, <a href="https://instagram.com/yaygus" target="_blank" rel="noopener noreferrer">Gus</a>.</p>
            <p style={styles.footerType}>Looking for a resume? Download it here and feel free to check out my LinkedIn!</p>
          </div>
        </EasyTransition>
      </div>
    );
  }
}
