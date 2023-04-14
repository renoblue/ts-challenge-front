import {Routes, Route} from "react-router-dom";
import {UsuarioForm} from "./pages/UsuarioForm.jsx";
import {NotFound} from "./pages/NotFound.jsx";
import {Navbar} from "./components/Navbar.jsx";
import {UsuarioPagina} from "./pages/UsuarioPagina.jsx";
import {UsuarioContextProvider} from "./context/UsuarioProvider.jsx";


function App() {

    return (

        <UsuarioContextProvider>
            <Navbar/>
            <Routes>
                <Route path="/" element={<UsuarioPagina/>}/>
                <Route path="/new" element={<UsuarioForm/>}/>
                <Route path="/edit/:id" element={<UsuarioForm/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </UsuarioContextProvider>


    );
}

export default App
