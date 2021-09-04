import React, {Component} from 'react';
import DummyJson from './dummydata.json';
import PizzaDetails from './pizzdetails';

class PizzaList extends Component{
    render() {
        return (
            <div>
                {DummyJson.map( item =>  {
                    return <PizzaDetails p = {item} />
                })
                }
            </div>
        )
    }
}

export default PizzaList;
