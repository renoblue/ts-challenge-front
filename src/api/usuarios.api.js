import axios from "axios";

export const createUsuarioRequest = async (usuario) =>
    await axios.post('http://localhost:8000/api/usuarios', usuario);

export const getUsuarioRequest = async () =>
    await axios.get('http://localhost:8000/api/usuarios');

export const deleteUsuarioRequest = async (id) =>
    await axios.delete(`http://localhost:8000/api/usuarios/${id}`);

export const getUsuarioRequestById = async(id) =>
    await axios.get(`http://localhost:8000/api/usuarios/${id}`)

export const updateUsuarioRequest = async(id, newFields) =>
    await axios.put(`http://localhost:8000/api/usuarios/${id}`, newFields)