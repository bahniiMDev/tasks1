import React from "react";
import clas from "./Header.module.scss";
import TextSplit from "../TolBarComponents/TextSplit/TextSplit";
import Menu from "./Menu/Menu";
import List from "./List/List";
import { useSelector } from "react-redux";

const Header = () => {
  const { menuClick, listClick } = useSelector((state) => state.header);

  const activeMenuClass = () => {
    if (menuClick) return `${clas.menu} ${clas.menuActive}`;
    return clas.menu;
  };
  const activeListClass = () => {
    if (listClick) return `${clas.menu} ${clas.menuActive}`;
    return clas.menu;
  };
  return (
    <div className={`${clas.header}`}>
      <TextSplit textValue="Tasks" anyClass={clas.title} />
      <span className={clas.emodj}></span>
      <div className={clas.buttonCont}>
        <List />
        <Menu />
        <ul
          style={{
            right: "0",
          }}
          className={`${activeMenuClass()} border-mini1 size_1`}>
          <p>
            Menu <br />
            Coming Soon
          </p>
        </ul>
        <ul
          style={{
            left: "0",
          }}
          className={`${activeListClass()} border-mini1 size_1`}>
          <p>
            Filters <br />
            Coming Soon
          </p>
        </ul>
      </div>
    </div>
  );
};

export default Header;
