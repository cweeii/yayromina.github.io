import {
  AboutView,
  ContactView,
  HomeView,
  WorkView,
} from '../imports/components/views';
import {
  Route,
  Router,
  hashHistory,
} from 'react-router';

import App from './app';
import React from 'react';
import ReactGA from 'react-ga';
import {render}             from 'react-dom';

ReactGA.initialize('UA-96611992-1');

function fireTracking() {
  ReactGA.pageview(window.location.hash); //eslint-disable-line
}

function run() {
  render(
    <Router onUpdate={fireTracking} history={hashHistory}>
      <Route component={App}>
        <Route path="/" component={HomeView} />
        <Route path="/about" component={AboutView} />
        <Route path="/work" component={WorkView} />
        <Route path="/contact" component={ContactView} />
      </Route>
    </Router>,
    document.getElementById('app')
  );
}

const loadedStates = ['complete', 'loaded', 'interactive'];
if (loadedStates.includes(document.readyState) && document.body) {
  run();
} else {
  window.addEventListener('DOMContentLoaded', run, false);
}
