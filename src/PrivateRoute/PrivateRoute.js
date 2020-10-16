import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../App';



const PrivateRoute = ({ children, ...rest }) => {
console.log(rest.isAdmin)
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  
  let Authenticated = false;

  if (rest.isAdmin === true) {
    if (loggedInUser.isAuthenticated && loggedInUser.role === 1) {
      Authenticated = true;
    }
  } else {
    if (loggedInUser.isAuthenticated && loggedInUser.role === 0) {
      Authenticated = true;
    }
  }

     return (
    <Route
      {...rest}
      render={({ location }) =>
        Authenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;