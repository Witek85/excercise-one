import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import createSagaMiddleware from 'redux-saga';
import configureMockStore from 'redux-mock-store';
import App from './App';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureMockStore([sagaMiddleware]);
const initialState = {};

describe('<App />', () => {

  let store, wrapper, props = {};

  it('renders without crashing', () => {
    store = mockStore(initialState);
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><App {...props} /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render correctly', () => {
    wrapper = shallow(<App/>);
    expect(wrapper).toMatchSnapshot();
  });
});