import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout/layout"
import PrivateRoute from "../components/PrivateRoute"
import Intuit from "../components/Cases/Intuit"
import Login from "../components/Login/Login"
import TTLive from "./ttlive"

const App = () => (
  <Router>
    <PrivateRoute path="/app/intuit" component={Intuit} />
    <PrivateRoute path="/app/ttlive" component={TTLive} />
    <Login path="/app/login" />
  </Router>
)
export default App
