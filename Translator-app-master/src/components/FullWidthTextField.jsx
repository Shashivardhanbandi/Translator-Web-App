import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FullWidthTextField() {
  return (
    <Box
      sx={{
        marginTop : 2,
        width: 600,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="Enter Your Text" id="fullWidth"
       />
    </Box>
  );
}