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
    padding: 30,
    height: "40vh",
    width: "55vw"
  },
  content: {}
}));

export default function SimplePaper(props) {
  const classes = useStyles();
  const { flag } = props;

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        <Content className={classes.content} flag={flag} />
      </Paper>
    </div>
  );
}
