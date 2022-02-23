import Container from "./styles"

const Card = ({ setUpdateTecnologyPopUp, setTechnologyName, setTechnologyStatus }) => {
    return (
        <Container
            onClick={() => {
                setUpdateTecnologyPopUp(true)
                setTechnologyName("Material Ui")
                setTechnologyStatus("Intermediário")
            }}
        >
            <h3>Material Ui</h3>
            <span>Intermediário</span>
        </Container>
    )
}

export default Card
