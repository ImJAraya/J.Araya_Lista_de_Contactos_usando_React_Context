import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";

import { Context } from "../store/appContext";
import Card from "../component/Card.jsx";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../component/navbar.js";

export const Home = () => {
	const navigate = useNavigate();

	const { store, actions } = useContext(Context);
	const [index, setIndex] = useState(null)
	const [modal, setModal] = useState(false)
	


	let contactoActual = store.demo[index]

	const handlerEditar = (index) => {
		navigate(`/EditarContact/${index}`)
	}

	useEffect(() => {
		actions.loadSomeData()
	}, [])
	return (
		<div>
			<Navbar />
			{store.demo.length<1 &&(

				<h1><strong>No hay contactos</strong></h1>
			)}
			<div className="d-flex flex-column gap-3">
				{modal && (
					<>
						<div
							className="modal fade show"
							tabIndex="-1"
							role="dialog"
							style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
							onClick={() => setModal(false)}
						>
							<div
								className="modal-dialog"
								role="document"
								onClick={(e) => e.stopPropagation()} // evitar que cerrar cuando hacés clic dentro
							>
								<div className="modal-content">
									<div className="modal-header">
										<h5 className="modal-title">Seguro que desea eliminar al contacto?</h5>
										<button
											type="button"
											className="btn-close"
											onClick={() => setModal(false)}
										></button>
									</div>
									<div className="modal-body d-flex gap-3">
										<div  >
											<img className="imagenRedonda" src="https://picsum.photos/200" />
										</div>
										<div>
											<p>{contactoActual.name}</p>
											<p>{contactoActual.phone}</p>
											<p>{contactoActual.address}</p>
											<p>{contactoActual.email}</p>
										</div>

									</div>
									<div className="modal-footer">
										{/* <button
										type="button"
										className="btn btn-secondary"
										onClick={() => setModal(false) }
									>
										Close
									</button>
									<button type="button" className="btn btn-primary">
										Save changes
									</button> */}
										<button
											className="btn btn-danger"
											onClick={() => {
												actions.deleteContacto(contactoActual.id);
												setModal(false)
											}}>
											Eliminar usuario
										</button>
									</div>
								</div>
							</div>
						</div>
					</>
				)}

				{store.demo.map((ele, index) => (
					<Card
						foto={"https://picsum.photos/200"}
						key={index}
						telefono={ele.phone}
						nombre={ele.name}
						direccion={ele.address}
						email={ele.email}
						onClick={() => {
						}}
						onClickEliminar={() => {
							setIndex(index)
							setModal(true)

						}}
						onClickEditar={() => handlerEditar(index)}
					/>
				))}
			</div>
		</div>

	)
};
