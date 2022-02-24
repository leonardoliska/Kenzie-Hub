import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { Redirect, useHistory } from "react-router-dom"

import { Container, HeaderContainer } from "./styles"

import Button from "../../components/Button"
import Input from "../../components/Input"

import api from "../../services/api"

const Login = ({ isAuthenticated, setIsAuthenticated }) => {
    const loginSchema = yup.object().shape({
        email: yup.string().required("Campo obrigatório"),

        password: yup.string().required("Campo obrigatório"),
    })

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({ resolver: yupResolver(loginSchema) })

    const history = useHistory()

    const handleLogin = (data) => {
        api.post("/sessions", data)
            .then((response) => {
                localStorage.setItem("@kenziehub: token", response.data.token)
                localStorage.setItem("@kenziehub: user", JSON.stringify(response.data.user))
                setIsAuthenticated(true)
                history.push("/")
            })
            .catch((error) => console.log(error))
    }

    const isFormErrored = Object.keys(errors).length === 0

    if (isAuthenticated) {
        return <Redirect to="/" />
    }

    return (
        <>
            <HeaderContainer>
                <h2>Kenzie Hub</h2>
            </HeaderContainer>
            <Container onSubmit={handleSubmit(handleLogin)}>
                <h2>Login</h2>
                <Input
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Digite seu e-mail"
                    register={register}
                    error={errors.email}
                />
                <Input
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Digite sua senha"
                    register={register}
                    error={errors.password}
                />
                <Button isActive={isFormErrored} type="submit">
                    Entrar
                </Button>
                <span>Ainda não possui uma conta?</span>
                <Button colorSchema="grey" type="button" onClick={() => history.push("/register")}>
                    Cadastrar
                </Button>
            </Container>
        </>
    )
}

export default Login
