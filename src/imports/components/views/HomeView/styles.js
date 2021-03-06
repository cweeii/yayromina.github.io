export default {
  base: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    height: '100vh',
    justifyContent: 'center',
    width: '100%',
  },
  headlines: {
    // display: 'none',
    lineHeight: '2.6rem',
    marginTop: '-100px',
    position: 'relative',
    textAlign: 'center',
    top: '20px',
    width: '100%',
  },
  logoWrapper: {
    paddingTop: '100px',
    width: '100%',
  },
  circle: seen => ({
    background: '#e93c4f',
    borderRadius: '50%',
    display: 'block',
    height: 100,
    margin: 'auto',
    opacity: seen ? '0' : '1',
    position: 'absolute',
    top: 0,
    width: 100,
  }),
  flower: seen => ({
    transform: seen ? 'scale(1.2,)' : 'scale(0.6)',
  }),
  tagline: seen => ({
    marginTop: '-100px',
    opacity: seen ? '1' : '0',
    transform: seen ? 'translateY(30px)' : 'none',
  }),
  span: seen => ({
    display: 'inline-block',
    opacity: seen ? '1' : '0',
    transform: seen ? 'translateY(-85px)' : 'scaleY(0)',
  }),
  logo: {
    display: 'block',
    fill: '#e93c4f',
    height: 100,
    margin: '-150px auto auto',
    opacity: 1,
    position: 'relative',
    top: '-170px',
    width: 100,
  },
  headline: {
    fontSize: '2.5rem',
  },
  socialLinks: seen => ({
    opacity: seen ? '1' : '0',
    position: 'relative',
    transform: seen ? 'translateY(80px)' : 'none',
    zIndex: '9',
    '@media screen and (max-width: 420px)': {
      marginTop: -20,
    },
  }),
  navLinks: seen => ({
    marginTop: '2rem',
    opacity: seen ? '1' : 0,
    transform: seen ? 'translateY(40px)' : 'none',
    width: 'calc(100% - 15px)',
  }),
  socialLinksList: {
    listStyleType: 'none',
    textAlign: 'center',
  },
  homeContainer: {
    alignItems: 'center',
    color: '#341931',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    paddingTop: 100,
    position: 'relative',
    transition: 'all 0.5s',
    width: '100%',
  },
};
