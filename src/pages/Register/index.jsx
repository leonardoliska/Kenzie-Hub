import { Container, Nav } from "./styles"

import Button from "../../components/Button"
import Input from "../../components/Input"
import Select from "../../components/SelectInput"

const Register = () => {
    return (
        <>
            <Nav />
            <Container>
                <h2>Crie sua conta</h2>
                <span>Rápido e grátis, vamos nessa!</span>
                <Input label="Nome" type="text" placeholder="Digite seu nome" />
                <Input label="Email" type="email" placeholder="Digite seu e-mail" />
                <Input label="Senha" type="password" placeholder="Digite sua senha" />
                <Input label="Confirmar Senha" type="password" placeholder="Confirme sua senha" />
                <Select label="Selecionar Módulo" />
                <Button>Cadastrar</Button>
            </Container>
        </>
    )
}

export default Register
