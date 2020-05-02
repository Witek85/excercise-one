import React, { Component } from 'react';
import { connect } from 'react-redux';
import { githubInit } from '../../store/actions/github';
import Repo from '../repo/repo'

class ReposList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.props.onGithubInit();
        console.log('componentDidMount', this.props);
        console.log('githubData', this.props);
    }
    componentDidUpdate() {
        console.log('componentDidUpdate', this.props);
    }
    render() {
        console.log(this.props.filteredRepos)
        const repos = this.props.filteredRepos.map(repo => {
            console.log('repo', repo);
            return <Repo repoData={repo} />;
        })
        return (
            <div>
                {repos}     
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('state', state)
    return {
        filteredRepos: state.github.filteredRepos
        // issDataError: state.iss.issDataError,
        // googleData: state.iss.googleData
    }
  }
  
function mapDispatchToProps(dispatch) {
    return {
        onGithubInit: () => dispatch(githubInit()),
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ReposList);