import React from 'react';
import {FormControl,InputLabel,Select} from '@material-ui/core'

class Dropdown extends React.Component{

    render(){

     const DropdownHandler=(event)=>{
        this.props.dropdown(event.target.value);
          }

        return(
            <div className="Dropdown">
              <FormControl variant="outlined" style={{minWidth: 250}} >
                  <InputLabel >Latest Technologies</InputLabel>
                  <Select   native onChange={DropdownHandler}>
                      <option value="" ></option>
                      <option value="internetofthings">Internet Of Things</option>
                      <option value="machinelearning">Machine Learning</option>
                      <option value="artificialintelligence">Artificial Intelligence</option>
                      <option value="datascience">Data Science</option>
                      <option value="cybersecurity">Cybersecurity</option>
                  </Select>
              </FormControl>
            </div>
        )
    }
}

export default Dropdown;