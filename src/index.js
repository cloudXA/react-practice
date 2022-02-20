import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import allReducer from './reducers/index';

// 中间件
import middleware from './redux-practice/middleware/logMiddleware';


import inforReducer from './redux-practice/reducers/inforReducer';

import numberReducer from './redux-practice/reducers//numberReducer';

const reducer = combineReducers({ info: inforReducer, number: numberReducer });


// 声明在createStore的info number要和 reducer的info number 一一对应，保证在reducer里的state为声明在createStore的state
let store = createStore(reducer, {
  number: 1,
  info: {
    name: null
  }
}, applyMiddleware(middleware))

export default store;





// ACTION INCREMENT
// const increment = () => {
//   return {
//     type: 'INCREMENT'
//   }
// }

// const decrement = () => {
//   return {
//     type: 'DECREMENT',
//   }
// }

// // reducer
// const counter = (state = 0, action) => {
//   switch(action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//   }
// }

// // STORE --> GLBAOL STATE
// let store = createStore(counter, 
//   );


// display it in the console
// store.subscribe(() => console.log(store.getState()));

// // Dispatch 
// store.dispatch(increment());




ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
