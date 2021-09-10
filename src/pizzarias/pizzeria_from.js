import React, { Component } from "react";
import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

class PizzeriaForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pizzera_name: "",
            city: "",
            state: "",
            email: "",
            description: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        const { pizzera_name, city, state, description, email } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    Pizza Name
                    <input type='text' name='pizzera_name'
                        value={pizzera_name} onChange={this.handleChange}></input>
                </div>
                <div>
                    City
                    <input type='text' name='city'
                        value={city} onChange={this.handleChange}></input>
                </div>
                <div>
                    State
                    <input type='text' name='state'
                        value={state} onChange={this.handleChange}></input>
                </div>
                <div>
                    Description
                    <input type='text' name='description'
                        value={description} onChange={this.handleChange}></input>
                </div>
                <div>
                    Email
                    <input type='text' name='email'
                        value={email} onChange={this.handleChange}></input>
                </div>

                <div>
                    Email
                    <input type='text' name='email'
                        value={email} onChange={this.handleChange}></input>
                </div>

                <input type="submit" value="Submit" />
            </form>
        )
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });

    }

    handleSubmit(event) {
        console.log(this.state.pizzera_name)
        event.preventDefault();
        axios
            .post(SERVER_URL.concat('/pizza/create'), {
                pizzeria_name: this.state.pizzera_name,
                city: this.state.city,
                state: this.state.state,
                email: this.state.email,
                description: this.state.description

            })
            .then((response) => {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            })
    }
}

export default PizzeriaForm;
