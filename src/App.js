import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import SmartphoneList from './components/smartphone-list';
import messages from './reducers/messages';
import connected from './reducers/connected';
import smartphones from './reducers/smartphones';
import { addPhone } from './actions/smartphones';
import { addMessage } from './actions/messages';

const store = createStore(combineReducers({ messages, connected, smartphones }));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SmartphoneList />
      </Provider>
    );
  }
}

addPhone(store.dispatch, 'David', 10);
addPhone(store.dispatch, 'James', 20);
addPhone(store.dispatch, 'Arik', 30);
addPhone(store.dispatch, 'Ben', 40);
addPhone(store.dispatch, 'Ronald', 50);
addPhone(store.dispatch, 'Messi', 100);
addPhone(store.dispatch, 'BeatleJuice', 150);
addPhone(store.dispatch, 'Jose', 200);
addPhone(store.dispatch, 'Mo', 500);
addMessage(store.dispatch, 'Hi', 'David');
addMessage(store.dispatch, 'Bye', 'Mo');

export default App;
