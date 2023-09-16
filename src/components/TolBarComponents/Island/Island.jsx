import React from "react";
import clas from "./Island.module.scss";
import { useDispatch, useSelector } from "react-redux";
import DinamicIsland from "../DinamicIsland/DinamicIsland";
import DinamicMenuBlock from "./DinamicMenuBlock/DinamicMenuBlock";
import ButtonBig from "../ButtonBig/ButtonBig";
import RegimState from "./RegimState/RegimState";
import InputCustom from "./InputCustom/InputCustom";
import {
	animationStane,
	clickBorder,
	clickResize,
	setRegim,
} from "../../../store/slices/tolBarSlice";
import { setItem } from "../../../store/slices/taskInfoCreateSlice";
import DinamicMounth from "./DinamicMounth/DinamicMounth";

const Island = () => {
	const { animClick, resize, border } = useSelector((state) => state.tolBar);
	const refFake = React.useRef(null);

	const disp = useDispatch();
	React.useEffect(() => {
		disp(clickBorder(Boolean(localStorage.getItem("border"))));
		disp(clickResize(Boolean(localStorage.getItem("resize"))));
	}, []);

	const wrapeprStateFunction = () => {
		if (border) return `${clas.wrapper} ${clas.wrapperPadding}`;
		return clas.wrapper;
	};
	const dinamicMenuStateFunction = () => {
		if (animClick)
			return `${clas.dinamicIslandMenu} ${clas.dinamicIslandMenuActive}`;
		return clas.dinamicIslandMenu;
	};

	const fakeDinamicIsland = () => {
		if (resize)
			return `${clas.dinamicIslandCont} ${clas.dinamicIslandContResize}`;
		return clas.dinamicIslandCont;
	};

	const clickCreate = () => {
		disp(setItem());
		disp(animationStane(false));
	};

	return (
		<div className={wrapeprStateFunction()}>
			<div className={fakeDinamicIsland()}>
				<div className={dinamicMenuStateFunction()}>
					<InputCustom />
					<RegimState />
					{/* <DinamicMounth /> */}

					<DinamicMenuBlock refFake={refFake} />
					<ButtonBig
						onCLickButton={() => disp(setRegim(3))}
						text="Set Date"
						anotherStyles="height_1 size_1 mg_b_1 blue2-bg blue1-co"
					/>
					<ButtonBig
						onCLickButton={clickCreate}
						text="Create"
						anotherStyles="height_1 size_1 blue1-bg white-co"
					/>
				</div>
				<DinamicIsland textValue="Create new task" />
			</div>
		</div>
	);
};

export default Island;
