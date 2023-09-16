import React from "react";
import clas from "./DataBlock.module.scss";
import { useSelector } from "react-redux";

const DataBlock = () => {
	const arr = [...Array(42)].map((_, i) => i);
	const regim = useSelector((state) => state.tolBar.regimIslandMenu);

	return (
		<div className={clas.container}>
			{arr.map((item) => (
				<span className={`${clas.item} blue1-co blue2-bg size_4 `}>{item}</span>
			))}
		</div>
	);
};

export default DataBlock;
