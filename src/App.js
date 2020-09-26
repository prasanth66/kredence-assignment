import React from 'react';
import Navbar from './Components/NavbarComponent';
import Home from './Components/HomeTab';
import Task from './Components/TaskTab';
import SignIn from './Components/signInComponent';
import SignUp from './Components/signUpComponent';
import User from './Components/UserComponent';
import './App.css';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure();



class App extends React.Component {

  constructor(props) {
    super()

    // Bind the this context to the handler function
    this.tabHandler = this.tabHandler.bind(this);
    this.signinPageHandler = this.signinPageHandler.bind(this);
    this.isLoggedInHandler = this.isLoggedInHandler.bind(this);
    this.isLoggedOutHandler = this.isLoggedOutHandler.bind(this);
    this.TaskListHandler = this.TaskListHandler.bind(this);
    this.DeleteTaskHandler = this.DeleteTaskHandler.bind(this);
    
    
    // Set some state
    this.state = {
       tab:"home",
       isLoggedIn:false,
       signinPage:true,
       userid:"",
       password:"",
       Tasklist:[],
    };
}

// method to handle tabs
tabHandler(tab){
  this.setState({
    tab
  })
}

// method to handle login page
signinPageHandler(signinPage){
  this.setState({
    signinPage
  })
}
//method to check is user logged in or not
isLoggedInHandler(userid,password){
  this.setState({
    isLoggedIn:true,
    userid,
    password
  })
}

// method to add created new task to the state
TaskListHandler(task){
  let Task=this.state.Tasklist;
  task.id=Task.length+1;
  Task.unshift(task)
  this.setState({
    Tasklist:Task
  })
  console.log(this.state.Tasklist.length);
}
// deleteing the task in state by id
DeleteTaskHandler(id){
  const result = this.state.Tasklist.filter(task => task.id !=id);
  this.setState({
    Tasklist:result
  })
  toast.success("Task Deleted Successfully...!",{autoClose:3000})
}
// method to handle logout
isLoggedOutHandler(){
  this.setState({
    isLoggedIn:false,
    
    
  })
}

// the function which call another api for fetching task details
callTaskAPI(){
  fetch("http://jsonplaceholder.typicode.com/todos")
  .then(res =>res.json())
  .then((res)=>{
      this.setState({
          Tasklist:res,
      })
  })
  .catch((error)=>{
      console.log("error in fetching task details",error)
  })
}

componentDidMount(){    
      this.callTaskAPI();    
}

 
  render(){
  let display;
  // storing display value whether to show signin or signup page
    if(this.state.isLoggedIn===false){
      if(this.state.signinPage===true)
      display=<SignIn signinPage={this.signinPageHandler} isLoggedIn={this.isLoggedInHandler}/>;
      else
      display=<SignUp signinPage={this.signinPageHandler}/>;
    }
    else{
      display=<div>
         <Navbar tab = {this.tabHandler}/>
         {/* used switch case rendering */}
      {(()=>{

       switch(this.state.tab){
       case "home":return <Home />
       case "tasks":return <Task 
       appState={this.state} 
       shouldrender={this.shouldRenderHandler}
       taskList={this.TaskListHandler}
       deletetask={this.DeleteTaskHandler}
  
       />
       case "user":return <User userid={this.state.userid} password={this.state.password} signinPage={this.isLoggedOutHandler}/>
       default:return <Home />
}


})()}
      </div>
    }
    
    return(
       
          <div className="App">
     
     {display}
    </div>
      
    )
  }
}




export default App;
