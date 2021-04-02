import {
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Modal
} from '@material-ui/core';
import React, { useState } from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import { db } from './firebase';
import classes from './Todo.css';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

function Todo(props) {
  const cssClasses = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');

  const handleClose = () => {
    setOpen(false);
  };

  const updateTodo = () => {
    db.collection('todos').doc(props.text.id).set(
      {
        todo: input
      },
      { merge: true }
    );
    setOpen(false);
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <div className={cssClasses.paper}>
          <h1>I am a modal</h1>
          <input
            value={input}
            placeholder={props.text.todo}
            onChange={(event) => setInput(event.target.value)}
          />
          <button onClick={updateTodo}>Update Todo</button>
        </div>
      </Modal>

      <List className={classes.Todo}>
        <ListItem>
          {/* <ListItemAvatar></ListItemAvatar> */}
          <ListItemText
            primary={props.text.todo}
            secondary='Dummy Deadline 🛑'
          />
        </ListItem>
        <button onClick={(e) => setOpen(true)}>Edit</button>
        <DeleteForeverIcon
          key={props.text.id}
          onClick={(event) =>
            db.collection('todos').doc(props.text.id).delete()
          }
        />
      </List>
    </div>
  );
}

export default Todo;
