import React from 'react';
import Axios from 'axios';
import { Route, Link } from "react-router-dom";
import './App.css';
import Search from './components/Search/Search'
import Filter from './components/Search/Filter'
import FoodList from './components/FoodList/FoodList'
import Header from './components/Header/Header'
import Bookmarks from './components/Bookmarks/Bookmarks';





class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      input: '',
      homePage: 'trending',
      recipes: [],
      bookmarks: [],
      isLoaded: false
    }
}
  componentDidMount() {
    this.getData();
    this.setState({isLoaded: true})
  }
  getData = async () => {
   
      try {
        const KEY = process.env.REACT_APP_TOKEN;
        const ID = process.env.REACT_ID_TOKEN;

        const apiUrl = `https://api.edamam.com/search?q=${this.state.homePage}&app_id=${ID}&app_key=${KEY}`;
        const apiResponse = await Axios.get(apiUrl);
        const searchResult = apiResponse.data
        console.log(searchResult.hits)
        if(apiResponse.status === 200) {
          this.setState(prevState => ({
            recipes: searchResult.hits
          }), () => {console.log(searchResult)}
          )}
      } catch (error) {
        console.log(error)
      }
    
  }
  AddInput = async () => {
    
      try {
        const apiUrl = `https://api.edamam.com/search?q=${this.state.input}&app_id=eaf0a580&app_key=d4ef4d58a2902c75d3cd4df0eb74068e`;
        const apiResponse = await Axios.get(apiUrl);
        const newSearchResult = apiResponse.data
        if(apiResponse.status === 200) {
          this.setState(prevState => ({
          recipes: newSearchResult.hits
          }), () => {console.log(this.searchResult)}
          )}
      } catch (error) {
        console.log(error)
      }
  
  }
    HandleChange = (event) => {
       
        this.setState({
         input: event.target.value,
        
      })
    }
    HandleClick = (event) => {
    
      this.setState({
      //  bookmarks: event.currentTarget
      }, console.log(event.currentTarget.name))
    
    
    }
   render(){
   return(
    
      
        <div className="App">
          
          <Header />
          <div className ="banner">
          <Search updateSearch={this.AddInput} handleChange={this.HandleChange} />
          <Filter updateSearch={this.AddInput} handleChange={this.HandleChange}/>
          </div>
          <Route path="/"render={() => (<FoodList handleClick={this.HandleClick} recipes={this.state.recipes} recipe={this.props.recipes} />)} />
          <Link to="/"></Link>
          <Link className="cookbook" to="/cookbook">Cook Book</Link>
          <Route path="/cookbook" render={() => (<Bookmarks bookmarks={this.state.bookmarks} handleClick={this.HandleClick} updateSearch={this.AddInput} />)} />
        </div>
   )
 }
}

export default App;
