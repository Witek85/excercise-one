import React from 'react';
import { shallow } from 'enzyme';
import ReposList from './reposList';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});

describe('<ReposList />', () => {

  it('should render correctly', () => {
		const wrapper = shallow(
			<Provider store={store}>
				<ReposList />
			</Provider>
		);
		expect(wrapper).toMatchSnapshot();
  });
});