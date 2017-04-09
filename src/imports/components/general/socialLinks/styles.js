export default{
  socialLink: {
    color: '#571B3C',
    display: 'inline-block',
    fontSize: '1.6rem',
    listStyleType: 'none',
    margin: '0 10px',
    opacity: '1',
    ':hover': {
      opacity: '0.8',
    },
  },
  socialIcon: hover => ({
    color: hover ? '#571B3C' : '#9D2053',
    cursor: 'pointer',
    display: 'block',
    transition: 'all 0.2s',
  }),
};
