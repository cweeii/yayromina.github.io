export default{
  socialLink: {
    color: '#571B3C',
    display: 'inline-block',
    fontSize: '1.6rem',
    margin: '0 10px',
    listStyleType: 'none',
    opacity: '1',
    ':hover': {
      opacity: '0.8',
    },
  },
  socialIcon: hover => ({
    color: hover ? '#341931' : '#59D2053',
    display: 'block',
    transition: 'all 0.2s',
  }),
};
