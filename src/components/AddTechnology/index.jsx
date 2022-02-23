import { useForm, Controller } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react"

import { Overlay, Container, TopContainer, BottomContainer } from "./styles"

import Input from "../Input"
import Select from "../SelectInput"
import Button from "../Button"

import api from "../../services/api"

const AddTechnology = ({ setAddTecnologyPopUp, userTechnologies, setUserTechnologies }) => {
    const [token] = useState(localStorage.getItem("@kenziehub: token") || "")

    const formSchema = yup.object().shape({
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
    } = useForm({ resolver: yupResolver(formSchema) })

    const handleTechnology = ({ title, status: { value } }) => {
        const data = { title, status: value }

        api.post("/users/techs", data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                setUserTechnologies([...userTechnologies, response.data])
                setAddTecnologyPopUp(false)
            })
            .catch((error) => console.log(error))
    }

    const isFormErrored = Object.keys(errors).length === 0

    return (
        <Overlay>
            <Container onSubmit={handleSubmit(handleTechnology)}>
                <TopContainer>
                    <h3>Cadastrar Tecnologia</h3>
                    <button onClick={() => setAddTecnologyPopUp(false)}>X</button>
                </TopContainer>
                <BottomContainer>
                    <Input
                        label="Nome"
                        name="title"
                        placeholder="Nome da tecnologia"
                        register={register}
                        error={errors.title}
                    />
                    <Controller
                        control={control}
                        name="status"
                        render={({ field: { name, value, onChange } }) => (
                            <Select
                                label="Selecionar Status"
                                name={name}
                                value={value}
                                error={errors.status?.value}
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
                    <Button isActive={isFormErrored}>Cadastrar Tecnologia</Button>
                </BottomContainer>
            </Container>
        </Overlay>
    )
}

export default AddTechnology
