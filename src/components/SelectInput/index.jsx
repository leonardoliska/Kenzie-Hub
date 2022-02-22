import { customStyles, Container } from "./styles"
import Select from "react-select"

const SelectInput = ({ label, setSelectValue }) => {
    const options = [
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" },
    ]

    return (
        <Container>
            <label>{label}</label>
            <Select styles={customStyles} options={options} onChange={(e) => setSelectValue(e.value)} />
        </Container>
    )
}

export default SelectInput
