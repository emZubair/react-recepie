import axios from "axios";
import { ReactPropTypes } from "react";
import React, {Component} from "react";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

class LoginForm extends Component{


    constructor(props) {
        super(props)
        this.state = {
            username: this.props.username,
            password: this.props.password
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    static get propTypes() {
        return {
            username: ReactPropTypes.string,
            password: ReactPropTypes.string
        }
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        axios
        .post(SERVER_URL.concat('/api-token-auth/'), {
            username: this.state.username,
            password: this.state.password
        })
        .then((resposne) => {
            console.log(resposne.data)
        })
        .catch(function(error){
            console.log("Error")
        })
    }

    render(){
        return(
            <div className="login-form">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange}></input> 
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input> 

                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
}

export default LoginForm;