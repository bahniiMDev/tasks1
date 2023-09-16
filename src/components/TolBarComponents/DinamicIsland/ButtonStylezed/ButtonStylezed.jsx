import React from "react";
import clas from "./ButtonStylezed.module.scss";
import resizeBig from "../../../../assets/resize-big.svg";
import resizeSmall from "../../../../assets/resize-small.svg";
import { useDispatch, useSelector } from "react-redux";
import { clickBorder, clickResize } from "../../../../store/slices/tolBarSlice";

const ButtonStylezed = () => {
	const disp = useDispatch();
	const { resize, border } = useSelector((state) => state.tolBar);

	const borderClick = () => {
		disp(clickBorder(!border));
		localStorage.setItem("border", !border ? "1" : "");
	};
	const resizeClick = () => {
		disp(clickResize(!resize));
		localStorage.setItem("resize", !resize ? "1" : "");
	};
	return (
		<>
			<button
				style={{
					animationDelay: "0.8s",
				}}
				onClick={borderClick}
				className={
					border ? `${clas.button} ${clas.buttonActive}` : `${clas.button} `
				}
			>
				<span
					className={
						border
							? `${clas.item} ${clas.border}  `
							: `${clas.item} ${clas.border} ${clas.iconShow}`
					}
				></span>
				<span
					className={
						border
							? `${clas.item} ${clas.circle}   ${clas.iconShow}`
							: `${clas.item} ${clas.circle}`
					}
				></span>
			</button>
			<button
				style={{
					animationDelay: "1s",
				}}
				onClick={resizeClick}
				className={
					resize ? `${clas.button} ${clas.buttonActive}` : `${clas.button} `
				}
			>
				<img
					src={resizeBig}
					className={resize ? clas.icon : `${clas.icon} ${clas.iconShow}`}
				/>
				<img
					src={resizeSmall}
					className={resize ? `${clas.icon} ${clas.iconShow}` : clas.icon}
				/>
			</button>
		</>
	);
};

export default ButtonStylezed;
