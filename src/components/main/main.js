import React, { Component } from 'react';
import { Grid } from 'react-styled-flexboxgrid';
import Header from '../header/header';
import ReposForm from '../reposForm/reposForm';
import ReposList from '../reposList/reposList';

class Main extends Component {
  render() {
    return (
      <Grid>
        <Header/>                
        <ReposForm/>                
        <ReposList/>                
      </Grid>
    )
  }
}

export default Main;