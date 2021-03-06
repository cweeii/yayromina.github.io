export default {
  projectTitle: {
    display: 'flex',
    fontSize: '1.4rem',
    width: '100%',
    '@media screen and (max-width: 64em)': {
      textAlign: 'center',
    },
  },
  projectWrapper: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: '5vh',
    padding: '2rem',
    width: '100%',
    '@media screen and (max-width: 64em)': {
      flexDirection: 'column',
      marginBottom: '0',
      padding: 0,
    },
  },
  button: hover => ({
    background: '#FFF',
    border: hover ? '1px solid rgba(353, 74, 91,0.7)' : 'none',
    boxShadow: hover
      ? 'inset 0 0 10px rgb(353, 74, 91, .2), 0 0 10px rgba(353, 74, 91, .1)'
      : 'inset 0 0 20px rgba(353, 74, 91, 0)',
    cursor: 'pointer',
    display: 'block',
    fontSize: '1.2rem',
    height: 45,
    lineHeight: hover ? '44px' : '45px',
    margin: '40px auto 0',
    maxWidth: '90%',
    outline: '0',
    outlineColor: hover ? 'rgba(353, 74, 91, 0)' : 'rgba(0, 0, 0, .2)',
    outlineOffset: hover ? 15 : 0,
    outlineStyle: 'solid',
    outlineWidth: 1,
    position: 'relative',
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'uppercase',
    transition: 'all 1000ms cubic-bezier(0.19, 1, 0.22, 1)',
    verticalAlign: 'middle',
    width: '100%',
    zIndex: 999,
    '@media screen and (maxWidth: 64em)': {
      margin: '40px auto',
    },
  }),
  projectLogo: (mobile, emota) => ({
    display: mobile ? 'none' : 'block',
    margin: '0 auto 1.6rem',
    maxWidth: emota ? '47%' : '65%',
    '@media screen and (max-width: 64em)': {
      width: '100%',
      display: mobile ? 'block' : 'none',
      maxWidth: emota ? 160 : 200,
    },
  }),
  projectImage: {
    borderRadius: '3px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.15)',
    height: 'auto',
    maxWidth: '100%',
    transition: 'all 0.2s',
    ':hover': {
      boxShadow:
        '0 14px 24px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.15)',
    },
  },
  projectImageWrapper: order => ({
    order: order ? '1' : '2',
    padding: '2rem',
    width: '66%',
    '@media screen and (max-width: 64em)': {
      order: '1',
      padding: '2rem 2rem 0',
      width: '100%',
    },
  }),
  projectDescriptionWrapper: order => ({
    fontSize: '1.4rem',
    lineHeight: '2rem',
    order: order ? '2' : '1',
    padding: '0.8rem',
    textAlign: 'center',
    width: '33%',
    '@media screen and (max-width: 64em)': {
      marginTop: '2rem',
      order: '2',
      width: '100%',
    },
  }),
};
