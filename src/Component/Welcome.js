import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Content from "./Content";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16)
    }
  },
  paper: {
    margin: "auto",
    padding: 30
  }
}));

export default function Welcome() {
  const classes = useStyles();

  return (
    <div className={classes.paper}>
      <img src="https://helpdeskgeek.com/wp-content/pictures/2020/01/google-sheets.png" />
    </div>
  );
}
