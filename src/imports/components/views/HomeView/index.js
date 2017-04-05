import React from 'react';
import anime from 'animejs';
import styles from './styles';

export default class HomeView extends React.Component {

  componentDidMount() {
    // this.animate();
  }

  animate = () => {
    anime({
      translateY: 250,
      scale: 2,
      easing: 'easeInOutQuart',
      duration: 2000,
      elasticity: 1,
      targets: this.headline,
    });
  }
  render() {
    return (
      <div style={styles.base}>
        <div style={styles.headlines}>
          <h1 ref={(el) => { this.headline = el; }}>Romina Barrett</h1>
          <h2>Senior Web Engineer &amp; Animator</h2>
        </div>
      </div>
    );
  }
}
