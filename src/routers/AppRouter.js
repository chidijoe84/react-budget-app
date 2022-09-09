import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import ExpenseDashboard from "../components/ExpenseDashboard";
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import Header from '../components/Header';
import '../App.css';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboard} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;



// import React from "react";
// import { Routes, Route, Link} from "react-router-dom";
// import ExpenseDashboard from "../components/ExpenseDashboard";
// import AddExpensePage from "../components/AddExpensePage";
// import EditExpensePage from "../components/EditExpensePage";
// import HelpPage from "../components/HelpPage";
// import Header from "../components/Header";
// import '../App.css';

  
//   function AppRouter() {
//     return (
//       <div className="App">
//         <Header />
//       <Routes>
//         <Route path="/" element={<ExpenseDashboard />}  exact={true}/>
//         <Route path="AddExpensePage" element={<AddExpensePage />} />
//         <Route path="/edit/:id" element={<EditExpensePage />} />
//         <Route path="HelpPage" element={<HelpPage />} />
//       </Routes>
//     </div>
//     );
//   }

//   export default AppRouter;