import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center"
    },
    demo: {
      backgroundColor: theme.palette.background.paper
    },
    title: {
      margin: theme.spacing(4, 0, 2)
    }
  })
);

const ToDoList = props => {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);

  return (
    <div className={classes.root}>
      <Grid item xs={12} md={6}>
        <div className={classes.demo}>
          <List dense={dense}>{generateList(props.todos, props.onDelete)}</List>
        </div>
      </Grid>
    </div>
  );
};

function generateList(todos: any[], toDelete: (id: string) => void) {
  return todos.map(todo => (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <FolderIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={`${todo.text}`} secondary={`id: ${todo.id}`} />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => toDelete(todo.id)}
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  ));
}

export default ToDoList;