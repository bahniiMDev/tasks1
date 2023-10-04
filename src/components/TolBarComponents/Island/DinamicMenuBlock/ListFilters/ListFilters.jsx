import React from "react";
import clas from "./ListFilters.module.scss";
import Home from "../../../../../assets/home.png";
import Sport from "../../../../../assets/sport.png";
import Travel from "../../../../../assets/travel.png";

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
        style={{
          transitionDelay: regim === 4 ? "0.1s" : "0.3s",
        }}
        className={`${
          regim === 4 ? `${clas.item} ${clas.itemActive}` : clas.item
        } height_1 border-mini1  mg_b_1 black1-co size_1`}>
        <span className={clas.contImg}>
          <img src={Home} className={clas.img} />
        </span>
        <p className={clas.text}>Home</p>
        <div className={clas.contCount}>
          <span className={`${clas.count} gray1-bg size_2`}>8</span>
        </div>
      </div>
      <div
        style={{
          transitionDelay: regim === 4 ? "0.2s" : "0s",
        }}
        className={`${
          regim === 4 ? `${clas.item} ${clas.itemActive}` : clas.item
        } height_1 border-mini1  mg_b_1 black1-co size_1`}>
        <span className={clas.contImg}>
          <img src={Sport} className={clas.img} />
        </span>
        <p className={clas.text}>Training</p>
        <div className={clas.contCount}>
          <span className={`${clas.count} gray1-bg size_2`}>3</span>
        </div>
      </div>
      <div
        style={{
          transitionDelay: regim === 4 ? "0.3s" : "0s",
        }}
        className={`${
          regim === 4 ? `${clas.item} ${clas.itemActive}` : clas.item
        } height_1 border-mini1  mg_b_1 black1-co size_1`}>
        <span className={clas.contImg}>
          <img src={Travel} className={clas.img} />
        </span>
        <p className={clas.text}>Training</p>
        <div className={clas.contCount}>
          <span className={`${clas.count} gray1-bg size_2`}>2</span>
        </div>
      </div>
      <div
        style={{
          transitionDelay: regim === 4 ? "0.4s" : "0.2s",
        }}
        className={`${
          regim === 4 ? `${clas.item} ${clas.itemActive}` : clas.item
        } height_1 border-mini1  mg_b_1 black1-co size_1`}>
        <Rect color="#d56dfb" bd={1.5} />
        <p className={clas.text}>Personal</p>
        <div className={clas.contCount}>
          <span className={`${clas.count} gray1-bg size_2`}>1</span>
        </div>
      </div>
      <div
        style={{
          transitionDelay: regim === 4 ? "0.5s" : "0.1s",
        }}
        className={`${
          regim === 4 ? `${clas.item} ${clas.itemActive}` : clas.item
        } height_1 border-mini1  mg_b_1 black1-co size_1`}>
        <Rect color="#0760fb" bd={1.5} />
        <p className={clas.text}>Work</p>
        <div className={clas.contCount}>
          <span className={`${clas.count} gray1-bg size_2`}>1</span>
        </div>
      </div>
      <div
        style={{
          transitionDelay: regim === 4 ? "0.6s" : "0s",
        }}
        className={`${
          regim === 4 ? `${clas.item} ${clas.itemActive}` : clas.item
        } height_1 border-mini1  mg_b_1 black1-co size_1`}>
        <Rect color="#4CBB17" bd={1.5} />
        <p className={clas.text}>Learning</p>
        <div className={clas.contCount}>
          <span className={`${clas.count} gray1-bg size_2`}>0</span>
        </div>
      </div>
    </div>
  );
});

export default ListFilters;
