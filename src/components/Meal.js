import React, { Component } from "react";
import "./Meal.css";

class Meal extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let ids = this.props.id
        console.log(ids)
        return (
            <div className="meal">
                <h1>{ this.props.name }</h1>
                <div className="mealCard">
                    <img className="mealImage"
                        src={ this.props.image }
                        alt={ this.props.id } />
                    <div className="ingredients">
                        <h2>Ingredients</h2>
                        <div className="measureIn">
                            <div className="listContainer">
                                <ul className="measurementList">
                                    { this.props.measurements.map(measurement => {
                                        if (measurement) {
                                            return ( <li className="measurementItem">{ measurement }</li> )
                                        }
                                    })}
                                </ul>
                            </div>
                            <div className="listContainer">
                                <ul className="ingredientList">
                                    { this.props.ingredients.map(ingredient => {
                                        if (ingredient) {
                                            return ( <li className="ingredientItem">{ ingredient }</li> )
                                        }
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Meal;