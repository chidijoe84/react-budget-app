// import React from "react";
// import { connect } from "react-redux";
// import {useNavigate} from 'react-router-dom';
// import ExpenseForm from "./ExpenseForm";
// import { addExpense } from "../actions/expenses";







// function AddExpensePage(props){
//   const navigate = useNavigate();

//   return(
//           <div>
//           <h1>Add Expenses</h1>
//          <ExpenseForm 
//          onSubmit={(expense)=>{
//            props.dispatch(addExpense(expense));
//            navigate('/');
        
//           }}
//           />
//          </div>
//         );

// }

//   export default connect()(AddExpensePage);
  

import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

const AddExpensePage = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm
      onSubmit={(expense) => {
        props.dispatch(addExpense(expense));
        props.history.push('/');
      }}
    />
  </div>
);

export default connect()(AddExpensePage);
