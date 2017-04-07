export default {
  base: {
    alignItems: 'center',
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    padding: '2rem',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  type: {
    marginBottom: '2rem',
    fontSize: '1.4rem',
    padding: '1rem',
    lineHeight: '2rem',
    maxWidth: '44rem',
    textAlign: 'center',
    width: '100%',
    '@media screen and (max-width: 64em)': {
      maxWidth: '90%',
    },
  },
  innerType: {
    fontSize: '1.4rem',
    maxWidth: '44rem',
    padding: '1rem',
    lineHeight: '2rem',
    textAlign: 'center',
    width: '50%',
    '@media screen and (max-width: 64em)': {
      maxWidth: '90%',
      width: '100%',
    },
  },
  footerType: {
    fontSize: '1.2rem',
    marginTop: '1rem',
    textAlign: 'center',
  },
  image: {
    marginBottom: '2rem',
    maxWidth: '20rem',
    '@media screen and (max-width: 64em)': {
      maxWidth: '15rem',
    },
  },
  tagline: {
    fontSize: '1.8rem',
    textAlign: 'center',
    maxWidth: '46rem',
    width: '50%',
    '@media screen and (max-width: 64em)': {
      maxWidth: '90%',
      width: '90%',
    },
  },
  halfTextWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2rem',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
};
