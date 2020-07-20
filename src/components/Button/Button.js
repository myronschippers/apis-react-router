import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Button extends Component {

  handleGoToCheckout = () => {
    console.log('GOTO CHECKOUT');
    this.props.history.push('/checkout');
  }

  render() {

    console.log(this.props.history);

    return (
      <button onClick={this.handleGoToCheckout}>Checkout NOW!!!</button>
    );
  }
}

export default withRouter(Button);
