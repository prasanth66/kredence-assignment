import React from 'react';
import {TextField,Button,Link} from '@material-ui/core';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LockOpenIcon from '@material-ui/icons/LockOpen';

toast.configure();

class signIn extends React.Component{

    constructor(props){
        super();
        this.state={
            userid:"",
            password:""
            
        }
    }
// method to handle authentication page
    handleSignUpPage=(toggle)=>{
       this.props.signinPage(toggle);
    }
    render(){

     
// method to validate entered credentials
        const handleSignInValidation=()=>{
            let userid=this.state.userid.trim();
           let password=this.state.password.trim();
        //    submitting without entering credentials
           if(userid.length===0 || password.length===0 ){
            toast.error("Fill All The Fields...!",{autoClose:3000})
           }
        //    case to check if userid doesntt exist
            else if(localStorage.getItem(userid)===null || localStorage.getItem(userid)!==password){
                toast.error("Invalid Credentials...!",{autoClose:3000})
            }
            // if user gives correct credentials
            else{
               
               this.props.isLoggedIn(userid,password);
                toast.success("Logged in Successfully...!",{autoClose:3000})
            }
           

        }
        // method to store userid details
        const useridChange=(event)=>{
            this.setState({
                userid:event.target.value
            })
        }
// method to change your password
        const passChange=(event)=>{
            this.setState({
                password:event.target.value
            })
        }
        return(
            <div className="signIn center">
                <h1>Login to Machine Test</h1>
                <LockOpenIcon style={{fontSize:"6rem"}}/>
               <form>
               <div className="inputfields"><TextField  label="User ID" variant="outlined" onChange={useridChange}/></div>
               <div className="inputfields"><TextField  label="Password" variant="outlined" type="password" onChange={passChange}/></div>
               <Button style={{margin:"5px"}} className="buttons" variant="contained" color="primary" onClick={handleSignInValidation}>LOGIN</Button>
               </form>
               <p>If you are a new user 
                   <Link href="#" onClick={()=>this.handleSignUpPage(false)}> Sign UP </Link>
                   here
                </p>
            </div>
        )
    }
}

export default signIn;