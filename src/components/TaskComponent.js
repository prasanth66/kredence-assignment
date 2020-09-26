import React from 'react';
import {Button,Divider,List,ListItem,ListItemText} from '@material-ui/core';
class TaskComponent extends React.Component{

   
    render(){
// method to delete the particular task
        const  deleteTask=()=>{
         
           this.props.deleteTask(this.props.task.id)
           }
           console.log(this.props.task.completed+"")
        return(
            <div className="TaskComponent">
              
              <List>
              <ListItem>
              
              <ListItemText primary={this.props.index}  />
              <ListItemText primary={this.props.task.title}  />
              
              <Button variant="contained" color="secondary" onClick={deleteTask}>Delete</Button>
              
              </ListItem>
              <Divider variant="inset" component="li" />
              </List>
              
              
            </div>
        )
    }
}

export default TaskComponent;