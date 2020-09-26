import React from 'react';
import Tasklist from './TaskComponent';
import AddTask from './AddTaskComponent';



class Task extends React.Component{

    constructor(props){
        super();
        this.addNewTask = this.addNewTask.bind(this);
    }

    // method to add new task
    addNewTask(task){
       
       task.userId=this.props.appState.userid;
       this.props.taskList(task);
      }
  
    render(){
        let id=this.props.appState.userid;
       let deletetask=this.props.deletetask
        return(
            <div className="Task">
               <AddTask addtask={this.addNewTask}/>
                {this.props.appState.Tasklist.map(function(val,index){
                     
                    if(id==val.userId){
                        
                        return <Tasklist key={index} task={val} deleteTask={deletetask} index={index+1}/>
                    }
                   
                    else
                    return null;
                })}
            </div>
        )
    }
}

export default Task;