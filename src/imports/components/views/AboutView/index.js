import React from 'react';
import styles from './styles';

export default class AboutView extends React.Component {
  render() {
    return (
      <div style={styles.base}>
        <h1>About</h1>
        <p>I create web experiences that delight users, drive business goals, and make the world a better place.</p>
        <p>I have years of experience in split testing and conversion optimization with heavy traffic web sites, through which I learned to harness the power of data and anticipate user's needs. I love creating cutting-edge, gorgeous websites that push the boundaries of CSS and javascript. I have dedicated my career to bringing stunning designs to life through code; every request and every pixel contributes to a rewarding user experience.</p>
        <p>I grew up in the Pacific Northwest and currently reside in sunny San Diego, California. When I'm not programming, you'll probably find me at a music festival, practicing bikram, or on a hike with my corgi and partner-in-crime, Gus.</p>
      </div>
    );
  }
}
