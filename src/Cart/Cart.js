import React, { Component } from 'react';
import Summary from '../Summary/Summary';


class Cart extends Component{
    
    render(){
        const total = Object.keys(this.props.state.selected).reduce(
            (acc, curr) => acc + this.props.state.selected[curr].cost,
            0
          );

        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                <Summary state={this.props.state} USCurrencyFormat={this.props.USCurrencyFormat}/>
                <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                    {this.props.USCurrencyFormat.format(total)}
                </div>
                </div>
            </section>
        );
    }
}

export default Cart;



