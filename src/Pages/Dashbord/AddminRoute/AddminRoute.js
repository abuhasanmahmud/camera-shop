import React from "react";
import { Redirect, Route } from "react-router-dom";

import { CircularProgress } from "@mui/material";
import useFirebase from "../../../Hooks/useFirebase";

const AddminRoute = ({ children, ...rest }) => {
  const { user, loding } = useFirebase();
  if (loding) {
    return <CircularProgress />;
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AddminRoute;
