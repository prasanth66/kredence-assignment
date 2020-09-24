import React from 'react';
import Tasklist from './TaskComponent';
import {Button} from '@material-ui/core';

class Task extends React.Component{

    constructor(props){
        super();
        this.state={
            Tasklist:[]
        }
    }

    callTaskAPI(){
        fetch("http://jsonplaceholder.typicode.com/todos")
        .then(res =>res.json())
        .then((res)=>{
            this.setState({
                Tasklist:res
            })
        })
        .catch((error)=>{
            console.log("error in fetching task details",error)
        })
    }

    componentWillMount(){      
        this.callTaskAPI();     
    }
    render(){
        
        return(
            <div className="Task">
                <Button variant="contained" color="primary">Add Task</Button>
                
                {this.state.Tasklist.map(function(val,index){
                    
                    return <Tasklist key={index} task={val}/>
                })}
            </div>
        )
    }
}

export default Task;