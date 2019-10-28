import React from 'react';
import AddPizzaForm from './AddPizzaForm';
import { connect } from 'react-redux';

class AddPizzaFormContainer extends React.Component {
    addPizza = (pizza) => {
        this.props.dispatch({
            type: 'ADD_PIZZA',
            payload: {
                //id: this.props.length+1,
                id: Math.round(Math.random()*10000), // use pizzas.length?
                ...pizza
            }
        })
    }

    render(){
        return <AddPizzaForm addPizza={this.addPizza} />
    }
}

// What does connect does anyway?
export default connect()(AddPizzaFormContainer)