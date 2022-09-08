// import React from "react-dom";
// import { connect } from "react-redux";
// import { useParams, useNavigate  } from "react-router-dom";
// import ExpenseForm from "./ExpenseForm";
// import { editExpense, removeExpense } from '../actions/expenses';
// //import {useNavigate} from 'react-router-dom';
// //import { withRouter } from "react-router-dom";
 


// function EditExpensePage (props){
//   const { id } = useParams();
//  const navigate = useNavigate()
//   return(
//     <div>
//             <ExpenseForm 
//             expense={props.expense}
//             onSubmit={(expense) =>{
//               props.dispatch(editExpense(id,expense))
//               navigate('/');
//             }}
//             />

//           <button onClick={()=>{
//            props.dispatch(removeExpense({id: props.expense.id}));
//            navigate('/');
//         }}>Remove</button>
//           </div>

          
//   );
// };

// function MapStateToProps(state){
//   const { id } = useParams();
//   return{
//     expense: state.expenses.find((expense)=> expense.id ===  id)
//   };
// };



// export default connect(MapStateToProps)(EditExpensePage);

import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push('/');
        }}
      />
      <button onClick={() => {
        props.dispatch(removeExpense({ id: props.expense.id }));
        props.history.push('/');
      }}>Remove</button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditExpensePage);
