import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboard from "../components/ExpenseDashboard";
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';

import LoginPage  from '../components/LoginPage';
import '../App.css';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
  
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={ExpenseDashboard} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
      </Switch>
    </div>
  </Router>
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