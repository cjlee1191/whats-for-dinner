import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <div className="header-container">
            <ul className="header">
                <Link to="/"><img src={'http://www.transparentpng.com/thumb/food/sHdSWy-food-spoon-fork-knife-background.png'} alt="recipes" className="logo" /> </Link>
                <li className="app-title">What's for Dinner?</li>
                <Link className="cookbook" to="/cookbook">Cook Book</Link>
            </ul>
        </div>
    )
}

export default Header