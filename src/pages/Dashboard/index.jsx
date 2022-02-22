import { Container } from "./styles"

import Button from "../../components/Button"
import SmallButton from "../../components/SmallButton"
import Card from "../../components/Card"
import Header from "../../components/Header"
import Navbar from "../../components/Navbar"
import UpdateCardComponent from "../../components/UpdateCardComponent"
import CreateCardComponent from "../../components/CreateCardComponent"
import { useState } from "react"

const Dashboard = () => {
    const [addTecnology, setAddTecnology] = useState(false)
    const [updateTecnology, setUpdateTecnology] = useState(false)

    return (
        <Container>
            {addTecnology && <CreateCardComponent setAddTecnology={setAddTecnology} />}
            {updateTecnology && <UpdateCardComponent setUpdateTecnology={setUpdateTecnology} />}
            <Navbar />
            <Header />
            <aside>
                <h3>Tecnologias</h3>
                <SmallButton icon onClick={() => setAddTecnology(true)}>
                    +
                </SmallButton>
            </aside>
            <main>
                <Card setUpdateTecnology={setUpdateTecnology}></Card>
                <Card setUpdateTecnology={setUpdateTecnology}></Card>
                <Card setUpdateTecnology={setUpdateTecnology}></Card>
            </main>
        </Container>
    )
}

export default Dashboard
