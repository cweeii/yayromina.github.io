import React, {PropTypes} from 'react';

import MainLayout from '../imports/components/layouts/MainLayout';
import {StyleRoot} from 'radium';
import styles from './styles';

const App = props => (
  <StyleRoot>
    <MainLayout
      children={props.children}
    />
  </StyleRoot>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;
