import React from 'react'
import './Bookmark.css'

class Bookmarks extends React.Component{
    constructor(props) {
    super(props);
    this.props = props;
    }

    
    render(){
        const bookmarks = this.props.bookmarks.map((item, index) =>   
            
         <div className="recipes" key={index}>
             <p className="bookmark">Bookmarked</p>
             <h1 className="title">{item.recipe.label}</h1>
             <img src={item.recipe.image} alt="recipes" className="img"/>
             <h3 className="title">Source - {item.recipe.source}</h3>
             <a className="recipe-link"href={item.recipe.shareAs}>Click For Recipe</a>
        </div>
 
    )
    
        return(
            <div className="recipe-list">{bookmarks}</div>
            
        )
        
    }
}
export default Bookmarks