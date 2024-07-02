"use client";
// import { toast } from "react-toastify";
import axios from "axios";

export default function HomePage() {
	const handleChange = async () => {
		let response = await axios.post(
			`${process.env.NEXT_PUBLIC_URL_BACKEND}/usuarios/perfilCiclista`,
			{
				params: {
					idusuario: localStorage.getItem("id"),
				},
			}
		);
		console.log(
			`URL: ${process.env.NEXT_PUBLIC_URL_BACKEND}/usuarios/perfilCiclista `,
			response
		);
		response = response.data;
	};

	//const notify = () => toast.error("Oops! Algo salio mal!");
	// const notificacion = () =>
	// 	toast.success("Se envio exitosamente la informacion");
	// const notify = () => toast.info("Informacion");
	return (
		<div>
			<button onClick={handleChange}>buton</button>
		</div>
	);
}
