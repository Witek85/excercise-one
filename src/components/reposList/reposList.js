import React, { Component } from 'react';
import { connect } from 'react-redux';
import { githubInit } from '../../actions/github';
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
        console.log(this.props.fetchedRepos)
        const repos = this.props.fetchedRepos.map(repo => {
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
        fetchedRepos: state.github.fetchedRepos
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