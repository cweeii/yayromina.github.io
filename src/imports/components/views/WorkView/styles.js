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
    lineHeight: '1.8rem',
    marginBottom: '2rem',
    textAlign: 'center',
    '@media screen and (max-width: 64em)': {
      marginBottom: '1rem',
    },
  },
  projectTitle: {
    display: 'flex',
    fontSize: '1.4rem',
    width: '100%',
    '@media screen and (max-width: 64em)': {
      textAlign: 'center',
    },
  },
  projectWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '5vh',
    padding: '2rem',
    flexDirection: 'row',
    width: '100%',
    '@media screen and (max-width: 64em)': {
      flexDirection: 'column',
      marginBottom: '0',
      padding: 0,
    },
  },
  projectLogo: {
    maxWidth: '65%',
    display: 'block',
    margin: '0 auto 1.6rem',
    '@media screen and (max-width: 64em)': {
      width: '100%',
      maxWidth: 200,
    },
  },
  projectImage: {
    borderRadius: '3px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.15)',
    height: 'auto',
    maxWidth: '100%',
    transition: 'all 0.2s',
    ':hover': {
      boxShadow: '0 14px 24px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.15)',
    },
  },
  projectImageWrapper: order => ({
    padding: '2rem',
    order: order === 'odd' ? '1' : '2',
    width: '66%',
    '@media screen and (max-width: 64em)': {
      order: '2',
      width: '100%',
    },
  }),
  projectDescriptionWrapper: order => ({
    fontSize: '1.4rem',
    lineHeight: '2rem',
    textAlign: 'center',
    padding: '0.8rem',
    order: order === 'odd' ? '2' : '1',
    width: '33%',
    '@media screen and (max-width: 64em)': {
      marginTop: '2rem',
      order: '1',
      width: '100%',
    },
  }),
  footerType: {
    fontSize: '1.2rem',
    marginTop: '1rem',
    textAlign: 'center',
  },
};
