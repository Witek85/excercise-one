import React, { Component } from 'react';
import { connect } from 'react-redux';
import { githubInit, initFavourites } from '../../store/actions/github';
import Repo from '../repo/repo';
import { Row } from 'react-styled-flexboxgrid';

class ReposList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.props.onGithubInit();
        this.props.onInitFavourites();
    }
    render() {
        const repos = this.props.filteredRepos.map(repo => {
            return <Repo 
                key={repo.id}
                repoData={repo} 
                isFavourite={this.props.favouriteRepos.map(repo => repo.id).includes(repo.id)} 
            />;
        })
        return (
            <Row>
                {repos}     
            </Row>
        )
    }
}

function mapStateToProps(state) {
    return {
        filteredRepos: state.github ? state.github.filteredRepos : [],
        favouriteRepos: state.github ? state.github.favouriteRepos : []
    }
  }
  
function mapDispatchToProps(dispatch) {
    return {
        onGithubInit: () => dispatch(githubInit()),
        onInitFavourites: () => dispatch(initFavourites()),
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ReposList);