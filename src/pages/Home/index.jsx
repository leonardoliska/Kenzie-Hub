import {} from "./styles"

import Button from "../../components/Button"
import SmallButton from "../../components/SmallButton"
import Input from "../../components/Input"
import Select from "../../components/SelectInput"
import Card from "../../components/Card"
import Header from "../../components/Header"
import Navbar from "../../components/Navbar"

const Home = () => {
    return (
        <>
            <Button>Botão</Button>
            <SmallButton>Botão</SmallButton>
            <SmallButton icon>+</SmallButton>
            <Input label="Nome" placeholder="Nome" />
            <Input label="Senha" type="password" placeholder="Senha" />
            <Select label="teste" />
            <Card></Card>
            <Navbar></Navbar>
            <Header></Header>
        </>
    )
}

export default Home
