import React, {Component} from "react";
import { ReactPropTypes } from "react";
import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

class RegisterView extends Component{
    constructor(props) {
        super(props)

        this.state = {
            username: this.props.username,
            password: this.props.password
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    static get propTypes() {
        return {
            username: ReactPropTypes.string,
            password: ReactPropTypes.string
        }
    }

    handleChange(event) {
        console.log(`name:${event.target.name} password:${event.target.value}`)
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault();
        axios
        .post(SERVER_URL.concat('/pizza/register/'), {
            username: this.state.username,
            password: this.state.password
        })
        .then((response) => {
            console.log(response.data)
        })
        .catch(function(error){
            console.log(error)
        })
    }

    render() {
        const {username, password} = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="username">
                        Username
                        <input type="text" onChange={this.handleChange} name="username" value={username}></input>
                    </div>

                    <div className="password">
                        Password
                        <input type="password"  onChange={this.handleChange} name="password" value={password}></input>
                    </div>

                    <input type="submit" value="Create User"></input>
                </form>
            </div>
        )
    }
}

export default RegisterView;