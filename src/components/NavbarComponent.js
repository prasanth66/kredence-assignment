import React from 'react';
import {AppBar,Button,ButtonGroup} from '@material-ui/core'

class Navbar extends React.Component{

//    method to handle different tabs
    handleTabs=(tab)=>{
        this.props.tab(tab);
        
      }
    
    render(){
        // color object
        const greyColor={
            color:"grey"
        }
        return(
            <div className="Navbar">
               <AppBar position="static" id="appbar" >
               <ButtonGroup size="large" >
               <Button variant="text"  style={greyColor} >LOGO</Button>
                 <Button variant="text" style={greyColor} onClick={()=>this.handleTabs("home")}>Home</Button>
                 <Button variant="text" style={greyColor} onClick={()=>this.handleTabs("tasks")}>Tasks</Button>
                 <Button variant="text" style={greyColor} onClick={()=>this.handleTabs("user")}>User</Button>
                </ButtonGroup>
                
               </AppBar>

              
            </div>
        )

       
    }
    
}

export default Navbar;