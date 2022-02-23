import { Container } from "./styles"

import { useState } from "react"

import SmallButton from "../../components/SmallButton"
import Card from "../../components/Card"
import Header from "../../components/Header"
import Navbar from "../../components/Navbar"
import UpdateTechnology from "../../components/UpdateTechnology"
import AddTechnology from "../../components/AddTechnology"

const Dashboard = () => {
    const [addTecnologyPopUp, setAddTecnologyPopUp] = useState(false)
    const [updateTecnologyPopUp, setUpdateTecnologyPopUp] = useState(false)

    return (
        <Container>
            {addTecnologyPopUp && <AddTechnology setAddTecnologyPopUp={setAddTecnologyPopUp} />}
            {updateTecnologyPopUp && <UpdateTechnology setUpdateTecnologyPopUp={setUpdateTecnologyPopUp} />}
            <Navbar />
            <Header />
            <aside>
                <h3>Tecnologias</h3>
                <SmallButton icon onClick={() => setAddTecnologyPopUp(true)}>
                    +
                </SmallButton>
            </aside>
            <main>
                <Card setUpdateTecnologyPopUp={setUpdateTecnologyPopUp}></Card>
                <Card setUpdateTecnologyPopUp={setUpdateTecnologyPopUp}></Card>
                <Card setUpdateTecnologyPopUp={setUpdateTecnologyPopUp}></Card>
            </main>
        </Container>
    )
}

export default Dashboard
