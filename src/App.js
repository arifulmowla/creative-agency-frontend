import React, { createContext, useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import 'react-notifications/lib/notifications.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import ServicesList from './Pages/ServicesList/ServicesList';
import Order from './Pages/Order/Order';
import AddReview from './Pages/AddReview/AddReview';
import AdminServicesList from './Pages/AdminServicesList/AdminServicesList';
import AddServices from './Pages/AddServices/AddServices';
import MakeAdmin from './Pages/MakeAdmin/MakeAdmin';
import PrivateRoute from './PrivateRoute/PrivateRoute';

export const HomeContext = createContext()
export const UserContext = createContext()

function App() {

  const userdata = JSON.parse(sessionStorage.getItem('user')) || {};
    const [selectedService, setSelectedService] = useState({})
    const [loggedInUser, setLoggedInUser] = useState(userdata)

  return (
    <>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <HomeContext.Provider value={[selectedService, setSelectedService]}>
        <Route exact path="/">
          <Home></Home>
        </Route>

        
        {/* users route */}
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute exact path="/order">
          <Order></Order>
        </PrivateRoute>
        <PrivateRoute exact path="/services-list">
          <ServicesList></ServicesList>
        </PrivateRoute>
        <PrivateRoute exact path="/add-review">
          <AddReview></AddReview>
        </PrivateRoute>

    
        {/* Admin routes */}
    <PrivateRoute isAdmin={true} exact path="/dashboard/services-list">
          <AdminServicesList></AdminServicesList>
        </PrivateRoute>
        <PrivateRoute isAdmin={true} exact path="/dashboard/add-services">
          <AddServices></AddServices>
        </PrivateRoute>

        <PrivateRoute isAdmin={true} exact path="/dashboard/make-admin">
          <MakeAdmin></MakeAdmin>
              </PrivateRoute>
          </HomeContext.Provider>
              
        </Switch>
        </Router>
        </UserContext.Provider>
      </>
  );
}

export default App;
