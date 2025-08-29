import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      
      <Button  style={{
        margin: '1rem 0',
        color: 'black',
        backgroundColor :"#691d56",
        marginLeft:200
    }}
    variant="contained">Convert</Button>
    </Stack>
  );
}