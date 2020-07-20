import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// import Button from '@material-ui/core/Button';
import {
  Button,
} from '@material-ui/core';

class ButtonGoTo extends Component {

  handleGoToCheckout = () => {
    console.log('GOTO CHECKOUT');
    this.props.history.push('/checkout');
  }

  render() {

    console.log(this.props.history);

    return (
      <Button
        size="large"
        variant="outlined"
        color="primary"
        onClick={this.handleGoToCheckout}
      >
        Checkout NOW!!!
      </Button>
    );
  }
}

export default withRouter(ButtonGoTo);
