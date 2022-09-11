
export default (expenses) => {
    if(expenses === 0){
        return 0;
    }else{
        return expenses
        .map((expense)=>expense.amount)
        .reduce((sum, value)=>{
             return sum + value;
        }, 0)
    }
};