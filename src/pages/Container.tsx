import React, { ChangeEvent, useState } from "react";
import styles from "./container.module.css";
import { Input } from "../components/Input";

const Container: React.FC = () => {
	const [form, setForm] = useState({
		name: "",
		age: "",
		city: "",
		email: "",
		image: "",
	});

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		console.log(name, value);

		// update the state of the form with the new value
		setForm({
			...form,
			[name]: value,
		});
	};

	return (
		<div className={styles.container__principal}>
			<form className={styles.form} onSubmit={(e) => e.preventDefault()}>
				<Input
					type="text"
					placeholder="Escriba su nombre: "
					name="name"
					value={form.name}
					label="Ingrese su nombre completo"
					className={styles['input-label']}
					onChange={handleChange}
					/>

				<Input
					type="text"
					placeholder="Escriba su edad: "
					name="age"
					value={form.age}
					label="Ingrese su edad"
					className={styles['input-label']}
					onChange={handleChange}
					/>

				<Input
					type="text"
					placeholder="Escriba su ciudad: "
					name="city"
					value={form.city}
					label="Ingrese su ciudad"
					className={styles['input-label']}
					onChange={handleChange}
					/>

				<Input
					type="email"
					placeholder="Escriba su email: "
					name="email"
					value={form.email}
					label="Ingrese su email"
					className={styles['input-label']}
					onChange={handleChange}
					/>

				<Input
					type="file"
					placeholder="Ingrese su imagen: "
					name="image"
					value={form.email}
					label="Ingrese su imagen"
					className={styles['input-label']}
					onChange={handleChange}
				/>

				<button type="submit">Enviar</button>
			</form>
		</div>
	);
};

export default Container;
