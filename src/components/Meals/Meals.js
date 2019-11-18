import React, { Component } from "react";
import "./Meals.css";

class Meals extends Component {
    render() {
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
                                    { this.props.measurements.map((measurement, index) => {
                                        if (measurement) {
                                            return ( <li className="measurementItem" key={ index }>{ measurement }</li> )
                                        } else {
                                            return false
                                        }
                                    })}
                                </ul>
                            </div>
                            <div className="listContainer">
                                <ul className="ingredientList">
                                    { this.props.ingredients.map((ingredient, index) => {
                                        if (ingredient) {
                                            return ( <li className="ingredientItem" key={ index }>{ ingredient }</li> )
                                        } else {
                                            return false
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

export default Meals;