import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducer from './reducers';
import App from './routes/App';
import { loadState, saveState } from './localStorage';

let initialState = {
  user: false,
};

const persistedState = loadState();

if (persistedState) {
  initialState = persistedState;
}

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhacers());

store.subscribe(() => {
  saveState({
    user: store.getState().user,
  });
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
