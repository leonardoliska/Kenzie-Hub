import Container from "./styles"

const Card = ({ setUpdateTecnology }) => {
    return (
        <Container onClick={() => setUpdateTecnology(true)}>
            <h3>Material Ui</h3>
            <span>Intermediario</span>
        </Container>
    )
}

export default Card
