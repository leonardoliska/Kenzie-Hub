import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import GlobalStyle from "./styles/GlobalStyle"
import Routes from "./routes"
import "react-toastify/dist/ReactToastify.css"

function App() {
    return (
        <BrowserRouter>
            <ToastContainer />
            <GlobalStyle />
            <Routes />
        </BrowserRouter>
    )
}

export default App
