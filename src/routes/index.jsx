import { useEffect } from "react"
import { useState } from "react"
import { Switch, Route } from "react-router-dom"

import Dashboard from "../pages/Dashboard"
import Login from "../pages/Login"
import Register from "../pages/Register"

const Routes = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem("@kenziehub: token")

        if (token) {
            setIsAuthenticated(true)
        }
    }, [isAuthenticated])

    return (
        <Switch>
            <Route exact path="/">
                <Dashboard isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
            </Route>

            <Route exact path="/login">
                <Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
            </Route>

            <Route exact path="/register">
                <Register isAuthenticated={isAuthenticated} />
            </Route>
        </Switch>
    )
}
export default Routes
