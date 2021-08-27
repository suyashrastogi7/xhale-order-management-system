import React from 'react'
import {
    Route,
    Redirect
  } from "react-router-dom";
import cookie from 'react-cookies'


const WithAuth = ({ component: Comp, path, ...rest}) => {
    return (
        <Route
          {...rest}
          path={path}
          render={(props) => {
            return Boolean(cookie.load('user')) ? <Comp {...rest} {...props} /> : <Redirect to="/login" />;
          }}
        />
    );
};

export default WithAuth;