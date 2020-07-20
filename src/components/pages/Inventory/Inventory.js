import React, { Component } from 'react';
import ButtonGoTo from '../../ButtonGoTo/ButtonGoTo';

class Inventory extends Component {
  render() {
    return (
      <div className="container">
        <h2>Inventory Page</h2>
        <ButtonGoTo />
      </div>
    );
  }
}

export default Inventory;