import React, {Component} from "react";
import PizzaList from "./pizzarias";


class PizzaDetails extends Component {
    render() {
        const p = this.props.p
        return (
            <div>
                <h4>{p.id}</h4>
                <h4>{p.pizzeria_name}</h4>
                <h4>{p.city}</h4>
            </div>
        )
    }
}

export default PizzaDetails;