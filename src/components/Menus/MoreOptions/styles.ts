const wrapper = {
  elevation: 0,
  sx: {
    width: 200,
    overflow: 'visible',
    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
    mb: 1.5,
    '& .MuiAvatar-root': {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      bottom: 0,
      left: 18,
      width: 10,
      height: 10,
      bgcolor: 'background.paper',
      transform: 'translateY(50%) rotate(45deg)',
      zIndex: 0,
    },
    borderRadius: 2,
  },
}

const moreOptionsMenu = {
  wrapper
}

export default moreOptionsMenu
