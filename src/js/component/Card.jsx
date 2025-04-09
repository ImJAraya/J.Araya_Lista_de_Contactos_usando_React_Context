import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPen } from '@fortawesome/free-solid-svg-icons';


const Card = ({ foto, nombre, telefono, email, direccion, onClick, onClickEditar, onClickEliminar }) => {
    return (
        <div className="d-flex justify-content-between gap-3 p-2 " onClick={onClick}>
            <div className="d-flex  gap-3 ">
                <img src={foto} alt="" className="imagenRedonda" />
                <div>
                    <h1>{nombre}</h1>
                    <p>{direccion}</p>
                    <p>{telefono}</p>
                    <p>{email}</p>
                </div>
            </div>

            <div className="d-flex gap-3">
                <div onClick={onClickEditar}>
                    <FontAwesomeIcon icon={faPen} />
                </div>
                <div onClick={onClickEliminar}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
            </div>

        </div>
    )
}
export default Card