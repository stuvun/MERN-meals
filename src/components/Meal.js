import React, { Component } from "react";
import "./Meal.css";

class Meal extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="meal">
                <h1>{ this.props.name }</h1>
                <img src={ this.props.image } alt={ this.props.id }/>
            </div>
        )
    }
}

export default Meal;