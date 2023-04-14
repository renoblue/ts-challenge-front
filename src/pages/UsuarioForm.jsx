import {Form, Formik} from 'formik';
import {useUsuarios} from "../context/UsuarioProvider.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
export const UsuarioForm = () => {

    const { createUsuarios, getUsuario, updateUsuario } = useUsuarios();
    const [user, setUser] = useState({
        nombre: "",
        email: "",
    });
    const params = useParams();
    const navigate = useNavigate();


    useEffect(  () => {
       const cargarUsuarioById = async () => {
           if(params.id){
               const task = await getUsuario(params.id);
               setUser({
                   nombre: user.nombre,
                   email: user.email
               });
           }
       };

       cargarUsuarioById()
    }, [])


    return (
        <div>
            <h1>
                { params.id ? "Editar Usuario" : "Nuevo Usuario"}
            </h1>
            <Formik
                initialValues={user}
                enableReinitialize={true}
                onSubmit={async (values, actions) => {
                    console.log(values);


                    if(params.id){
                        await updateUsuario(params.id, values)
                        navigate("/");

                    }else{
                        await createUsuarios(values);

                    }

                    setUser({
                        nombre:"",
                        email: ""
                    });
                }}
            >
                {({handleChange, handleSubmit, values, isSubmitting}) => (
                    <Form onSubmit={handleSubmit}>
                        <label> title </label>
                        <input type="text"
                               name='nombre'
                               placeholder="Escriba un titulo"
                               onChange={handleChange}
                               value={values.nombre}
                        />

                        <label>description</label>
                        <textarea name="email"
                                  rows="3"
                                  placeholder="escriba una descripcion"
                                  onChange={handleChange}
                                  value={values.email}
                        ></textarea>

                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Saving..." : "Save"}
                        </button>
                    </Form>
                )}

            </Formik>
        </div>
    );
}