import React from 'react'
import './Search.css'

class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    handleInput = (event) => {
        event.preventDefault();
        this.props.updateSearch()
    }
      handleChange = (event) => {
          event.preventDefault();
          this.props.handleChange(event)
      }

    

    render(){
        return(
         
            <form className="search"  onSubmit={this.handleInput}>
            <input className='search-bar-text'placeholder='Search Recipes' type="text" onChange={this.handleChange}/>
            <input className="search-bar-button"  value='Search' type="submit"></input>
            </form>
        )
    }
}

export default Search