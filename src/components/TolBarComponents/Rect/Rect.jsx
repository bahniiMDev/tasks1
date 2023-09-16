import React from "react";
import clas from "./Rect.module.scss";

const Rect = ({ color = "#000", bd = 1.1, regim = "medium" }) => {
	const rectWidthFunction = () => {
		if (regim === "big") return "52%";
		if (regim === "medium") return "48%";
		if (regim === "small") return "46%";
	};

	return (
		<div className={clas.cont}>
			<span
				className={clas.rect}
				style={{
					boxShadow: `0px 0px 0px ${bd}px ${color} inset`,
					width: rectWidthFunction(),
				}}
			></span>
		</div>
	);
};

export default Rect;
