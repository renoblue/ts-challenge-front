import {useUsuarios} from "../context/UsuarioProvider.jsx";
import {useNavigate} from "react-router-dom";

export const UsuarioCard = ({usr}) => {

    const {deleteUsuarios} = useUsuarios();
    const navigate = useNavigate();

    return (
        <div>
            <h2>{usr.nombre}</h2>
            <p>{usr.email}</p>
            <button onClick={() => deleteUsuarios(usr.id)}>
                Delete
            </button>
            <button onClick={() => navigate(`/edit/${usr.id}`)}>
                Editar
            </button>
        </div>
    )
}