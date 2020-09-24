import React from 'react';
import {Button} from '@material-ui/core';
class TaskComponent extends React.Component{
    render(){
        return(
            <div className="TaskComponent">
              {this.props.task.title}
              <Button variant="contained" color="secondary">Delete</Button>
            </div>
        )
    }
}

export default TaskComponent;