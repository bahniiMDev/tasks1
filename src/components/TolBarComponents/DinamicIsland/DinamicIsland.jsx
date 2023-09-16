import React from "react";
import clas from "./DinamicIsland.module.scss";
import Increment from "../Increment/Increment";
import ButtonStylezed from "./ButtonStylezed/ButtonStylezed";
import { useDispatch, useSelector } from "react-redux";
import clas2 from "./ButtonStylezed/ButtonStylezed.module.scss";
import { animationStane } from "../../../store/slices/tolBarSlice";
import TextSplit from "../TextSplit/TextSplit";

const DinamicIsland = ({ textValue }) => {
	const disp = useDispatch();
	const { border, animClick } = useSelector((state) => state.tolBar);

	//
	const dinamicIslandStylezedFunction = () => {
		if (border) return "12px";
		return "";
	};
	//
	const dinamicIslandOnClickFunction = (e) => {
		if (!e.target.className.includes(clas2.button)) {
			disp(animationStane(!animClick));
		}
	};
	//

	return (
		<nav
			style={{
				borderRadius: dinamicIslandStylezedFunction(),
				transition: "0.6s cubic-bezier(0.5, 0, 0.4, 1.5)",
			}}
			onClick={dinamicIslandOnClickFunction}
			className={`${clas.nav} black1-bg`}
		>
			<button
				className={
					animClick
						? `${clas.increment} ${clas.incrementActive}`
						: `${clas.increment}`
				}
			>
				<Increment animClick={animClick} />
				<svg
					className={clas.svg}
					width="22"
					height="22"
					viewBox="0 0 22 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M10.5 2C15.747 1.73024 21.0034 6.33496 21 11.9944C20.9966 17.5141 16.5228 21.9888 11 21.9888C5.47715 21.9888 1.00337 17.5141 1 11.9944C0.996551 6.33496 5.98371 1.7309 11.5 2"
						stroke="#0760fb"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</button>
			<TextSplit textValue={textValue} />
			<ButtonStylezed />
		</nav>
	);
};

export default DinamicIsland;
