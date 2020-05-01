import React, { Component } from 'react';
import { connect } from 'react-redux';
import { githubInit } from '../../actions/github';

class Github extends Component {
    componentDidMount() {
        this.props.onGithubInit();
        console.log('componentDidMount', this.props);
    }
    render() {
        return (
            <div>
                repos list                
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        // issData: state.iss.issData,
        // issDataError: state.iss.issDataError,
        // googleData: state.iss.googleData
    }
  }
  
function mapDispatchToProps(dispatch) {
    return {
        onGithubInit: () => dispatch(githubInit()),
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Github);