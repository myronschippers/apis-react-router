import React, { Component } from 'react';
import Button from '../../Button/Button';
import Typography from '@material-ui/core/Typography';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Typography variant="h3" component="h2">Home Page</Typography>
        <Button></Button>
      </div>
    );
  }
}

export default Home;