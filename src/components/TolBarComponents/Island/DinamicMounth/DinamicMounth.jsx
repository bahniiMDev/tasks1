import React from "react";
import right from "../../../../assets/arrow-right.svg";
import clas from "./DinamicMounth.module.scss";
import { useSelector } from "react-redux";

const DinamicMounth = () => {
	const regim = useSelector((state) => state.tolBar.regimIslandMenu);

	return (
		<div
			className={`${
				regim === 2 ? `${clas.mounth} ${clas.mounthHiden}` : clas.mounth
			} height_1 blue2-bg size_2 blue1-co `}
		>
			<button className={clas.arrow}>
				<img
					src={right}
					style={{
						rotate: "180deg",
					}}
				/>
			</button>
			<p className={clas.text}>
				<img />
				July, 2023
			</p>
			<button className={clas.arrow}>
				<img src={right} />
			</button>
		</div>
	);
};

export default DinamicMounth;
