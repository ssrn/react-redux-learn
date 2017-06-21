//контейнер который рендерит UserForm, основной компонент приложения

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import UserForm from './containers/UserForm/UserForm';

const store = configureStore();

render(
  <Provider store={store}>
    <UserForm />
  </Provider>,
  document.getElementById('root')
);
