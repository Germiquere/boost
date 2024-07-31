import { Outlet } from "react-router-dom"
import { Header } from "./components/Header"

function App() {

	return (
        <>
        <Header/>
        <main>
            <h1>BOOST TEST</h1>
            <Outlet/>
        </main>
        </>
    )
}

export default App
