import React from 'react';
import {TextField,Button} from '@material-ui/core';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

class signUp extends React.Component{

   constructor(props){
       super();
       this.state={
           userid:"",
           password:"",
           confirmpassword:""
       }
   }
    render(){

        const handleSignUpValidation=()=>{
           let userid=this.state.userid.trim();
           let password=this.state.password.trim();
           let confirmpassword=this.state.confirmpassword.trim();

           if(userid.length===0 || password.length===0 || confirmpassword.length===0 ){
            toast.error("Fill All The Fields...!",{autoClose:3000})
            
           }
           else{
               if(localStorage.getItem(userid)!==null)
               toast.error("User Id already taken",{autoClose:3000})
               else if(password!==confirmpassword)
               toast.error("Password and Confirm password doesn't match",{autoClose:3000})
               else{
                localStorage.setItem(userid, password);
                this.props.signinPage(true);
                toast.success("successfully signed up...!",{autoClose:3000})
               }
            
           }

        }
            
        const useridChange=(event)=>{
            this.setState({
                userid:event.target.value
            })
        }

        const passChange=(event)=>{
            this.setState({
                password:event.target.value
            })
        }

        const confpassChange=(event)=>{
            this.setState({
                confirmpassword:event.target.value
            })
        }

        return(
            <div className="signUp">
                
               <div><TextField  label="User ID" variant="outlined" onChange={useridChange} /></div>
               <div><TextField  label="Password" variant="outlined" type="password" onChange={passChange}/></div>
               <div><TextField  label="Confirm Password" variant="outlined" type="password" onChange={confpassChange}/></div>
               <Button variant="contained" color="primary" onClick={handleSignUpValidation}>Sign UP</Button>
               
            </div>
        )
    }
}

export default signUp;