import React, {Component} from 'react';
import PizzaDetails from './pizzdetails';
import PizzeriaForm from './pizzeria_from';
import axios from 'axios';

const SERVER_URL = 'http://127.0.0.1:8000';

class PizzaList extends Component{

    constructor(props){
        super(props)
        this.state = {
            pizzaList: [],
            pizzeria: "",
            showComponent: false
        };
        this.getPizzaDetails=this.getPizzaDetails.bind(this);
        this.showPizzaDetails=this.showPizzaDetails.bind(this);
    }

    getPizzaDetails(item) {
        axios.get(SERVER_URL.concat(item.absolute_url))
        .then((response) => {
            console.log("Pizza Details found ", response.data)
            this.setState({pizzeria: response.data})
        }).catch(function (error){
            console.log("Error fetching details, "+error)
        })
    }

    showPizzaDetails(item) {
        if (this.state.showComponent && item.pizzeria_name === this.state.pizzeria.pizzeria_name) {
            console.log("Hiding component")
            this.setState({showComponent: false})
            return
        }
        console.log("Fetching details")
        this.getPizzaDetails(item)
        this.setState({showComponent: true})
    }


    componentDidMount() {
        axios.get(SERVER_URL.concat('/pizza/'))
        .then((response) => {
            this.setState({pizzaList: response.data})
            console.log(response.data)
        })
        .catch(function (error){
            console.log(error)
        })
    }

    render() {
        return (
            <div>
                <div className="form-container">
                    <PizzeriaForm />
                </div>
                {
                this.state.pizzaList.map( item =>  {
                    return (
                    <h3 key={item.id} p = {item} onClick={() => this.showPizzaDetails(item)}>
                        {item.pizzeria_name} - {item.city}
                    </h3>
                        );
                    })
                }
                
                {this.state.showComponent ? ( <PizzaDetails pizzDetails={this.state.pizzeria} /> ) : null }

            </div>
        )
    }
}

export default PizzaList;
