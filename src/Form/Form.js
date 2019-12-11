import React, { Component } from 'react';
import Features from '../Features/Features';

class Form extends Component{
    render(){
        return(
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <Features 
                    features={this.props.features} 
                    selected={this.props.selected} 
                    state={this.props.state}
                    updateFeature={this.props.updateFeature}
                    USCurrencyFormat={this.props.USCurrencyFormat}
                    />
            </form>
        )
    }
}

export default Form;