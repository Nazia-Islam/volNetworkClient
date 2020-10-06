import React, { useState } from 'react';
import EventTask from '../EventTask/EventTask';
import { myUserContext } from '../../App';
import { Route, Redirect } from 'react-router-dom';

const PrivateRouteUser = ({children, ...rest}) => {
    const [loggedInUser, setLoggedInUser] = useState(myUserContext);

    return (
         <Route
        {...rest}
        render={({location}) =>
          loggedInUser.email ? (
            <EventTask /> 
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

export default PrivateRouteUser;