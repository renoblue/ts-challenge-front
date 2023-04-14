import { Link} from "react-router-dom";

export const Navbar = () => {
    return(
        <div>
            <h1>React MySql</h1>

            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/new">Crear Usuario</Link>
                </li>
            </ul>
        </div>
    )
}