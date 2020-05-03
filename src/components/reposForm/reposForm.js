import React, {Component} from 'react';
import { connect } from 'react-redux';
import { filterRepos } from '../../store/actions/github';
import styled from 'styled-components';

const Form = styled.div`
  margin-bottom: 1rem;
`;

const Input = styled.input`
display: inline-block;
-webkit-box-sizing: border-box;
box-sizing: border-box;
width: 15rem;
height: 2.4375rem;
margin: 0 1rem 1rem 0;
padding: 0.5rem;
border: 1px solid #C8D2E7;
border-radius: 0;
background-color: #FEFEFE;
-webkit-box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);
box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);
font-family: inherit;
font-size: 1rem;
font-weight: normal;
line-height: 1.5;
color: #0a0a0a;
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
`;

const Button = styled.button`
  height: 2.4375rem;
  background: #0062FF;
  color: #FFFFFF;
  display: inline-block;
  margin: 0 0 1rem 0;
  padding: 0.85em 1em;
  border: 1px solid transparent;
  border-radius: 0;
  -webkit-transition: background-color 0.25s ease-out, color 0.25s ease-out;
  transition: background-color 0.25s ease-out, color 0.25s ease-out;
  font-family: inherit;
  font-size: 0.9rem;
  -webkit-appearance: none;
  line-height: 1;
  text-align: center;
  cursor: pointer;
`;

const Select = styled.select`
  height: 2.4375rem;
  margin: 0 1rem 1rem 0;
  padding: 0.5rem;
  border: 1px solid #C8D2E7;
  border-radius: 0;
  background-color: #FEFEFE;
  font-family: inherit;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.5;
  color: #0a0a0a;
  background-image: url(data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='32' height='24' viewBox='0 0 32 24'><polygon points='0,0 32,0 16,24' style='fill: rgb%28138, 138, 138%29'></polygon></svg>);
  background-origin: content-box;
  background-position: right -1rem center;
  background-repeat: no-repeat;
  background-size: 9px 6px;
  padding-right: 1.5rem;
`;

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
      <Form>
        <form onSubmit={this.handleSubmit}>
          <Input id="searchQuery" placeholder="Search" type="text" value={this.state.searchQuery} onChange={this.handleChange} />
          <Select id="language" value={this.state.language} onChange={this.handleChange}>
            <option value="">All</option>
            {this.props.languages.map((language, index) => <option key={index} value={language.key}>{language.value}</option>)}
          </Select>
          <Button type="button" onClick={this.handleClear}>Clear</Button>
        </form>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return {
      languages: state.github ? state.github.languages : []
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onFilterRepos: (filterParams) => dispatch(filterRepos(filterParams)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ReposForm);