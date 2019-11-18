import React, { Component } from "react";
import Meals from "./Meals";

class Singlemeal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mealArray: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/meals/:ids")
            .then(res => res.json())
            .then(res => {
                console.log(res, "Success");
                this.setState({ mealArray: res.meal })
            })
            .catch(err => {
                console.log(err, "Something's wrong")
            })
    }

    render() {
        const mealArray = this.state.mealArray

        return (
            <div className="mealContainer">
                { mealArray.map((item, index) => {
                    return (
                        <Meals className="meal"
                            id={ item.id }
                            name={ item.mealName }
                            category={ item.category }
                            area={ item.area }
                            instructions={ item.instructions }
                            image={ item.image }
                            tags={ item.tags }
                            video={ item.video }
                            ingredients={[
                                item.ingredient1,
                                item.ingredient2,
                                item.ingredient3,
                                item.ingredient4,
                                item.ingredient5,
                                item.ingredient6,
                                item.ingredient7,
                                item.ingredient8,
                                item.ingredient9,
                                item.ingredient10,
                                item.ingredient11,
                                item.ingredient12,
                                item.ingredient13,
                                item.ingredient14,
                                item.ingredient15,
                                item.ingredient16,
                                item.ingredient17,
                                item.ingredient18,
                                item.ingredient19,
                                item.ingredient20
                            ]}
                            measurements={[
                                item.measurement1,
                                item.measurement2,
                                item.measurement3,
                                item.measurement4,
                                item.measurement5,
                                item.measurement6,
                                item.measurement7,
                                item.measurement8,
                                item.measurement9,
                                item.measurement10,
                                item.measurement11,
                                item.measurement12,
                                item.measurement13,
                                item.measurement14,
                                item.measurement15,
                                item.measurement16,
                                item.measurement17,
                                item.measurement18,
                                item.measurement19,
                                item.measurement20
                            ]}
                            source={ item.source }
                            dateModified={ item.dateModified }
                            key={ index }
                        />
                    )
                }) }
            </div>
        )
    }
}

export default Singlemeal;