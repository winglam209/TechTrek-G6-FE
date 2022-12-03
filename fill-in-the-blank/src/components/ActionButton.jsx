import React from 'react';
import Button from '@mui/material/Button';

const ActionButton = (props) => {
  const { colour, text, onClick } = props;
  return (
    <Button
      variant="contained"
      color={colour || 'primary'}
      onClick={onClick}
    >
      { text }
    </Button>
  )
}

export default ActionButton;