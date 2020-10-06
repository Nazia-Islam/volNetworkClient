import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { myUserContext } from '../../App';
import AdminPanel from '../AdminPanel/AdminPanel';


const PrivateRouteAdmin = ({children, ...rest}) => {
    const [loggedInUser, setLoggedInUser] = useState(myUserContext);

    return (
        <Route
        {...rest}
        render={({location}) =>
          loggedInUser.email ? (
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

export default PrivateRouteAdmin;