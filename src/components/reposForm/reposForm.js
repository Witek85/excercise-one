import React, {Component} from 'react';
import { connect } from 'react-redux';
import { filterRepos } from '../../store/actions/github';

class ReposForm extends Component {
  constructor(props) {
    super(props);
    this.state = {searchQuery: '', language: ''};
  }

  handleChange = (event) => {
    const filterParams = {
      ...this.state,
      [event.target.id]: event.target.value
    };
    this.setState(filterParams);
    this.props.onFilterRepos(filterParams)
  }

  handleClear = (e) => {
    const filterParams = {searchQuery: '', language: ''};
    this.setState(filterParams);
    this.props.onFilterRepos(filterParams)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label for="searchQuery">
          <input id="searchQuery" type="text" value={this.state.searchQuery} onChange={this.handleChange} />
        </label>
        <label for="language">
          <select id="language" value={this.state.language} onChange={this.handleChange}>
            <option value="">All</option>
            <option value="css">CSS</option>
            <option value="html">HTML</option>
            <option value="javascript">Javascript</option>
            <option value="ruby">Ruby</option>
          </select>
        </label>
        <button type="button" onClick={this.handleClear}>Clear</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
      // fetchedRepos: state.github.fetchedRepos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onFilterRepos: (filterParams) => dispatch(filterRepos(filterParams)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ReposForm);