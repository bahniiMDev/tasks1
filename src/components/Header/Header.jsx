import React from "react";
import clas from "./Header.module.scss";
import TextSplit from "../TolBarComponents/TextSplit/TextSplit";
import Menu from "./Menu/Menu";
import List from "./List/List";
import { useSelector } from "react-redux";

const Header = () => {
  const { menuClick } = useSelector((state) => state.header);

  const activeMenuClass = () => {
    if (menuClick) return `${clas.menu} ${clas.menuActive}`;
    return clas.menu;
  };
  return (
    <div className={`${clas.header}`}>
      <TextSplit textValue="Tasks" anyClass={clas.title} />
      <span className={clas.emodj}></span>
      <div className={clas.buttonCont}>
        <List />
        <Menu />
        <ul className={`${activeMenuClass()} border-mini1`}></ul>
      </div>
    </div>
  );
};

export default Header;
