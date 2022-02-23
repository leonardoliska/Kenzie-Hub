import { useForm, Controller } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

import { Overlay, Container, TopContainer, BottomContainer, ButtonContainer } from "./styles"

import Input from "../Input"
import Select from "../SelectInput"
import Button from "../Button"

const UpdateCardComponent = ({ setUpdateTecnology }) => {
    const updateSchema = yup.object().shape({
        name: yup.string().required("Campo obrigatório"),

        module: yup.object().shape({
            value: yup.string().required("Selecione uma opção"),
        }),
    })

    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = useForm({ resolver: yupResolver(updateSchema) })

    const handleTechnology = ({ name, module: { value } }, event) => {
        const updateOption = event.nativeEvent.submitter.value
        const data = { name, value }
    }

    const isFormErrored = Object.keys(errors).length === 0

    return (
        <Overlay>
            <Container onSubmit={handleSubmit(handleTechnology)}>
                <TopContainer>
                    <h3>Detalhes da Tecnologia</h3>
                    <button onClick={() => setUpdateTecnology(false)}>X</button>
                </TopContainer>
                <BottomContainer>
                    <Input
                        label="Nome"
                        name="name"
                        placeholder="Nome da tecnologia"
                        register={register}
                        error={errors.name}
                    />
                    <Controller
                        control={control}
                        name="module"
                        render={({ field: { name, value, onChange } }) => (
                            <Select
                                label="Selecionar Status"
                                name={name}
                                value={value}
                                error={errors.module?.value}
                                onChange={onChange}
                            />
                        )}
                    />
                    <ButtonContainer>
                        <Button isActive={isFormErrored} value="update">
                            Salvar Alterações
                        </Button>
                        <Button isActive={isFormErrored} colorSchema="grey" value="delete">
                            Excluir
                        </Button>
                    </ButtonContainer>
                </BottomContainer>
            </Container>
        </Overlay>
    )
}

export default UpdateCardComponent
