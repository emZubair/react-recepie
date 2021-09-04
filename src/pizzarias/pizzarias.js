import React, {Component} from 'react';
import PizzaDetails from './pizzdetails';
import axios from 'axios';

class PizzaList extends Component{
    state = {
        pizzaList : []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/pizza/')
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
                {this.state.pizzaList.map( item =>  {
                    return <PizzaDetails key={item.id} p = {item} />
                })
                }
            </div>
        )
    }
}

export default PizzaList;
