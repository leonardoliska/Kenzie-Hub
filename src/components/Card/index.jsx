import Container from "./styles"

const Card = ({ status, title, setUpdateTecnologyPopUp, setTechnologyName, setTechnologyStatus }) => {
    return (
        <Container
            onClick={() => {
                setUpdateTecnologyPopUp(true)
                setTechnologyName(title)
                setTechnologyStatus(status)
            }}
        >
            <h3>{title}</h3>
            <span>{status}</span>
        </Container>
    )
}

export default Card
