import React, { PropTypes } from 'react';

import EasyTransition from 'react-easy-transition';
import SocialLink from '../../general/socialLinks';
import radium from 'radium';
import styles from './styles';

@radium
export default class ContactView extends React.Component {

  static propTypes = {
    isHome: PropTypes.func,
  }

  componentWillMount() {
    this.props.isHome(false);
  }

  state = {
    hover: false,
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
            <h1 style={styles.headline}>Thanks for your interest!</h1>
            <h2 style={styles.tagline}>I'm excited to hear about what you have cookin and how I may help. Send me a message and I'll get back to you soon!</h2>
            <form method="POST" action="https://formspree.io/hi@romina.io">
              <input style={styles.input} key="name" type="text" name="name" placeholder="Name" required ref={(input) => { this.nameInput = input; }} />
              <input style={styles.input} key="email" type="email" name="email" placeholder="Email Address" required />
              <textarea style={styles.input} key="message" name="message" rows="4" placeholder="Message" />
              <button
                style={styles.submit(this.state.hover)}
                type="submit"
                onMouseEnter={() =>
                  this.setState({
                    hover: true,
                  })
                }
                onMouseLeave={() =>
                  this.setState({
                    hover: false,
                  })
                }
              >Send</button>
            </form>
            <div
              style={styles.socialLinks(true)}
              ref={(el) => { this.socialLinks = el; }}
            >
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
        </EasyTransition>
      </div>
    );
  }
}
