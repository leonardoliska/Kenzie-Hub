import Container from "./styles"

const Card = ({ setUpdateTecnologyPopUp }) => {
    return (
        <Container onClick={() => setUpdateTecnologyPopUp(true)}>
            <h3>Material Ui</h3>
            <span>Intermediario</span>
        </Container>
    )
}

export default Card
