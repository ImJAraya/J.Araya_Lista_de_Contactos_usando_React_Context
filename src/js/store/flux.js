const getState = ({ getStore, getActions, setStore }) => {
	
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: async () => {
				try {
					let response = await fetch("https://playground.4geeks.com/contact/agendas/J.Araya/contacts")
					if (response.status === 404) {
						const crearUsuario = await fetch("https://playground.4geeks.com/contact/agendas/J.Araya", {
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
		
							body: JSON.stringify([]),
						});
					}
					response = await fetch("https://playground.4geeks.com/contact/agendas/J.Araya/contacts")
					if (!response.ok)
						throw new Error("Algo salio mal")
					const data = await response.json()
					setStore({ ...getStore(), demo: data.contacts })
				} catch (error) {
					console.error("Algo salio mal", error)
				}

			},
			postContacto: async (name, phone, email, address) => {
				
				try {
					let response = await fetch("https://playground.4geeks.com/contact/agendas/J.Araya/contacts", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							"name": name,
							"phone": phone,
							"email": email,
							"address": address
						})
					})
					if (!response.ok)
						throw new Error("Algo salio mal")
					const data = await response.json()
					setStore({ ...getStore(), demo: [...getStore().demo, data] })
				} catch (error) {
					console.error("Algo salio mal", error)
				}

			},
			putContacto: async (id, contactoOriginal, dataActualizada) => {

				const contactoActualizado = {...contactoOriginal, ...dataActualizada}
				try {
					let response = await fetch(`https://playground.4geeks.com/contact/agendas/J.Araya/contacts/${id}`, {
						method: "PUT",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(
							contactoActualizado
						)
					})
					if (!response.ok)
						throw new Error("Algo salio mal")
					const data = await response.json()
					getActions().loadSomeData()
				} catch (error) {
					console.error("Algo salio mal", error)
				}

			},
			deleteContacto: async (id) => {
				try {
					let response = await fetch(`https://playground.4geeks.com/contact/agendas/J.Araya/contacts/${id}`, {
						method: "DELETE",
						headers: {
							"Content-Type": "application/json"
						},

					})
					if (!response.ok)
						throw new Error("Algo salio mal")
					getActions().loadSomeData()
				} catch (error) {
					console.error("Algo salio mal", error)
				}

			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
