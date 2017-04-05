import Logo from 'babel!svg-react!../../../../../static/images/branding/logo.svg?name=Logo'; //eslint-disable-line
import React from 'react';
import anime from 'animejs';
import styles from './styles';

export default class HomeView extends React.Component {

  componentDidMount() {
    this.logoAnimation();
    this.circleAnimation();
    this.textAnimation();
    this.flowerAnimation();
    this.taglineAnimation();
  }

  circleAnimation = () => {
    anime({
      easing: 'easeInCubic',
      opacity: 0,
      duration: 200,
      scaleX: 0,
      scaleY: 0,
      delay: 1700,
      targets: this.circle,
    });
  }

  flowerAnimation = () => {
    anime({
      easing: 'easeInCubic',
      duration: 400,
      scaleX: 1.2,
      scaleY: 1.2,
      delay: 1500,
      targets: this.flower,
      rotate: {
        easing: 'easeOutCubic',
        value: 135,
        delay: 1650,
        duration: 900,
      },
    });
  }

  textAnimation = () => {
    anime({
      delay: 2720,
      targets: '.title span',
      translateY: '-85px',
      scaleY: 1,
      opacity: 1,
      duration: function(el, i, l) {
        return 1050 + (i * 30);
      },
    });
  }

  taglineAnimation = () => {
    anime({
      delay: 3250,
      duration: 800,
      targets: this.tagline,
      opacity: 1,
      translateY: 20,
    });
  }
  logoAnimation = () => {
    anime({
      translateY: '150px',
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
            <div style={styles.flower} ref={(el) => { this.flower = el; }}>
              <Logo />
            </div>
            <div style={styles.circle} ref={(el) => { this.circle = el; }} />
          </div>
        </div>
        <div style={styles.headlines}>
          <h1 style={styles.headline} className="title" ref={(el) => { this.headline = el; }}>
            <span style={styles.span}>R</span>
            <span style={styles.span}>o</span>
            <span style={styles.span}>m</span>
            <span style={styles.span}>i</span>
            <span style={styles.span}>n</span>
            <span style={styles.span}>a</span>
            <span style={styles.span}>&nbsp;</span>
            <span style={styles.span}>B</span>
            <span style={styles.span}>a</span>
            <span style={styles.span}>r</span>
            <span style={styles.span}>r</span>
            <span style={styles.span}>e</span>
            <span style={styles.span}>t</span>
            <span style={styles.span}>t</span>
          </h1>
          <h2 ref={(el) => { this.tagline = el; }} style={styles.tagline}>Senior Web Engineer</h2>
        </div>
      </div>
    );
  }
}
