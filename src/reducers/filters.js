import moment from "moment";
//instatiating the filters state

const filterReducerDefaultState = { 
    text: '',
    sortBy:'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
    };
    // this is the reducer
    export default (state = filterReducerDefaultState, action)=>{
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