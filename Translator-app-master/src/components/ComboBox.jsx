import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";

export default function ComboBox() {
  return (
    <Stack spacing={2} direction="row" >
      <Autocomplete 
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        sx={{ width: 300}}
        renderInput={(params) => <TextField {...params} label="From Language" />}
      />
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="To Language" />}
      />
    </Stack>
  );
}

const top100Films = [
  { label: "3 Idiots", year: 2009 },
  { label: "Monty Python and the Holy Grail", year: 1975 },
];
