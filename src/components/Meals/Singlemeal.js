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
        fetch("http://localhost:8080/meals/Chicken Enchilada Casserole")
            .then(res => res.json())
            .then(res => {
                console.log(res, "Success");
                this.setState({ mealArray: res })
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
                            id={ item.meal[0].id }
                            name={ item.meal[0].mealName }
                            category={ item.meal[0].category }
                            area={ item.meal[0].area }
                            instructions={ item.meal[0].instructions }
                            image={ item.meal[0].image }
                            tags={ item.meal[0].tags }
                            video={ item.meal[0].video }
                            ingredients={[
                                item.meal[0].ingredient1,
                                item.meal[0].ingredient2,
                                item.meal[0].ingredient3,
                                item.meal[0].ingredient4,
                                item.meal[0].ingredient5,
                                item.meal[0].ingredient6,
                                item.meal[0].ingredient7,
                                item.meal[0].ingredient8,
                                item.meal[0].ingredient9,
                                item.meal[0].ingredient10,
                                item.meal[0].ingredient11,
                                item.meal[0].ingredient12,
                                item.meal[0].ingredient13,
                                item.meal[0].ingredient14,
                                item.meal[0].ingredient15,
                                item.meal[0].ingredient16,
                                item.meal[0].ingredient17,
                                item.meal[0].ingredient18,
                                item.meal[0].ingredient19,
                                item.meal[0].ingredient20
                            ]}
                            measurements={[
                                item.meal[0].measurement1,
                                item.meal[0].measurement2,
                                item.meal[0].measurement3,
                                item.meal[0].measurement4,
                                item.meal[0].measurement5,
                                item.meal[0].measurement6,
                                item.meal[0].measurement7,
                                item.meal[0].measurement8,
                                item.meal[0].measurement9,
                                item.meal[0].measurement10,
                                item.meal[0].measurement11,
                                item.meal[0].measurement12,
                                item.meal[0].measurement13,
                                item.meal[0].measurement14,
                                item.meal[0].measurement15,
                                item.meal[0].measurement16,
                                item.meal[0].measurement17,
                                item.meal[0].measurement18,
                                item.meal[0].measurement19,
                                item.meal[0].measurement20
                            ]}
                            source={ item.meal[0].source }
                            dateModified={ item.meal[0].dateModified }
                            key={ index }
                        />
                    )
                }) }
            </div>
        )
    }
}

export default Singlemeal;