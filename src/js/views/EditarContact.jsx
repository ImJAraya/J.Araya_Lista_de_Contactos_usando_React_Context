import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


const EditarContact = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const { index } = useParams()
    const i = parseInt(index)
    let contactoActual = store.demo[i]
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [telefono, setTelefono] = useState("")

    const handlerClick = () => {
        let contactoEditado = {}
        if (nombre !== "")
            contactoEditado.name = nombre
        if (email !== "")
            contactoEditado.email = email
        if (address !== "")
            contactoEditado.address = address
        if (telefono !== "")
            contactoEditado.phone = telefono

        actions.putContacto(store.demo[i].id, contactoActual, contactoEditado);
        navigate("/");
    }

    return (
        <div className=" d-flex flex-column gap-3">
            <Link to="/">
                <span className="navbar-brand mb-0 h1">Home</span>
            </Link>
            <div className=" d-flex flex-column gap-3">
                <div className="d-flex gap-3">
                    <div  >
                        <img className="imagenRedonda" src="https://picsum.photos/200" />
                    </div>
                    <div>
                        <h1>{contactoActual.name}</h1>
                        <p>{contactoActual.phone}</p>
                        <p>{contactoActual.address}</p>
                        <p>{contactoActual.email}</p>
                    </div>
                </div>
                <form className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre" onChange={(e) => setNombre(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <div className="col-12">
                        <label htmlFor="numeroTelefono" className="form-label">Telefono</label>
                        <input type="number" className="form-control" id="numeroTelefono" placeholder="Numero de telefono" onChange={(e) => setTelefono(e.target.value)} />
                    </div>
                    <div className="col-12">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => handlerClick()}
                        >Editar contacto
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}
export default EditarContact