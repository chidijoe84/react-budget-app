import { createStore, combineReducers } from "redux";

import {v4 as uuid} from 'uuid';

const addExpense = (
    {
         description= '',
          note='',
           amount= 0,
            createdAt=0 
        } = {}
        )=>
        ({
    type: 'ADD_EXPENSE',
    expense:{
        id:uuid(),
        description,
        note,
        amount,
        createdAt}
    
});

const removeExpense = ({ id } = {})=>({
    type: 'REMOVE_EXPENSE',
    id    
});

const editExpense = (id, update) => ({
    type: 'EDIT_EXPENSE',
    id,
    update
});

const setTextFilter = (text = '') =>({
    type: 'SET_TEXT_FILTER',
    text
});

const sortByAmount = () =>({
    type: 'SORT_BY_AMOUNT'
});

const sortByDate = () =>({
    type: 'SORT_BY_DATE'
});

const setStartDate = ( startDate ) =>({
    type: 'START_DATE',
    startDate
});

const setEndDate = ( endDate ) =>({
    type: 'END_DATE',
    endDate
})






const expenseReducerDefaultState = [];

const expenseReducer = (state = expenseReducerDefaultState, action)=>{
    switch (action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                 action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id })=>{
                return id !== action.id;
            });
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id === action.id){
                    return {
                       ...expense,
                       ...action.update 
                    }
                }else{
                    return expense;
                }
            });
        
        default:
            return state;
    }
};




//instatiating the filters state

const filterReducerDefaultState = { 
text: ' ',
sortBy:'amount',
startDate: undefined,
endDate: undefined
};
// this is the reducer
const filterReducer = (state = filterReducerDefaultState, action)=>{
    switch (action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_AMOUNT':
             return {
                  ...state,
                  sortBy: 'amount'
                };
        case 'SORT_BY_DATE':
            return {
                 ...state,
                sortBy: 'date'
             };
        case 'START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
         case 'END_DATE':
            return {
                ...state,
                endDate: action.endDate
                }
        default:
            return state;
    }
};

const getVisibleExpense = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) =>{
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
       const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

       console.log(textMatch);

        return startDateMatch && endDateMatch && textMatch;
     }).sort((a, b) => {
        if(sortBy === 'date'){
         return a.createdAt < b.createdAt ? 1 : -1;
     }else if(sortBy === 'amount'){
         return a.amount < b.amount ? 1 : -1
     }
     });
};
//this is where we create the store
const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filterReducer

    })
    );

    store.subscribe(()=>{
        const state = store.getState();
        const visibleExpenses = getVisibleExpense(state.expenses, state.filters);
        console.log(visibleExpenses );
    })

     const expenseOne = store.dispatch(addExpense({ description: 'rent', amount: 100 , createdAt: -21000}));
     const expenseTwo = store.dispatch(addExpense({ description: 'coffee', amount: 300, createdAt: 1000 }));

    // // // store.dispatch(removeExpense({id: expenseOne.expense.id }));

    // // // store.dispatch(editExpense(expenseTwo.expense.id, { amount: 700 }));

      //store.dispatch(setTextFilter('r'));
    //   //store.dispatch(setTextFilter(''));

    //  store.dispatch(sortByAmount());
    // // store.dispatch(sortByDate());

    //  //store.dispatch(setStartDate(0));
    // // // store.dispatch(setStartDate());
    //  //store.dispatch(setEndDate(999));






   
//this is where we created the states of the app

const demoState = {
    expense:[{
        id: 'shdshdbsds',
        description: 'january Rent',
        note: 'this was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy:'amount',
        startDate: undefined,
        endDate: undefined
    }
}


export default demoState;