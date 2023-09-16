import React from "react";
import clas from "./ButtonBig.module.scss";

const ButtonBig = ({
	text = "Click",
	anotherStyles = "",
	onCLickButton = () => {},
}) => {
	return (
		<button
			className={`${clas.buttonMenu} ${anotherStyles}`}
			onClick={onCLickButton}
		>
			{text}
		</button>
	);
};

export default ButtonBig;
