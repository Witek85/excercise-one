import React from 'react';
import { shallow } from 'enzyme';
import ReposList from './reposList';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();

describe('<ReposList />', () => {
	let wrapper, store;

	beforeEach(() => {
		const initialState = {
			filteredRepos: [{id: 1}, {id: 2}, {id: 3}],
			favouriteRepos: []
		};
		store = mockStore(initialState);
		wrapper = shallow(<ReposList store={store} />);
	});

	beforeEach(() => {
		const initialState = {
			filteredRepos: [{id: 1}, {id: 2}, {id: 3}],
			favouriteRepos: []
		};
		store = mockStore(initialState);
		wrapper = shallow(<ReposList store={store} />);
	});

	it('should render correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});
});