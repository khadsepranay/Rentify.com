import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
  },
});

export default function Types() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="overline" display="block" gutterBottom>
        Made by <a href="https://nikhilsahu.me/"> Nikhil Sahu</a>
      </Typography>
    </div>
  );
}
