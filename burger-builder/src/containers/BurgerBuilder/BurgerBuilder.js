import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {}
    // }

    state = {

        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchaseable:false

    }

    addIngridientHandler = (type) => {

        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngridients = {
            ...this.state.ingredients
        }

        updatedIngridients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({totalPrice:newPrice,ingredients:updatedIngridients});
        this.updatePurchaseState(updatedIngridients);
    }

    updatePurchaseState(ingredients){
        
        const sum = Object.keys(ingredients)
        .map(igKey => {
            return ingredients[igKey]
        })
        .reduce((sum,el) =>{
            return sum + el;
        },0);

        this.setState({purchaseable: sum > 0});
        
    }

    removeIngridientHandler = (type) => {

        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){
            return;
        }

        const updatedCount = oldCount - 1;
        const updatedIngridients = {
            ...this.state.ingredients
        }

        updatedIngridients[type] = updatedCount;

        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        this.setState({totalPrice:newPrice,ingredients:updatedIngridients});

        this.updatePurchaseState(updatedIngridients);
    }

    render() {
        const disableInfo = {
            ...this.state.ingredients
        }

        for(let key in disableInfo){
            disableInfo[key]= disableInfo[key] <= 0;
        }

        return (

            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    disabled={disableInfo}
                    ingredientRemoved={this.removeIngridientHandler}
                    ingredientAdded={this.addIngridientHandler}
                    price={this.state.totalPrice}
                    purchaseable={this.state.purchaseable}
                />

            </Aux>

        )

    }

}

export default BurgerBuilder;