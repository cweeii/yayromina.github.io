export default {
  base: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '8rem 4rem 4rem',
    width: '100%',
    '@media screen and (max-width: 64em)': {
      marginBottom: '2rem',
      padding: '6rem 1rem 1rem',
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
    lineHeight: '1.8rem',
    marginBottom: '2rem',
    textAlign: 'center',
    '@media screen and (max-width: 64em)': {
      marginBottom: '1rem',
    },
  },
  footerType: {
    fontSize: '1.2rem',
    lineHeight: '1.8rem',
    marginTop: '1rem',
    textAlign: 'center',
  },
};
