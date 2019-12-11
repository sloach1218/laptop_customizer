import React, { Component } from 'react';
import FeatureItems from '../FeatureItems/FeatureItems';



class Features extends Component{
    
    render(){
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            
      
            return (
              <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                  <h3>{feature}</h3>
                </legend>
                <FeatureItems 
                    features={this.props.features}
                    feature={feature}
                    state={this.props.state}
                    updateFeature={this.props.updateFeature}
                    USCurrencyFormat={this.props.USCurrencyFormat}
                />
              </fieldset>
            );
          });

          return (
            features
          )
          }
    }


export default Features;