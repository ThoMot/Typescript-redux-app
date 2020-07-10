import React from 'react';
import './App.css';
import Container from './components/Container';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { rootReducer } from './state/store'
import { composeWithDevTools } from 'redux-devtools-extension';

function App() {

  const store = createStore(rootReducer, composeWithDevTools());
  console.log(store.getState())

  return (
    <Provider store={store}>
      <div className="App">
        <h1>Typescript redux app!</h1>
        <Container />

      </div>
    </Provider>
  );
}

export default App;
