import React, {PropTypes} from 'react';

import EasyTransition from 'react-easy-transition';
import Logo from 'babel!svg-react!../../../../../static/images/branding/logo.svg?name=Logo'; //eslint-disable-line
import Navigation from '../../navigation';
import SocialLink from '../../general/socialLinks';
import anime from 'animejs';
import styles from './styles';

export default class HomeView extends React.Component {

  static propTypes = {
    seenAnimation: PropTypes.bool,
    seenAnimationToggle: PropTypes.func,
  }

  componentDidMount() {
    this.introAnimations();
  }

  introAnimations = () => {
    if (!this.props.seenAnimation) {
      // circle animation
      anime({
        easing: 'easeInCubic',
        opacity: 0,
        duration: 150,
        scaleX: 0,
        scaleY: 0,
        delay: 1580,
        targets: this.circle,
      });
      // flower animation
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
        begin: () => {
          anime({
            delay: window.chrome ? 1180 : 800,
            targets: '.title span',
            translateY: '-85px',
            scaleY: 1,
            opacity: 1,
            duration: function(el, i, l) {
              return 1050 + (i * 30);
            },
          });
        },
      });

      // tagline animation
      anime({
        delay: 3250,
        duration: 800,
        targets: this.tagline,
        opacity: 1,
        translateY: 20,
      });
      // social link animation
      anime({
        delay: 3750,
        duration: 800,
        targets: this.navLinks,
        opacity: 1,
        translateY: 20,
        complete: this.props.seenAnimationToggle,
      });
      // social link animation
      anime({
        delay: 3950,
        duration: 1000,
        targets: this.socialLinks,
        opacity: 1,
        translateY: 20,
        complete: this.props.seenAnimationToggle,
      });
      // logo animation
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
  }
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
            <div
              style={styles.homeContainer}
              ref={(el) => { this.homeContainer = el; }}
            >
              <div style={styles.logoWrapper}>
                <div style={styles.logo} ref={(el) => { this.logo = el; }}>
                  <div style={styles.flower(this.props.seenAnimation)} ref={(el) => { this.flower = el; }}>
                    <Logo />
                  </div>
                  <div style={styles.circle(this.props.seenAnimation)} ref={(el) => { this.circle = el; }} />
                </div>
              </div>
              <div style={styles.headlines}>
                <h1 style={styles.headline} className="title" ref={(el) => { this.headline = el; }}>
                  <span style={styles.span(this.props.seenAnimation)}>R</span>
                  <span style={styles.span(this.props.seenAnimation)}>o</span>
                  <span style={styles.span(this.props.seenAnimation)}>m</span>
                  <span style={styles.span(this.props.seenAnimation)}>i</span>
                  <span style={styles.span(this.props.seenAnimation)}>n</span>
                  <span style={styles.span(this.props.seenAnimation)}>a</span>
                  <span style={styles.span(this.props.seenAnimation)}>&nbsp;</span>
                  <span style={styles.span(this.props.seenAnimation)}>B</span>
                  <span style={styles.span(this.props.seenAnimation)}>a</span>
                  <span style={styles.span(this.props.seenAnimation)}>r</span>
                  <span style={styles.span(this.props.seenAnimation)}>r</span>
                  <span style={styles.span(this.props.seenAnimation)}>e</span>
                  <span style={styles.span(this.props.seenAnimation)}>t</span>
                  <span style={styles.span(this.props.seenAnimation)}>t</span>
                </h1>
                <h2 ref={(el) => { this.tagline = el; }} style={styles.tagline(this.props.seenAnimation)}>Senior Web Engineer</h2>
              </div>
              <div style={styles.navLinks(this.props.seenAnimation)} ref={(el) => { this.navLinks= el; }}>
                <Navigation />
              </div>
              <div style={styles.socialLinks(this.props.seenAnimation)} ref={(el) => { this.socialLinks= el; }}>
                <ul style={styles.socialLinksList}>
                  <SocialLink
                    url="https://github.com/yayromina"
                    icon="github"
                    title="Github"
                  />
                  <SocialLink
                    url="https://www.linkedin.com/in/rominabarrett/"
                    icon="linkedin-square"
                    title="LinkedIn"
                  />
                  <SocialLink
                    url="https://twitter.com/yayromina"
                    icon="twitter"
                    title="Twitter"
                  />
                  <SocialLink
                    url="https://open.spotify.com/user/yayromina"
                    icon="spotify"
                    title="Spotify"
                  />
                </ul>
              </div>
            </div>
          </div>
        </EasyTransition>
      </div>
    );
  }
}
