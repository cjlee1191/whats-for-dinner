import React from 'react'
import './Search.css'


class Filter extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.updateSearch()
    }
      handleChange = (event) => {
          event.preventDefault();
          this.props.handleChange(event)
      }
      

    

    render(){
        return(
           <form className="filter" onSubmit={this.handleSubmit}> 
                 <select  className="drop-down" onChange={this.handleChange} placeholder="filter" >
                 <option value=""></option>
                  <option value="vegan">Vegan</option>
                  <option value="gluten-free">Gluten Free</option>
                  <option value="keto">Keto</option>
                  <option value="vegetarian">Vegetarian</option>
                  <option value="paleo">Paleo</option>
                  <option value="low-sodium">Low Sodium</option>
                  <option value="low-calorie">Low Calorie</option>
                  <option value="low-fat">Low Fat</option>
                  
               </select>
               <input className="filter-button"  value='Filter' type="submit"></input>
        </form>
           
        )
    }
}

export default Filter