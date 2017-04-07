import EasyTransition from 'react-easy-transition';
import React from 'react';
import portfolio from '../../data/portfolio';
import radium from 'radium';
import styles from './styles';

export default class WorkView extends React.Component {
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
            <h1>My Work</h1>
            <h2>Here are a few of my favorite past projects. I was the sole developer for all of these websites on both the front and backend.</h2>
            <p>Looking for more or wondering if I've worked with a certain dev stack? Let's talk!</p>

            <div>
              {Object.keys(portfolio).map(function(keyName, keyIndex) {
                return keyIndex;
              })}
            </div>
          </div>
        </EasyTransition>
      </div>
    );
  }
}
