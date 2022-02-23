import { useForm, Controller } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

import { Overlay, Container, TopContainer, BottomContainer, ButtonContainer } from "./styles"

import Input from "../Input"
import Select from "../SelectInput"
import Button from "../Button"
import axios from "axios"
import api from "../../services/api"

const UpdateTechnology = ({
    setUpdateTecnologyPopUp,
    technologyName,
    technologyStatus,
    setUserTechnologies,
    userTechnologies,
    token,
}) => {
    const updateSchema = yup.object().shape({
        title: yup.string().required("Campo obrigatório"),

        status: yup.object().shape({
            value: yup.string().required("Selecione uma opção"),
        }),
    })

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

    const updateTechnology = ({ title, status: { value } }) => {
        const data = { title, status: value }

        console.log(data)
    }
    const deleteTechnology = ({ title }) => {
        const foundTechnology = userTechnologies.find((technology) => technology.title === title)
        const id = foundTechnology.id

        api.delete(`/users/techs/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                const newTechnologies = userTechnologies.filter((technology) => technology !== foundTechnology)
                setUpdateTecnologyPopUp(false)
                setUserTechnologies(newTechnologies)
            })
            .catch((error) => console.log(error))
    }

    const isFormErrored = Object.keys(errors).length === 0

    return (
        <Overlay>
            <Container>
                <TopContainer>
                    <h3>Detalhes da Tecnologia</h3>
                    <button onClick={() => setUpdateTecnologyPopUp(false)}>X</button>
                </TopContainer>
                <BottomContainer>
                    <form>
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
                            render={({ field: { name, onChange } }) => (
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
                    </form>

                    <ButtonContainer>
                        <Button isActive={isFormErrored} value="update" onClick={handleSubmit(updateTechnology)}>
                            Salvar Alterações
                        </Button>
                        <Button
                            isActive={isFormErrored}
                            colorSchema="grey"
                            value="delete"
                            onClick={handleSubmit(deleteTechnology)}
                        >
                            Excluir
                        </Button>
                    </ButtonContainer>
                </BottomContainer>
            </Container>
        </Overlay>
    )
}

export default UpdateTechnology
