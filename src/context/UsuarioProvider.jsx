import {createContext, useContext, useState} from "react";
import {
    createUsuarioRequest,
    deleteUsuarioRequest,
    getUsuarioRequest,
    getUsuarioRequestById, updateUsuarioRequest
} from "../api/usuarios.api.js";
import {UsuarioContext} from "./UsuarioContext.jsx";

export const useUsuarios = () => {
    const context = useContext(UsuarioContext);

    if (context === undefined) {
        throw new Error("useUsuarios debe ser usado con un UsuarioContextProvider")
    }
    return context
};

export const UsuarioContextProvider = ({children}) => {

    const [state, setState] = useState([]);

    const cargarUsuarios = async () => {
        const respuesta = await getUsuarioRequest();
        setState(respuesta.data);
    }

    const deleteUsuarios = async (id) => {

        try {
            const response = await deleteUsuarioRequest(id);
            setState(state.filter(usr => usr.id !== id));
        } catch (e) {
            console.error(e);
        }

    }

    const createUsuarios = async (user) => {
        try {
            const response = await createUsuarioRequest(user);
            //setState([...state, response.data]);
        } catch (error) {
            console.error(error);
        }
    }

    const getUsuario = async (id) => {
        try {
            const response = await getUsuarioRequestById(id);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    const updateUsuario = async (id, newFields) => {
        try {
            const response = await updateUsuarioRequest(id, newFields);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <UsuarioContext.Provider value={{
            state,
            cargarUsuarios,
            deleteUsuarios,
            createUsuarios,
            getUsuario,
            updateUsuario
        }}>
            {children}
        </UsuarioContext.Provider>
    )

};