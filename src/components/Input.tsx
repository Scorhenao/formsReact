import React, { ChangeEvent } from "react";
import styles from "./css/input.module.css";

interface Props {
	type: string;
	placeholder: string;
	name: string;
	value: string;
	label: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    className?: string,
}

export const Input = ({
	type,
	placeholder,
	name,
	value,
	label,
	onChange,
    className,
}: Props) => {
	return (
		<div className={styles.inputContainer}>
			<label htmlFor={name} className={`input-label ${className || ""}`}>
				{label} 
			</label>
			<input
				id={name}
				type={type}
				placeholder={placeholder}
				name={name}
				value={value}
				onChange={onChange}
				className={styles.inputField}
			/>
		</div>
	);
};
