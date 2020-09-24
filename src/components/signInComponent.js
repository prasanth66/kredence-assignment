import React from 'react';
import {TextField,Button,Link} from '@material-ui/core';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

class signIn extends React.Component{

    constructor(props){
        super();
        this.state={
            userid:"",
            password:""
            
        }
    }

    handleSignUpPage=(toggle)=>{
       this.props.signinPage(toggle);
    }
    render(){

     

        const handleSignInValidation=()=>{
            let userid=this.state.userid.trim();
           let password=this.state.password.trim();
           if(userid.length===0 || password.length===0 ){
            toast.error("Fill All The Fields...!",{autoClose:3000})
           }
            else if(localStorage.getItem(userid)===null || localStorage.getItem(userid)!==password){
                toast.error("Invalid Credentials...!",{autoClose:3000})
            }
            else{
                // this.props.isLoggedIn(true);
                console.log(this.props.isLoggedIn(true))
                toast.success("Logged in Successfully...!",{autoClose:3000})
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
        return(
            <div className="signIn">
               <form>
               <div><TextField  label="User ID" variant="outlined" onChange={useridChange}/></div>
               <div><TextField  label="Password" variant="outlined" type="password" onChange={passChange}/></div>
               <Button variant="contained" color="primary" onClick={handleSignInValidation}>LOGIN</Button>
               </form>
               <p>If you are a new user 
                   <Link href="#" onClick={()=>this.handleSignUpPage(false)}> Sign Up </Link>
                   here
                </p>
            </div>
        )
    }
}

export default signIn;