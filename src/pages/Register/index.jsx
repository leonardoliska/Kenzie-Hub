import { useForm, Controller } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

import { Container, Nav } from "./styles"

import Select from "../../components/SelectInput"
import Button from "../../components/Button"
import Input from "../../components/Input"

const Register = () => {
    const registerSchema = yup.object().shape({
        name: yup.string().required("Campo obrigatório"),

        email: yup.string().required("Campo obrigatório").email("Email invalido"),

        password: yup.string().required("Campo obrigatório").min(8, "A senha precisa conter pelo menos 8 caracteres"),

        passwordConfirm: yup
            .string()
            .required("Campo obrigatório")
            .oneOf([yup.ref("password"), null], "As senhas precisam ser iguais"),

        module: yup.object().shape({
            value: yup.string().required("Campo obrigatório"),
        }),
    })

    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = useForm({ resolver: yupResolver(registerSchema) })

    const registerUser = (data) => {
        console.log(data)
    }

    const isFormErrored = Object.keys(errors).length === 0

    return (
        <>
            <Nav />
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
                    name="module"
                    render={({ field: { name, value, onChange } }) => (
                        <Select
                            label="Selecionar Módulo"
                            name={name}
                            value={value}
                            error={errors.module?.value}
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
