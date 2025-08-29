import React from "react";
import { Container } from "@mui/material";
import ComboBox from "./ComboBox";
import FullWidthTextField from "./FullWidthTextField";
import BasicButtons from "./BasicButtons";
import Footer from "./Footer";
import GlobalStyles from "@mui/material/GlobalStyles";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  alignItemsAndJustifyContent: {
    marginTop: 150,
    textAlign: "center",
  },
}));

function Translate() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.alignItemsAndJustifyContent}>
      {/* <GlobalStyles styles={{Box: {justifyContent: 'center'} }} /> */}
      <h1> Language Translator</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
        repellendus vitae accusantium at aperiam, recusan.
      </p>
      <div>
        <ComboBox />
      </div>
      <div>
        <FullWidthTextField />
      </div>

      <BasicButtons />
      <Footer />
    </Container>
  );
}

export default Translate;
