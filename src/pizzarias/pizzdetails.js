import React, {Component} from "react";
import PizzaList from "./pizzarias";


class PizzaDetails extends Component {
    render() {
        const pizzaDetails = this.props.pizzDetails;
        return (
            <div style={{color: "yellow", border:"1px solid yellow"}}>
                <h4>{pizzaDetails.pizzeria_name}</h4>
                <h5>
                    Address: {pizzaDetails.city} - {pizzaDetails.state}
                </h5>

                <p>{pizzaDetails.description}</p>

            </div>
        )
    }
}

export default PizzaDetails;