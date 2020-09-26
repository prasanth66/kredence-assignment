import React from 'react';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import {Button,TextField} from '@material-ui/core';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure();

class User extends React.Component{

    constructor(props){
        super();
        this.state={
            changePassword:true,

            newpassword:""
        }
    }

    // method to change password
    changePassword=(check,savepassword)=>{
        this.setState({
            changePassword:check
        })
        if(savepassword===true){
            let newpass=this.state.newpassword.trim();
            // if new password is empty
            if(newpass.length===0){
                toast.error("Enter valid Password",{autoClose:3000})
            }
            else{
                // updating the chnged password in localstorage
                localStorage.setItem(this.props.userid, newpass);
                this.setState({
                    newpassword:""
                })
                toast.success("Password changed Successfully",{autoClose:3000})
            }
        }
    }
// method which handles logout
    logoutHandler=(check)=>{
        console.log(check);
       this.props.signinPage(check);
    }
    render(){
        const newPassword=(event)=>{
            this.setState({
                newpassword:event.target.value
            })
        }
        
        return(
            <div className="User center">
                <PermIdentityIcon style={{fontSize:"6rem"}}/>
                <div><h3>Username : {this.props.userid}</h3></div>
                
                
                {
                    // connditional rendering
                this.state.changePassword ? 
                <div>
                    <div><h3>Password : {localStorage.getItem(this.props.userid)}</h3></div>
                    <Button style={{marginRight:"10px"}} variant="contained" onClick={()=>this.changePassword(false)}>Change Password</Button>
                    <Button variant="contained" onClick={()=>this.logoutHandler(false)}>Logout</Button>
                </div>:
                <div>
                    <div>
                        <h3>
                            New Password :-  
                         <TextField size="small"  variant="outlined"  onChange={newPassword}/>
                         </h3>
                         </div>
                   
                   <Button style={{marginRight:"10px"}} variant="contained" onClick={()=>this.changePassword(true,true)}>Save Password</Button>
                   <Button variant="contained" onClick={()=>this.logoutHandler(false)}>Logout</Button>
                </div>
                
                }
        
        
            </div>
        )
    }
}

export default User;