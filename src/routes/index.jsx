import { Switch, Route } from "react-router-dom"

import Dashboard from "../pages/Dashboard"
import Login from "../pages/Login"
import Register from "../pages/Register"

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Dashboard />
            </Route>

            <Route exact path="/login">
                <Login />
            </Route>

            <Route exact path="/register">
                <Register />
            </Route>
        </Switch>
    )
}
export default Routes
