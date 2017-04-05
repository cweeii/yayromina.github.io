import Logo from 'babel!svg-react!../../../../../static/images/branding/logo.svg?name=Logo'; //eslint-disable-line
import React from 'react';
import anime from 'animejs';
import styles from './styles';

export default class HomeView extends React.Component {

  componentDidMount() {
    this.logoAnimation();
    this.circleAnimation();
  }

  circleAnimation = () => {
    anime({
      easing: 'easeInCubic',
      opacity: 0,
      duration: 100,
      scaleX: 0,
      scaleY: 0,
      delay: 1800,
      targets: this.circle,
    });
  }

  logoAnimation = () => {
    anime({
      translateY: '300px',
      duration: 350,
      direction: 'alternate',
      easing: 'easeInCubic',
      scaleX: {
        value: 1.44,
        duration: 150,
        delay: 268,
      },
      scaleY: {
        value: 0.95,
        duration: 125,
        delay: 268,
      },
      loop: 6,
      targets: this.logo,
    });
  }
  render() {
    return (
      <div style={styles.base}>
        <div style={styles.logoWrapper}>
          <div style={styles.logo} ref={(el) => { this.logo = el; }}>
            <Logo />
            <div style={styles.circle} ref={(el) => { this.circle = el; }} />
          </div>
        </div>
        <div style={styles.headlines}>
          <h1 ref={(el) => { this.headline = el; }}>Romina Barrett</h1>
          <h2>Senior Web Engineer &amp; Animator</h2>
        </div>
      </div>
    );
  }
}
