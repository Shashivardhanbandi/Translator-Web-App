import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";

export default function Types() {
  return (
    <Box sx={{ width: "100%", maxWidth: 500 }}>
      <Typography variant="h6" gutterBottom>
        nimrah.sohail20@gmail.com
      </Typography>

      <IconButton
        aria-label="Linkedin.com"
        onClick={() =>
          window.open("https://www.linkedin.com/in/nimrah-sohail12/")
        }
      >
        <LinkedInIcon fontSize="large" />
      </IconButton>

      <IconButton
        aria-label="github.com"
        onClick={() =>
          window.open("https://github.com/nimrahSohail/Translator-app")
        }
      >
        <GitHubIcon fontSize="large" />
      </IconButton>
    </Box>
  );
}
