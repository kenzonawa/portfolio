import React from "react"
import PropTypes from "prop-types"
//import { navigate } from "gatsby"
import { isLoggedIn } from "../services/auth"
import { Redirect } from "@reach/router"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (!isLoggedIn() && location.pathname !== `/app/login`) {
    // If we’re not logged in, redirect to the home page.
    // navigate(`/app/login`)

    return <Redirect to={`/app/login/`} />
  }

  return <Component {...rest} />
}

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
}

export default PrivateRoute
