import { Overlay, Container, TopContainer, BottomContainer, ButtonContainer } from "./styles"

import Input from "../Input"
import SelectInput from "../SelectInput"
import Button from "../Button"
import { useState } from "react"

const UpdateCardComponent = ({ setUpdateTecnology }) => {
    const [inputValue, setInputValue] = useState("")
    const [selectValue, setSelectValue] = useState("")

    const isInputEmpty = !!inputValue && !!selectValue

    return (
        <Overlay>
            <Container>
                <TopContainer>
                    <h3>Detalhes da Tecnologia</h3>
                    <button onClick={() => setUpdateTecnology(false)}>X</button>
                </TopContainer>
                <BottomContainer>
                    <Input label="Nome do Projeto" setInputValue={setInputValue} value={inputValue} />
                    <SelectInput label="Selecionar Status" setSelectValue={setSelectValue} />
                    <ButtonContainer>
                        <Button isActive={isInputEmpty}>Salvar Alterações</Button>
                        <Button isActive={isInputEmpty} colorSchema="grey">
                            Excluir
                        </Button>
                    </ButtonContainer>
                </BottomContainer>
            </Container>
        </Overlay>
    )
}

export default UpdateCardComponent
