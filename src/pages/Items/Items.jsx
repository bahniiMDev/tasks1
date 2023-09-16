import React from "react";
import { useSelector } from "react-redux";
import clas from "./Items.module.scss";
import Rect from "../../components/TolBarComponents/Rect/Rect";

const Items = () => {
	const items = useSelector((state) => state.taskInfo.items);
	return (
		<ul className={clas.container}>
			{items.map((item, i) => (
				<li
					className={`${clas.task} height_1 border-mini1 size_1 mg_b_1`}
					key={i}
					style={{
						color: "#000",
					}}
				>
					<Rect color={"lightgray"} bd={1.25} regim="big" />

					{item.text}
				</li>
			))}
		</ul>
	);
};

export default Items;
