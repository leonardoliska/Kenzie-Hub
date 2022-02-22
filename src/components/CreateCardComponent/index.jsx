import { Overlay, Container, TopContainer, BottomContainer } from "./styles"

import Input from "../Input"
import SelectInput from "../SelectInput"
import Button from "../Button"
import { useState } from "react"

const CreateCardComponent = ({ setAddTecnology }) => {
    const [inputValue, setInputValue] = useState("")
    const [selectValue, setSelectValue] = useState("")

    const isInputEmpty = !!inputValue && !!selectValue

    return (
        <Overlay>
            <Container>
                <TopContainer>
                    <h3>Cadastrar Tecnologia</h3>
                    <button onClick={() => setAddTecnology(false)}>X</button>
                </TopContainer>
                <BottomContainer>
                    <Input label="Nome" setInputValue={setInputValue} value={inputValue} />
                    <SelectInput label="Selecionar Status" setSelectValue={setSelectValue} />
                    <Button isActive={isInputEmpty}>Cadastrar Tecnologia</Button>
                </BottomContainer>
            </Container>
        </Overlay>
    )
}

export default CreateCardComponent
