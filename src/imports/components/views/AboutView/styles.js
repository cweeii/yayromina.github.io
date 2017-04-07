export default {
  base: {
    alignItems: 'center',
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    padding: '4rem',
    flexDirection: 'column',
    justifyContent: 'center',
    '@media screen and (max-width: 64em)': {
      padding: '1rem',
      marginBottom: '2rem',
    },
  },
  type: {
    marginBottom: '2rem',
    fontSize: '1.4rem',
    padding: '1rem',
    lineHeight: '2rem',
    maxWidth: '60rem',
    textAlign: 'center',
    width: '100%',
    '@media screen and (max-width: 64em)': {
      maxWidth: '90%',
    },
  },
  innerType: {
    fontSize: '1.4rem',
    maxWidth: '60rem',
    padding: '1rem',
    lineHeight: '2rem',
    textAlign: 'center',
    width: '50%',
    '@media screen and (max-width: 64em)': {
      fontSize: '1.2rem',
      padding: 0,
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
  headline: {
    fontSize: '1.8rem',
    lineHeight: '2.2rem',
    textAlign: 'center',
    maxWidth: '46rem',
    width: '50%',
    '@media screen and (max-width: 64em)': {
      fontSize: '1.4rem',
      lineHeight: '1.8rem',
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
    '@media screen and (max-width: 64em)': {
      marginBottom: '1rem',
      padding: 0,
    },
  },
};
