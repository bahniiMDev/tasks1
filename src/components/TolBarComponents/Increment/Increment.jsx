import React from "react";
import clas from "./Increment.module.scss";

const Increment = ({ animClick }) => {
	return (
		<div
			className={
				animClick
					? `${clas.increment} ${clas.incrementNavClickMain}`
					: clas.increment
			}
		></div>
	);
};

export default Increment;
