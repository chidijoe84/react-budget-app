import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import './index.css';
//import 'normalize.css/normalize.css';
//import './styles/styles.scss';

const store = configureStore();



const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));



// // import React from 'react';
// // import ReactDOM from 'react-dom';
// // import { Provider } from 'react-redux';
// // import { BrowserRouter } from "react-router-dom";
// // //import './index.css';
// // //import './demoState';
// // import configureStore from './store/configureStore';
// // import {addExpense} from './actions/expenses';
// // import { setTextFilter } from './actions/filters';
// // import getVisibleExpenses from './selectors/expenses';
// // import reportWebVitals from './reportWebVitals';
// // import AppRouter from './routers/AppRouter';
// // //require('react-date-picker/dist/react-date-picker.css');

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import AppRouter from './routers/AppRouter';
// import configureStore from './store/configureStore';
// import {addExpense} from './actions/expenses';
// import { setTextFilter } from './actions/filters';
// import getVisibleExpenses from './selectors/expenses';
// //import 'normalize.css/normalize.css';
// //import './styles/styles.scss';



// const store = configureStore();

//  store.dispatch(addExpense({ description: 'water bill', amount: 45000}));
//  store.dispatch(addExpense({ description: 'gas bill', createdAt: 1000 }));
//  store.dispatch(addExpense({ description: 'rent', createdAt: 1000 }));
//  store.dispatch(addExpense({ description: 'cloth', createdAt: 1000 }));


  

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);



// const jsx = (
//   <Provider store={store}>
//     <AppRouter />
//   </Provider>
// );


// ReactDOM.render(jsx, document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //     <Provider store={store}>
// //     <BrowserRouter>
// //       <AppRouter />
// //     </BrowserRouter>
// //     </Provider>
// //   </React.StrictMode>
// // );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// //reportWebVitals();
