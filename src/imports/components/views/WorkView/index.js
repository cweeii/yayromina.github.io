import EasyTransition from 'react-easy-transition';
import Project from './Project';
import React from 'react';
import { hashHistory } from 'react-router';
import portfolio from '../../data/portfolio';
import radium from 'radium';
import styles from './styles';

@radium
export default class WorkView extends React.Component {

  state = {
    emotaHover: false,
    reachHover: false,
    campHover: false,
    hover: false,
  }

  render() {
    return (
      <div>
        <EasyTransition
          path={location.pathname} //eslint-disable-line
          initialStyle={{opacity: 0}}
          transition="all 0.3s ease-in"
          finalStyle={{opacity: 1}}
        >
          <div style={styles.base}>
            <h1 style={styles.headline}>Here are a few of my favorite past projects! I was the sole developer for these websites, client and server-side.</h1>
            <h2 style={styles.tagline}>I currently specialize in React and Wordpress projects.</h2>
            <div>
              {/* {Object.keys(portfolio).map((project, index) => (
                <Project
                  title={project.title}
                  description={project.description}
                  index={index}
                  url={project.url}
                  key={`project-${index}`}
                />
              ))} */}

              <div style={styles.projectBase}>
                <div style={styles.projectWrapper}>
                  <div style={styles.projectImageWrapper('odd')}>
                    <a
                      href="http://campforall.org/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img
                        style={styles.projectImage}
                        src="../../../../../static/images/portfolio/campforall.png"
                        alt="Romina Barrett and Camp For All"
                        key="Camp For All Image"
                      />
                    </a>
                  </div>
                  <div style={styles.projectDescriptionWrapper('odd')}>
                    <a
                      href="http://campforall.org/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img
                        style={styles.projectLogo}
                        src="../../../../../static/images/portfolio/campforall-logo.png"
                        alt="Camp For All Logo"
                      />
                    </a>
                    <p>Camp For All is a unique, barrier free camp working to enrich the lives of children and adults with challenging illnesses or special needs. Their site allows potential campers and parents to effortlessly find camps and enables volunteers to apply and join the organization. The Camp For All team may update and add new camps and promotional pages with an easy-to-use and robust backend.</p>
                    <a
                      href="http://campforall.org/"
                      target="_blank"
                      rel="noreferrer noopener"
                      style={styles.button(this.state.campHover)}
                      onMouseEnter={() =>
                        this.setState({
                          campHover: true,
                        })
                      }
                      onMouseLeave={() =>
                        this.setState({
                          campHover: false,
                        })
                      }
                    >
                      Visit Camp For All
                    </a>
                  </div>
                </div>
              </div>
              <div style={styles.projectBase}>
                <div style={styles.projectWrapper}>
                  <div style={styles.projectImageWrapper('even')}>
                    <a
                      href="http://emota.com"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img
                        style={styles.projectImage}
                        src="../../../../../static/images/portfolio/emota.png"
                        alt="Romina Barrett and Emota"
                        key="Emota Image"
                      />
                    </a>
                  </div>
                  <div style={styles.projectDescriptionWrapper('even')}>
                    <a
                      href="http://emota.com"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img
                        style={styles.projectLogo}
                        src="../../../../../static/images/portfolio/emota-logo.png"
                        alt="Emota Logo"
                      />
                    </a>
                    <p>Emota is an Emmy Award winning video agency dedicated to helping brands imagine and create award-winning video content that transforms customers into fans. I built three custom video players that are in use throughout the site, which is powered by Angular on top of a Wordpress API.</p>
                    <a
                      href="http://emota.com"
                      target="_blank"
                      rel="noreferrer noopener"
                      style={styles.button(this.state.emotaHover)}
                      onMouseEnter={() =>
                        this.setState({
                          emotaHover: true,
                        })
                      }
                      onMouseLeave={() =>
                        this.setState({
                          emotaHover: false,
                        })
                      }
                    >
                      Visit Emota
                    </a>
                  </div>
                </div>
              </div>
              <div style={styles.projectBase}>
                <div style={styles.projectWrapper}>
                  <div style={styles.projectImageWrapper('odd')}>
                    <a
                      href="http://invisionstudio.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img
                        style={styles.projectImage}
                        src="../../../../../static/images/portfolio/invision.png"
                        alt="Romina Barrett and Invision Studio"
                        key="Invision Image"
                      />
                    </a>
                  </div>
                  <div style={styles.projectDescriptionWrapper('odd')}>
                    <a
                      href="http://invisionstudio.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img
                        style={styles.projectLogo}
                        src="../../../../../static/images/portfolio/invision-logo.png"
                        alt="Invision Logo"
                      />
                    </a>
                    <p>Invision Studio is a property photography company specializing in 360° Photography, Architectural Photography, and Aerial Photography Services. Their site highlights their virtual tours, features VR and 360° video players, and a custom quote builder to help them reach potential clients.</p>
                    <a
                      href="http://invisionstudio.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                      style={styles.button(this.state.hover)}
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
                    >
                      Visit Invision Studio
                    </a>
                  </div>
                </div>
              </div>
              <div style={styles.projectBase}>
                <div style={styles.projectWrapper}>
                  <div style={styles.projectImageWrapper('even')}>
                    <a
                      href="http://reachify.io"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img
                        style={styles.projectImage}
                        src="../../../../../static/images/portfolio/reachify.png"
                        alt="Romina Barrett and Reachify"
                        key="Reachify Image"
                      />
                    </a>
                  </div>
                  <div style={styles.projectDescriptionWrapper('even')}>
                    <a
                      href="http://reachify.io"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img
                        style={styles.projectLogo}
                        src="../../../../../static/images/portfolio/reachify-logo.png"
                        alt="Reachify Logo"
                      />
                    </a>
                    <p>Reachify is an omnichannel business communication tool to help businesses connect with customers and collaborate with their team. I built their website with a robust backend, enabling them to update their content and media easily, as well as a custom-built CRM in the backend.</p>
                    <a
                      href="http://reachify.io"
                      target="_blank"
                      rel="noreferrer noopener"
                      style={styles.button(this.state.reachHover)}
                      onMouseEnter={() =>
                        this.setState({
                          reachHover: true,
                        })
                      }
                      onMouseLeave={() =>
                        this.setState({
                          reachHover: false,
                        })
                      }
                    >
                      Visit Reachify
                    </a>
                  </div>
                </div>
              </div>
              <p style={styles.footerType}>These are just a few of the sites that I've worked on. Want to see more?
                <a
                  onClick={() => { hashHistory.push('/contact')}}
                  >
                  Let's talk!
                </a>
            </p>
            </div>
          </div>
        </EasyTransition>
      </div>
    );
  }
}
