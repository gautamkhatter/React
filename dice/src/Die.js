import React, { Component } from 'react'
import './Die.css';

class Die extends Component {
   render() {
      return (
         <i className={`Die fas fa-dice-${this.props.face} ${
            // taking advantage of boolean operator
            this.props.rolling && "shaking"
         }`} />
      )
   }
}

export default Die;