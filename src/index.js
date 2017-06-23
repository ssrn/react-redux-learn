//контейнер который рендерит UserForm, основной компонент приложения

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './containers/App/App';

const store = configureStore();

// Этот файл - entry point нашего приложения, здесь должно описываться:
// - Подключение полифилов/глобальных стилей/общих для приложения библиотек
// - Начальная конфигурация приложения, как например configureStore
// - Рендер корневого компонента приложения, включая компоненты типа Provider из react-redux

// render(
//   <Provider store={store}>
//     <App /> - корневой компонент, в нем рендерятся все компоненты в зависимости от текущего контекста.
//               Пока контекста нету и в App будет просто рендерится UserForm
//   </Provider>,
//   document.getElementById('root')
// );

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
