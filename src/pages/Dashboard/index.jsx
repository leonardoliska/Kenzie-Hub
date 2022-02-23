import { Container } from "./styles"

import { useState } from "react"

import SmallButton from "../../components/SmallButton"
import Card from "../../components/Card"
import Header from "../../components/Header"
import Navbar from "../../components/Navbar"
import UpdateTechnology from "../../components/UpdateTechnology"
import AddTechnology from "../../components/AddTechnology"
import { useEffect } from "react"
import api from "../../services/api"

const Dashboard = () => {
    const [addTecnologyPopUp, setAddTecnologyPopUp] = useState(false)
    const [updateTecnologyPopUp, setUpdateTecnologyPopUp] = useState(false)
    const [technologyName, setTechnologyName] = useState("")
    const [technologyStatus, setTechnologyStatus] = useState("")
    const [userTechnologies, setUserTechnologies] = useState([])

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("@kenziehub: user")) || ""
        const userId = user.id

        api.get(`/users/${userId}`).then((response) => setUserTechnologies(response.data.techs))
    }, [])

    return (
        <Container>
            {addTecnologyPopUp && (
                <AddTechnology
                    setAddTecnologyPopUp={setAddTecnologyPopUp}
                    setUserTechnologies={setUserTechnologies}
                    userTechnologies={userTechnologies}
                />
            )}

            {updateTecnologyPopUp && (
                <UpdateTechnology
                    setUpdateTecnologyPopUp={setUpdateTecnologyPopUp}
                    technologyName={technologyName}
                    technologyStatus={technologyStatus}
                />
            )}
            <Navbar />
            <Header />
            <aside>
                <h3>Tecnologias</h3>
                <SmallButton icon onClick={() => setAddTecnologyPopUp(true)}>
                    +
                </SmallButton>
            </aside>

            {!!userTechnologies && (
                <main>
                    {userTechnologies.map((technology) => (
                        <Card
                            key={technology.id}
                            title={technology.title}
                            status={technology.status}
                            setUpdateTecnologyPopUp={setUpdateTecnologyPopUp}
                            setTechnologyName={setTechnologyName}
                            setTechnologyStatus={setTechnologyStatus}
                        />
                    ))}
                </main>
            )}
        </Container>
    )
}

export default Dashboard
