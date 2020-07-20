import React, { Component } from 'react';

class Inventory extends Component {

  handleGoToCheckout = () => {
    console.log('GOTO CHECKOUT');
    this.props.history.push('/checkout');
  }

  render() {
    return (
      <div className="container">
        <h2>Inventory Page</h2>
        <button onClick={this.handleGoToCheckout}>Checkout NOW!!!</button>
      </div>
    );
  }
}

export default Inventory;