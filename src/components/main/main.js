import React, { Component } from 'react';
import ReposForm from '../reposForm/reposForm';
import ReposList from '../reposList/reposList';

class Main extends Component {
    render() {
        return (
            <>
                <ReposForm/>                
                <ReposList/>                
            </>
        )
    }
}

export default Main;