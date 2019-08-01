import React from 'react'
import './FoodList.css'

class FoodList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.props = props
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (event) => {
        event.preventDefault();
        this.props.handleClick(event)

    }


    render() {
        const recipes = this.props.recipes.map((item, index) =>

            <div className="recipes" key={index}>
                <h1 className="title">{item.recipe.label}</h1>
                <img src={item.recipe.image} alt="recipes" className="img" />
                <h3 className="title">Source - {item.recipe.source}</h3>
                <a className="recipe-link" href={item.recipe.shareAs}>Click For Recipe</a>
                <button value={index} source={item.recipe.source} className="button" onClick={this.handleClick} onSubmit={this.AddInput}>Add to Cook Book</button>
            </div>
        )

        return (

            <div recipe={this.recipe} className="recipe-list">{recipes}</div>
        )
    }
}


export default FoodList

