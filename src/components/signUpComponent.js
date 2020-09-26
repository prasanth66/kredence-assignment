import React from 'react';
import {TextField,Button,Link} from '@material-ui/core';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FaceIcon from '@material-ui/icons/Face';

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

        // method to validate entered signup details
        const handleSignUpValidation=()=>{
           let userid=this.state.userid.trim();
           let password=this.state.password.trim();
           let confirmpassword=this.state.confirmpassword.trim();
        // case to check empty fields
           if(userid.length===0 || password.length===0 || confirmpassword.length===0 ){
            toast.error("Fill All The Fields...!",{autoClose:3000})
            
           }
           else{
            //    if userid is already taken
               if(localStorage.getItem(userid)!==null)
               toast.error("User Id already taken",{autoClose:3000})
            //    if password length is less than 6 characters
               else if(password.length<6)
               toast.warning("Password length should be min 6 charcters",{autoClose:3000})
            //    if password doesnt match with confirm password
               else if(password!==confirmpassword)
               toast.error("Password and Confirm password doesn't match",{autoClose:3000})
            //    if entered details pass through all validations
               else{
                //    storing the details in local storage
                localStorage.setItem(userid, password);
                this.props.signinPage(true);
                toast.success("successfully signed up...!",{autoClose:3000})
               }
            
           }

        }
// method to handle login page
        const loginPageHandler=()=>{
            this.props.signinPage(true);
        }
            // method to store present user details
        const useridChange=(event)=>{
            this.setState({
                userid:event.target.value
            })
        }
// method to change password
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
            <div className="signUp center">
                <h1>Register as  New User</h1>
                <FaceIcon style={{fontSize:"6rem"}}/>
               <div className="inputfields"><TextField  label="User ID" variant="outlined" onChange={useridChange} /></div>
               <div className="inputfields"><TextField  label="Password" variant="outlined" type="password" onChange={passChange}/></div>
               password length should be min 6 characters
               <div className="inputfields"><TextField  label="Confirm Password" variant="outlined" type="password" onChange={confpassChange}/></div>
               <Button variant="contained" color="primary" onClick={handleSignUpValidation}>Sign UP</Button>
               <p>If already have account 
                   <Link href="#" onClick={loginPageHandler}> Sign IN </Link>
                   here
                </p>
            </div>
        )
    }
}

export default signUp;