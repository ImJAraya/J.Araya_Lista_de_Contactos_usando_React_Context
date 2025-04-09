import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


import { Context } from "../store/appContext";

const AddContact = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [telefono, setTelefono] = useState("")

    const handlerClick = () => {
        actions.postContacto(nombre, telefono, email, address);
        navigate("/");
    }
    return (
        <div className=" d-flex flex-column gap-3">
            <Link to="/">
                <span className="navbar-brand mb-0 h1">Home</span>
            </Link>
            <div>
                <h1><strong>Ingrese los datos del contacto</strong></h1>
            </div>
            <div>
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
                        >Guardar contacto
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}
export default AddContact