import React from 'react';
import { connect } from 'react-redux';
import PizzaDetails from './PizzaDetails';

class PizzaDetailsContainer extends React.Component {
    render(){
        const pizza = this.props.pizza;
        if(!pizza){
            return null
        }else{
            return <PizzaDetails pizza={pizza} />
        }
    } 
}

const mapStateToProps = (state) => {
    if(state.selectedPizza !== null){
        return {
            pizza: state.pizzas.find(pizza=>pizza.id === state.selectedPizza)
        }
    }else{
        return {}
    }
}

export default connect(mapStateToProps)(PizzaDetailsContainer)

