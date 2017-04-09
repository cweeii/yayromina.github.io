export default {
  base: hover => ({
    background: '#FFF',
    border: hover ? '1px solid rgba(157, 32, 83,0.7)' : 'none',
    boxShadow: hover ? 'inset 0 0 10px rgb(157, 32, 83, .2), 0 0 10px rgba(157, 32, 83, .1)' : 'inset 0 0 20px rgba(157, 32, 83, 0)',
    cursor: 'pointer',
    display: 'block',
    fontSize: hover ? '1.22rem' : '1.2rem',
    height: 45,
    lineHeight: hover ? '44px' : '45px',
    outline: '0',
    outlineColor: hover ? 'rgba(157, 32, 83, 0)' : 'rgba(0, 0, 0, .2)',
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
  }),
  buttonWrapper: isHeader => ({
    margin: '0 auto 10px',
    display: 'flex',
    alignItems: 'center',
    width: '30%',
    '@media screen and (max-width: 64em)': {
      width: '100%',
      display: isHeader ? 'none' : 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    },
  }),
};
