import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores';
import App from './containers/App';
import injectTapEventPlugin from 'react-tap-event-plugin';
import moment from 'moment';

injectTapEventPlugin();
moment.locale('ru');

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
