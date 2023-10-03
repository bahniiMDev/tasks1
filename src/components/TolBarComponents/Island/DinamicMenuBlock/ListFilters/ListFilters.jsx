import React from "react";
import clas from "./ListFilters.module.scss";
import Home from "../../../../../assets/home.png";
import Rect from "../../../Rect/Rect";
import { useSelector } from "react-redux";

const ListFilters = React.forwardRef((_, ref) => {
  const regim = useSelector((state) => state.tolBar.regimIslandMenu);

  return (
    <div
      ref={ref}
      className={
        regim === 4
          ? `${clas.container} ${clas.containerActive}`
          : clas.container
      }>
      <div
        className={`${clas.item} height_1 border-mini1  mg_b_1 black1-co size_1`}>
        <span className={clas.contImg}>
          <img src={Home} className={clas.img} />
        </span>
        <p className={clas.text}>Home</p>
        <div className={clas.contCount}>
          <span className={`${clas.count} gray1-bg size_2`}>8</span>
        </div>
      </div>
      <div
        className={`${clas.item} height_1 border-mini1  mg_b_1 black1-co size_1`}>
        <Rect color="#d56dfb" bd={1.5} />
        <p className={clas.text}>Personal</p>
        <div className={clas.contCount}>
          <span className={`${clas.count} gray1-bg size_2`}>4</span>
        </div>
      </div>
    </div>
  );
});

export default ListFilters;
