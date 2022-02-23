import { Container } from "./styles"

import { useState } from "react"

import SmallButton from "../../components/SmallButton"
import Card from "../../components/Card"
import Header from "../../components/Header"
import Navbar from "../../components/Navbar"
import UpdateCardComponent from "../../components/UpdateCardComponent"
import AddTechnology from "../../components/AddTechnology"

const Dashboard = () => {
    const [addTecnologyPopUp, setAddTecnologyPopUp] = useState(false)
    const [updateTecnology, setUpdateTecnology] = useState(false)

    return (
        <Container>
            {addTecnologyPopUp && <AddTechnology setAddTecnologyPopUp={setAddTecnologyPopUp} />}
            {updateTecnology && <UpdateCardComponent setUpdateTecnology={setUpdateTecnology} />}
            <Navbar />
            <Header />
            <aside>
                <h3>Tecnologias</h3>
                <SmallButton icon onClick={() => setAddTecnologyPopUp(true)}>
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
