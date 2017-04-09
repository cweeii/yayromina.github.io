import React, { PropTypes } from 'react';

import Header from '../../header';
import ImagePreloader from 'image-preloader';
import emoji from 'node-emoji';
import styles from './styles';

export default class MainLayout extends React.Component {

  static propTypes = {
    children: PropTypes.node,
  }

  state = {
    seenAnimation: false,
    isHome: false,
    scroll: false,
  }

  componentDidMount() {
    ImagePreloader.simplePreload('https://romina.io/static/images/portfolio/campforall.png', 'https://romina.io/static/images/portfolio/emota.png', 'https://romina.io/static/images/portfolio/invision.png', 'https://romina.io/static/images/portfolio/reachify.png');
    console.log(emoji.get('wave') + ' Hi there, thanks for digging my code! Please contact me at hi@romina.io or through this site if you\'re interested in working together! Thank you! '+ emoji.get('sparkling_heart')); // eslint-disable-line
    document.addEventListener('scroll', this.handleScroll);
  }
  seenAnimationToggle = () => {
    this.setState({seenAnimation: true});
  }

  isHome = (home) => {
    this.setState({isHome: home});
  }

  handleScroll = () => {
    if(document.body.scrollTop >= 40) {
      this.setState({scroll:true});
    } else {
      this.setState({scroll:false});
    }
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {
      seenAnimation: this.state.seenAnimation, seenAnimationToggle: this.seenAnimationToggle,
      isHome: this.isHome,
    })
   );
    return (
      <div style={styles.base}>
        <Header
          isHome={this.state.isHome}
          scroll={this.state.scroll}
        />
        {childrenWithProps}
      </div>
    );
  }
}
