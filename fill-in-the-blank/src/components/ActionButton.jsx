import React from 'react';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/components/Theme';
import "../styles/components/ActionButton.css"

const ActionButton = (props) => {
  const { colour, text, onClick } = props;
  return (
    <ThemeProvider theme={theme}>
      <Button
        variant="contained"
        color={colour || 'primary'}
        onClick={onClick}
        sx={{marginLeft: "10px", marginRight: "10px"}}
        // className="button"
      >
        { text }
        </Button>
    </ThemeProvider>
  )
}

export default ActionButton;