import axios from "axios";
import { ReactPropTypes } from "react";
import React, {Component} from "react";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

class PizzaUpdate extends Component{
    constructor(props){
        super(props)
        console.log("Receive object "+this.props.obj.pizza_name)

        this.state = {
            pizza_object: this.props.obj,
            pizza_name: this.props.obj.pizza_name,
            description: this.props.obj.description,
            city: this.props.obj.city,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    static get propTypes() {
        return {
            obj: ReactPropTypes.any
        }
    }

    render() {
        console.log("Pizza update render:"+ this.state.pizza_name)
        return(
            <div className="pizza-update">
                <form onSubmit={this.handleSubmit}>
                    <div className="update-details">
                        Details
                        <input type="text" onChange={this.handleUpdate} name="description" value={this.state.description}></input>
                    </div>

                    <div className="update-city">
                        City
                        <input type="text" name="city" onChange={this.handleUpdate} value={this.state.city}></input>
                    </div>

                    <input type="submit" value="Update Details"></input>
                </form>
            </div>
        )
    }

    handleUpdate(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault()
        axios
        .patch(SERVER_URL.concat(this.state.pizza_object.update), 
            {
                details: this.state.details,
                city: this.state.city
            }
        ).then((response) => {
            console.log(response)
        })
        .catch(function (error){
            console.log(error)
        })
    }
}

export default PizzaUpdate;
