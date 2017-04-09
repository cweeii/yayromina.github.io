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
  header: (home, scroll) => ({
    // background: scroll ? 'rgba(157,32,83,0.9)' : 'transparent',
    left: 0,
    padding: '0.5rem 0',
    position: 'absolute',
    top: home ? -200 : 0,
    transition: 'top 0.5s cubic-bezier(0.5, -0.5, 0.25, 1.5), background 0.3s',
    width: '100%',
    zIndex: '99999',
  }),
  logoContainer: scroll => ({
    alignItems: 'center',
    color: scroll ? '#FFF' : '#7A1E48',
    display: 'flex',
    fill: scroll ? '#FFF' : '#7A1E48',
    flexDirection: 'row',
    fontSize: '1.6rem',
    stroke: scroll ? '#7A1E48' : '#FFF',
    width: '30%',
    ':hover': {
      color: '#571B3C',
      fill: '#571B3C',
    },
  }),
  logo: {
    display: 'inline-block',
    height: 60,
    width: 60,
  },
  name: scroll => ({
    // color: scroll ? '#FFF' : '#7A1E48',
    position: 'relative',
    top: -20,
    ':hover': {
      color: '#571B3C',
    },
    '@media screen and (max-width: 64rem)': {
      display: 'none',
    },
  }),
  navigation: {
    width: '40%',
  },
};
