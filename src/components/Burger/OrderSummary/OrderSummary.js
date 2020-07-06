import React, { Component } from "react";

import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  componentDidUpdate() {
    console.log("componentWillUpdate!!!!");
  }
  render() {
    const ingredientsSummary = Object.keys(this.props.ingredients).map(
      (ingredientKey) => {
        return (
          <li key={ingredientKey}>
            <span style={{ textTransform: "capitalize" }}>{ingredientKey}</span>
            : {this.props.ingredients[ingredientKey]}
          </li>
        );
      }
    );
    return (
      <React.Fragment>
        <h3>Your order</h3>
        <p>Il tuo hamburger ha i seguenti ingredienti:</p>
        <ul>{ingredientsSummary}</ul>
        <p>Prezzo totale: {this.props.price.toFixed(2)}</p>
        <p>Continuare conl'acquisto?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCanceled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </React.Fragment>
    );
  }
}

export default OrderSummary;
