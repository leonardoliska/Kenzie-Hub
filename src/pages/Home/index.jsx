import {} from "./styles"

import Button from "../../components/Button"
import SmallButton from "../../components/SmallButton"
import Input from "../../components/Input"
import Select from "../../components/SelectInput"

const Home = () => {
    return (
        <>
            <Button>Botão</Button>
            <SmallButton>Botão</SmallButton>
            <SmallButton icon>+</SmallButton>
            <Input label="Nome" placeholder="Nome" />
            <Input label="Senha" type="password" placeholder="Senha" />
            <Select label="teste" />
        </>
    )
}

export default Home
