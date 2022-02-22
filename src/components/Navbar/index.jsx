import Container from "./styles"

import SmallButton from "../SmallButton"

const Navbar = ({ className }) => (
    <Container className={className}>
        <h1>Kenzie Hub</h1>
        <SmallButton>Sair</SmallButton>
    </Container>
)

export default Navbar
