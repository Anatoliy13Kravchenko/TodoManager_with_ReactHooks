import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import useToDoInput from "./useToDoInput";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1)
      }
    },
    button: {
      margin: theme.spacing(1)
    }
  })
);

export default function ToDoForm(props: any) {
  const classes = useStyles();
  const { value, onChange, onReset } = useToDoInput("");

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={event => {
        event.preventDefault();
        props.onSave(value);
        onReset();
      }}
    >
      <div>
        <TextField
          id="standard-basic"
          value={value}
          onChange={e => onChange(e.target.value)}
          label="Set new one"
        />
      </div>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<SaveIcon />}
      />
    </form>
  );
}
