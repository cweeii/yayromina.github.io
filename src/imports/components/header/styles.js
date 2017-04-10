export default {
  base: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px auto 0',
    maxWidth: 1600,
    paddingLeft: '1rem',
    paddingRight: '1rem',
    width: '100%',
  },
  header: home => ({
    left: 0,
    padding: '0.5rem 0',
    position: 'absolute',
    top: home ? -200 : 0,
    transition: 'top 0.5s cubic-bezier(0.5, -0.5, 0.25, 1.5), background 0.3s',
    width: '100%',
    zIndex: '99999',
  }),
  logoContainer: {
    alignItems: 'center',
    fill: '#e93c4f',
    display: 'flex',
    flexDirection: 'row',
    fontSize: '1.6rem',
    width: '30%',
    ':hover': {
      color: '#ce1c5f',
      fill: '#ce1c5f',
    },
  },
  logo: {
    display: 'inline-block',
    outline: '0',
    height: 60,
    width: 60,
  },
  name: {
    position: 'relative',
    top: -20,
    ':hover': {
      color: '#ce1c5f',
    },
    '@media screen and (max-width: 64rem)': {
      display: 'none',
    },
  },
  navigation: {
    width: '40%',
  },
};
