import EasyTransition from 'react-easy-transition';
import React from 'react';
import styles from './styles';

export default class WorkView extends React.Component {
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
            <h1>Work</h1>
          </div>
        </EasyTransition>
      </div>
    );
  }
}
