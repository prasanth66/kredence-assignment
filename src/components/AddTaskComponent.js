import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {TextField,Button,ButtonGroup} from '@material-ui/core';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure();

// styles for popup model
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

// function which helps to create new task object
const handleNewTask=(props,title,completed)=>{
  let newTitle=document.getElementById(title).value.trim()
  let newCompleted=document.getElementById(completed).value.trim();
  if(newTitle.length===0 || newCompleted.length===0)
  toast.error("All fields are mandatory",{autoClose:3000})
  else{
    let temp={
      "title":newTitle,
      "completed":newCompleted,
      
    }
    props.addtask(temp)
    toast.success("Task Added Successfully...!",{autoClose:3000})
  }
}

export default function TransitionsModal(props) {
  
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  // handle model open
  const handleOpen = () => {
    setOpen(true);
  };

  // handle model close
  const handleClose = () => {
    setOpen(false);
  };

  
  return (
    <div>

      <Button id="addtask"  variant="outlined"  color="primary" onClick={handleOpen}>Add Task</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 className="center">Add New Task</h2>
          <div className="inputfields"><TextField  label="Title" variant="outlined" id="taskTitle"/></div>
            <div className="inputfields"><TextField  label="Completed" variant="outlined" id="TaskCompleted" /></div>
            <ButtonGroup size="large" >
                 <Button variant="text"  color="primary" onClick={()=>handleNewTask(props,"taskTitle","TaskCompleted")}>ADD</Button>
                 <Button variant="text"  color="secondary" onClick={handleClose}>CANCEL</Button>
                </ButtonGroup>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
