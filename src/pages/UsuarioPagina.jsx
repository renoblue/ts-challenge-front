import {useEffect} from "react";
import {UsuarioCard} from "../components/UsuarioCard.jsx";
import {useUsuarios} from "../context/UsuarioProvider.jsx";

export const UsuarioPagina = () => {


    const {state, cargarUsuarios} = useUsuarios();

    useEffect(() => {
        cargarUsuarios();
    }, []);

    const renderizarMain = () => {

        if(state.length === 0) return <h1>No hay usuarios</h1>
        return state.map(( usr) => <UsuarioCard user={usr} key={usr.id}/>)
    }

    return (
        <div>
            { renderizarMain()}
        </div>


    )

}