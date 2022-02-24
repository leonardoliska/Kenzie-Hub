import Container from "./styles"

const Header = () => {
    const { name, course_module } = JSON.parse(localStorage.getItem("@kenziehub: user")) || ""

    if (!name) {
        localStorage.setItem("@kenziehub: token", "")
    }

    return (
        <Container>
            <h2>Olá, {name}</h2>
            <span>{course_module}</span>
        </Container>
    )
}

export default Header
