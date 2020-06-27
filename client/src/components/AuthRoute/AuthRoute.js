import React from "react";
import { Route } from "react-router-dom";
import { UserContext } from "../../utils/UserContext";

const { state } = React.useContext(UserContext);
const AuthRoute = ({
  authComponent: AuthComponent,
  unAuthComponent: UnAuthComponent,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      return state._id ? (
        <AuthComponent authedId={state._id} {...props} />
      ) : (
        <UnAuthComponent {...props} />
      );
    }}
  />
);

export default AuthRoute;
