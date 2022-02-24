import { useForm, Controller } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { Redirect, useHistory } from "react-router-dom"

import { Container, Nav } from "./styles"

import Select from "../../components/SelectInput"
import Button from "../../components/Button"
import Input from "../../components/Input"

import api from "../../services/api"

const Register = ({ isAuthenticated }) => {
    const registerSchema = yup.object().shape({
        name: yup.string().required("Campo obrigatório"),

        email: yup.string().required("Campo obrigatório").email("Email invalido"),

        password: yup.string().required("Campo obrigatório").min(8, "A senha precisa conter pelo menos 8 caracteres"),

        passwordConfirm: yup
            .string()
            .required("Campo obrigatório")
            .oneOf([yup.ref("password"), null], "As senhas precisam ser iguais"),

        course_module: yup.object().shape({
            value: yup.string().required("Selecione uma opção"),
        }),
    })

    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = useForm({ resolver: yupResolver(registerSchema) })

    const history = useHistory()

    const registerUser = ({ name, email, password, course_module: { value } }) => {
        const data = {
            name,
            email,
            password,
            course_module: value,
            bio: "null",
            contact: "null",
        }

        api.post("/users", data)
            .then((response) => history.push("/login"))
            .catch((error) => console.log(error))
    }

    const isFormErrored = Object.keys(errors).length === 0

    if (isAuthenticated) {
        return <Redirect to="/" />
    }

    return (
        <>
            <Nav buttonName="Voltar" />
            <Container onSubmit={handleSubmit(registerUser)}>
                <h2>Crie sua conta</h2>
                <span>Rápido e grátis, vamos nessa!</span>
                <Input
                    name="name"
                    label="Nome"
                    type="text"
                    placeholder="Digite seu nome"
                    register={register}
                    error={errors.name}
                />
                <Input
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="Digite seu e-mail"
                    register={register}
                    error={errors.email}
                />
                <Input
                    name="password"
                    label="Senha"
                    type="password"
                    placeholder="Digite sua senha"
                    register={register}
                    error={errors.password}
                />
                <Input
                    name="passwordConfirm"
                    label="Confirmar Senha"
                    type="password"
                    placeholder="Confirme sua senha"
                    register={register}
                    error={errors.passwordConfirm}
                />
                <Controller
                    control={control}
                    name="course_module"
                    render={({ field: { name, value, onChange } }) => (
                        <Select
                            label="Selecionar Módulo"
                            name={name}
                            value={value}
                            error={errors.module?.value}
                            options={[
                                {
                                    value: "Primeiro Módulo - Introdução ao Front-End",
                                    label: "Primeiro Módulo - Introdução ao Front-End",
                                },
                                {
                                    value: "Segundo Módulo - Front-End Intermediário",
                                    label: "Segundo Módulo - Front-End Intermediário",
                                },
                                {
                                    value: "Terceiro Módulo - Front-End Avançado",
                                    label: "Terceiro Módulo - Front-End Avançado",
                                },
                                {
                                    label: "Quarto Módulo - Introdução ao Back-End",
                                    value: "Quarto Módulo - Introdução ao Back-End",
                                },
                                {
                                    value: "Quinto Módulo - Back-End Avançado",
                                    label: "Quinto Módulo - Back-End Avançado",
                                },
                                {
                                    value: "Sexto Módulo - Inclusão no Mercado",
                                    label: "Sexto Módulo - Inclusão no Mercado",
                                },
                            ]}
                            onChange={onChange}
                        />
                    )}
                />
                <Button isActive={isFormErrored} type="submit">
                    Cadastrar
                </Button>
            </Container>
        </>
    )
}

export default Register
