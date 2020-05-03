import React from 'react';
import { shallow } from 'enzyme';
import Repo from './repo';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});

describe('<Repo />', () => {

  it('should render correctly', () => {
		const wrapper = shallow(
			<Provider store={store}>
				<Repo />
			</Provider>
		);
		expect(wrapper).toMatchSnapshot();
  });
});