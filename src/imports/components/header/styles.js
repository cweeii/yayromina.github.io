export default {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: 1600,
    width: '100%',
    margin: 'auto',
  },
  header: (home, scroll) => ({
    background: scroll ? 'rgba(157,32,83,0.8)' : 'transparent',
    padding: '0.5rem 0',
    position: 'fixed',
    left: 0,
    zIndex: '99999',
    top: home ? -200 : 0,
    width: '100%',
    transition: 'top 0.5s cubic-bezier(0.5, -0.5, 0.25, 1.5), background 0.3s',
  }),
  logoContainer: {
    display: 'flex',
    fill: '#7A1E48',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '20%',
    fontSize: '1.6rem',
    ':hover': {
      fill: '#571B3C',
    },
  },
  logo: {
    display: 'inline-block',
    width: 60,
    height: 60,
  },
  name: {
    position: 'relative',
    top: -20,
  },
  navigation: {
    width: '40%',
  },
};
