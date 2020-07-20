import React, { Component } from 'react';
import ButtonGoTo from '../../ButtonGoTo/ButtonGoTo';
import Typography from '@material-ui/core/Typography';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Typography variant="h3" component="h2">Home Page</Typography>
        <ButtonGoTo></ButtonGoTo>
      </div>
    );
  }
}

export default Home;