import { customStyles, Container } from "./styles"
import Select from "react-select"

const SelectInput = ({ label, error, ...rest }) => {
    const options = [
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" },
    ]

    return (
        <Container>
            <label>{label}</label>
            <Select styles={customStyles} placeholder="Selecione" options={options} {...rest} />
            {error && <span>{error.message}</span>}
        </Container>
    )
}

export default SelectInput
