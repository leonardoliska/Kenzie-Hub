import { Container, HeaderContainer } from "./styles"

import Button from "../../components/Button"
import Input from "../../components/Input"

const Login = () => {
    return (
        <>
            <HeaderContainer>
                <h2>Kenzie Hub</h2>
            </HeaderContainer>
            <Container>
                <h2>Login</h2>
                <Input label="Email" type="email" placeholder="Digite seu e-mail" />
                <Input label="Password" type="password" placeholder="Digite sua senha" />
                <Button>Entrar</Button>
                <span>Ainda não possui uma conta?</span>
                <Button colorSchema="grey">Cadastrar</Button>
            </Container>
        </>
    )
}

export default Login
