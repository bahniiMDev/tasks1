import React from "react";
import TextSplit from "../TolBarComponents/TextSplit/TextSplit";
import clas from "./Header.module.scss";
import helloy from "../../assets/helloy1.png";

const Header = () => {
	return (
		<div>
			<div className={clas.titleCont}>
				<TextSplit
					textValue="Good Morning, Sulivan!"
					anyClass={`${clas.title}`}
				/>
				<img src={helloy} />
			</div>
		</div>
	);
};

export default Header;
