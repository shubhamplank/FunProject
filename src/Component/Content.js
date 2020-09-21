import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";


const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch"
  }
}));

export default function Content(props) {
  const classes = useStyles();
  const { flag } = props;

  return (
    <div className={classes.root}>
      {!flag && (
        <div>
          <div>
            <TextField
              id="standard-full-width"
              label="Project"
              style={{ margin: 8 }}
              placeholder=""
              helperText=""
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
            />
          </div>
          <div>
            <TextField
              label="Week"
              id="outlined-margin-dense"
              defaultValue=""
              className={classes.textField}
              helperText=""
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Avalibility"
              id="outlined-margin-dense"
              defaultValue=""
              className={classes.textField}
              helperText=""
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Rate"
              id="outlined-margin-normal"
              defaultValue=""
              className={classes.textField}
              helperText=""
              margin="normal"
              variant="outlined"
            />
          </div>

          <TextField
            label="DM"
            id="margin-dense"
            defaultValue=""
            className={classes.textField}
            helperText=""
            margin="normal"
          />
          <TextField
            label="TA"
            id="margin-dense"
            defaultValue=""
            className={classes.textField}
            helperText=""
            margin="normal"
          />
          <TextField
            label="TL"
            id="margin-dense"
            defaultValue=""
            className={classes.textField}
            helperText=""
            margin="normal"
          />
        </div>
      )}
      {flag && (
        <div>
          <div>
            <TextField
              id="standard-full-width"
              label="Team"
              style={{ margin: 8 }}
              placeholder=""
              helperText=""
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
            />
          </div>

          <TextField
            label="Developer"
            id="margin-dense"
            defaultValue=""
            className={classes.textField}
            helperText=""
            margin="normal"
          />
          <TextField
            label="Analyst"
            id="margin-dense"
            defaultValue=""
            className={classes.textField}
            helperText=""
            margin="normal"
          />
          <TextField
            label="QA"
            id="margin-dense"
            defaultValue=""
            className={classes.textField}
            helperText=""
            margin="normal"
          />
        </div>
      )}
    </div>
  );
}
