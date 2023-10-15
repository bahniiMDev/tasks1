import React from "react";
import clas from "./Menu.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setClickMenu } from "../../../store/slices/header";

const Menu = () => {
  const disp = useDispatch();
  const { menuClick } = useSelector((state) => state.header);

  const clickClass = () => {
    if (menuClick) return `${clas.button} ${clas.buttonActive}`;
    return clas.button;
  };

  return (
    <button
      className={`${clickClass()} border-mini1`}
      onClick={() => disp(setClickMenu(!menuClick))}></button>
  );
};

export default Menu;
