export default {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: 1600,
    width: '100%',
    margin: '10px auto 0',
  },
  header: (home, scroll) => ({
    // background: scroll ? 'rgba(157,32,83,0.9)' : 'transparent',
    padding: '0.5rem 0',
    position: 'absolute',
    left: 0,
    zIndex: '99999',
    top: home ? -200 : 0,
    width: '100%',
    transition: 'top 0.5s cubic-bezier(0.5, -0.5, 0.25, 1.5), background 0.3s',
  }),
  logoContainer: scroll => ({
    display: 'flex',
    color: scroll ? '#FFF' : '#7A1E48',
    fill: scroll ? '#FFF' : '#7A1E48',
    stroke: scroll ? '#7A1E48' : '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '30%',
    fontSize: '1.6rem',
    ':hover': {
      color: '#571B3C',
      fill: '#571B3C',
    },
  }),
  logo: {
    display: 'inline-block',
    width: 60,
    height: 60,
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
