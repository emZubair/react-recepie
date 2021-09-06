import React, {Component} from "react";
import PizzaUpdate from './pizzeria_update';


class PizzaDetails extends Component {

    constructor(props){
        super(props)
        this.state = {
            showUpdate: false,
            pizzobj: this.props.pizzobj
        }
    }

    render() {
        const pizzobj = this.props.pizzobj;
        return (
            <div style={{color: "yellow", border:"1px solid yellow"}}>
                <button style={{backgroundColor: "white"}}
                onClick={() => this.updatePizzeriaDetails()}
                >Update Details</button>

                <button style={{backgroundColor: "white"}}
                onClick={() => this.handleDelete()}
                >Delete Pizza</button>

                <h4>{pizzobj.pizzeria_name}</h4>
                <h5>
                    Address: {pizzobj.city} - {pizzobj.state}
                </h5>

                <p>{pizzobj.description}</p>

            {this.state.showUpdate ? (<PizzaUpdate obj={this.state.pizzobj} />): null}
            </div>
        )
    }

    updatePizzeriaDetails() {        
        this.setState({showUpdate: !this.state.showUpdate})
    }

    handleDelete(){
        this.props.onDelete(this.state.pizzobj)
    }
}

export default PizzaDetails;