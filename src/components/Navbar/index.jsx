import Container from "./styles"

import SmallButton from "../SmallButton"

import { useHistory } from "react-router-dom"

const Navbar = ({ className, setIsAuthenticated, buttonName = "Sair" }) => {
    const history = useHistory()
    return (
        <Container className={className}>
            <h1>Kenzie Hub</h1>
            <SmallButton
                onClick={() => {
                    localStorage.clear()
                    setIsAuthenticated?.(false)
                    history.push("/login")
                }}
            >
                {buttonName}
            </SmallButton>
        </Container>
    )
}

export default Navbar
