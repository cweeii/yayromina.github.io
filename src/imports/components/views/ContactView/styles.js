export default {
  base: {
    alignItems: 'center',
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    padding: '6rem 4rem 4rem',
    flexDirection: 'column',
    justifyContent: 'center',
    '@media screen and (max-width: 64em)': {
      padding: '1rem',
      marginBottom: '2rem',
    },
  },
  headline: {
    fontSize: '1.8rem',
    lineHeight: '2.3rem',
    marginBottom: '1rem',
    textAlign: 'center',
    width: '46rem',
    '@media screen and (max-width: 46.5em)': {
      maxWidth: '90%',
    },
  },
  tagline: {
    fontSize: '1.4rem',
    lineHeight: '2rem',
    marginBottom: '2rem',
    textAlign: 'center',
    width: '100%',
    maxWidth: '40rem',
    '@media screen and (max-width: 64em)': {
      marginBottom: '1rem',
    },
  },
  socialLinks: seen => ({
    marginTop: '3rem',
    opacity: seen ? '1' : '0',
    transform: seen ? 'translateY(20px)' : 'none',
  }),
  navLinks: seen => ({
    opacity: seen ? '1' : 0,
    transform: seen ? 'translateY(20px)' : 'none',
  }),
  socialLinksList: {
    textAlign: 'center',
    listStyleType: 'none',
  },
  input: {
    border: 0,
    outline: 0,
    marginBottom: '0.65rem',
    borderRadius: 3,
    fontSize: '1.2rem',
    padding: '0.5rem 0.5rem 0.5rem 0.65rem',
    width: '100%',
    background: '#EFEFEF',
  },
};
