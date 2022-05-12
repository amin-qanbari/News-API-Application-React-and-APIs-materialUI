import React from "react";

//material-ui
import { CircularProgress, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    backdropFilter: "blur(3px)"
  },

  spinner: {
    position: "absolute",
    top: "40%",
    left:"50%",
  },
}));

const Loader = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <CircularProgress className={classes.spinner} disableShrink />
    </Container>
  );
};

export default Loader;
