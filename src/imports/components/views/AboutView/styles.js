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
  type: {
    fontSize: '1.4rem',
    lineHeight: '2rem',
    marginBottom: '2rem',
    maxWidth: '50rem',
    padding: '1rem',
    textAlign: 'center',
    width: '100%',
    '@media screen and (max-width: 64em)': {
      maxWidth: '90%',
      padding: 0,
      width: '100%',
    },
  },
  innerType: {
    fontSize: '1.4rem',
    lineHeight: '2rem',
    padding: '1rem',
    textAlign: 'center',
    width: '50rem',
    '@media screen and (max-width: 64em)': {
      maxWidth: '90%',
      padding: 0,
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
    lineHeight: '2.3rem',
    textAlign: 'center',
    width: '46rem',
    '@media screen and (max-width: 64em)': {
      fontSize: '1.6rem',
      lineHeight: '1.8rem',
      maxWidth: '90%',
      width: '90%',
    },
  },
  halfTextWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    marginTop: '2rem',
    width: '100%',
    '@media screen and (max-width: 64em)': {
      marginBottom: '1rem',
      padding: 0,
    },
  },
};
