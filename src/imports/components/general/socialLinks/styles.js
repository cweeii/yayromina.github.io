export default{
  socialLink: {
    color: '#e93c4f',
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
    color: hover ? '#ce1c5f' : '#e93c4f',
    cursor: 'pointer',
    display: 'block',
    transition: 'all 0.2s',
  }),
};
