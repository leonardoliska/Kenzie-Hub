import { useForm, Controller } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

import { Overlay, Container, TopContainer, BottomContainer, ButtonContainer } from "./styles"

import Input from "../Input"
import Select from "../SelectInput"
import Button from "../Button"

const UpdateTechnology = ({ setUpdateTecnologyPopUp, technologyName, technologyStatus }) => {
    const updateSchema = yup.object().shape({
        title: yup.string().required("Campo obrigatório"),

        status: yup.object().shape({
            value: yup
                .string()
                .required("Selecione uma opção")
                .notOneOf([technologyStatus], "Selecione uma opção diferente da atual"),
        }),
    })

    console.log(technologyStatus)

    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(updateSchema),
        defaultValues: {
            title: technologyName,
            status: { value: technologyStatus, label: technologyStatus },
        },
    })

    const handleTechnology = ({ title, status: { value } }, event) => {
        const updateOption = event.nativeEvent.submitter.value
        const data = { title, status: value }

        console.log(data)
    }

    const isFormErrored = Object.keys(errors).length === 0

    return (
        <Overlay>
            <Container onSubmit={handleSubmit(handleTechnology)}>
                <TopContainer>
                    <h3>Detalhes da Tecnologia</h3>
                    <button onClick={() => setUpdateTecnologyPopUp(false)}>X</button>
                </TopContainer>
                <BottomContainer>
                    <Input
                        label="Nome"
                        name="title"
                        placeholder="Nome da tecnologia"
                        register={register}
                        error={errors.title}
                        disabled
                    />
                    <Controller
                        control={control}
                        name="status"
                        render={({ field: { name, value, onChange } }) => (
                            <Select
                                label="Selecionar Status"
                                name={name}
                                error={errors.status?.value}
                                defaultValue={{ value: technologyStatus, label: technologyStatus }}
                                onChange={onChange}
                                options={[
                                    {
                                        value: "Iniciante",
                                        label: "Iniciante",
                                    },
                                    {
                                        value: "Intermediário",
                                        label: "Intermediário",
                                    },
                                    {
                                        value: "Avançado",
                                        label: "Avançado",
                                    },
                                ]}
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

export default UpdateTechnology
