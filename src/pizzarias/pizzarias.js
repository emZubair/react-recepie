import React, {Component} from 'react';
import PizzaDetails from './pizzdetails';
import PizzeriaForm from './pizzeria_from';
import axios from 'axios';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

class PizzaList extends Component{

    constructor(props){
        super(props)
        this.state = {
            pizzaList: [],
            pizzeria: "",
            showComponent: false
        };
        this.deletePizza=this.deletePizza.bind(this);
        this.getPizzaDetails=this.getPizzaDetails.bind(this);
        this.showPizzaDetails=this.showPizzaDetails.bind(this);
    }

    getPizzaDetails(item) {
        axios.get(SERVER_URL.concat(item.absolute_url))
        .then((response) => {
            // console.log("Pizza Details found ", response.data)
            this.setState({pizzeria: response.data})
            this.setState({showComponent: true})
        }).catch(function (error){
            console.log("Error fetching details, "+error)
        })
    }

    hidePizzaDetails() {
        this.setState({showComponent: false})
    }

    showPizzaDetails(item) {
        if (this.state.showComponent && item.pizzeria_name === this.state.pizzeria.pizzeria_name) {
            this.hidePizzaDetails()
            return
        }
        this.getPizzaDetails(item)
    }

    deletePizza(item) {
        console.log("delete item "+ item.pizzeria_name)
        axios
        .delete(SERVER_URL.concat(item.delete))
        .then((response) => {
            const index = this.state.pizzaList.indexOf(item)
            var itemArray = this.state.pizzaList;
            itemArray.splice(index, 1)
            this.setState({pizzaList: itemArray})
            this.hidePizzaDetails()
            console.log("Deleted")
        })
        .catch(function(error){
            console.log(error)
        })
    }

    componentDidMount() {
        axios.get(SERVER_URL.concat('/pizza/'))
        .then((response) => {
            this.setState({pizzaList: response.data})
            // console.log(response.data)
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
                
                {this.state.showComponent ? ( <PizzaDetails pizzobj={this.state.pizzeria} onDelete={this.deletePizza} /> ) : null }

            </div>
        )
    }
}

export default PizzaList;
