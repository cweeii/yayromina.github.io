import EasyTransition from 'react-easy-transition';
import React from 'react';
import styles from './styles';

export default class ContactView extends React.Component {
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
            <h1>Contact</h1>
            <h2>Cool!</h2>
            <p>I'm excited to hear about what you have cookin' and how I may help!</p>
            <form method="POST" action="https://formspree.io/hi@romina.io">
              <input type="text" name="name" placeholder="Name" />
              <input type="email" name="email" placeholder="Email Address" />
              <textarea name="message" rows="4" />
              <button type="submit">Send</button>
            </form>
          </div>
        </EasyTransition>
      </div>
    );
  }
}
