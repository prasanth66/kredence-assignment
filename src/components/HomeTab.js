import React from 'react';
import Dropdown from './DropdownComponent';
import Information from './Informationomponent';

class Home extends React.Component{

    constructor(props){
        super();

        this.informationHandler = this.informationHandler.bind(this);
        this.state={
            dropdown:""
        }
    }

    informationHandler(dropdown){
        this.setState({
            dropdown
        })
      }
    render(){
        return(
            <div className="Home">
                <Dropdown  dropdown = {this.informationHandler}/>
                <Information information={this.state.dropdown}/>  

            </div>
        )
    }
}

export default Home;