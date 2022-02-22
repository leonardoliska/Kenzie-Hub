import { Container } from "./styles"

import Button from "../../components/Button"
import SmallButton from "../../components/SmallButton"
import Card from "../../components/Card"
import Header from "../../components/Header"
import Navbar from "../../components/Navbar"
import UpdateCardComponent from "../../components/UpdateCardComponent"
import CreateCardComponent from "../../components/CreateCardComponent"

const Dashboard = () => {
    return (
        <Container>
            <Navbar />
            <Header />
            <aside>
                <h3>Tecnologias</h3>
                <SmallButton icon>+</SmallButton>
            </aside>
            <main>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </main>
        </Container>
    )
}

export default Dashboard
