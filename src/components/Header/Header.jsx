import React from "react";
import TextSplit from "../TolBarComponents/TextSplit/TextSplit";
import clas from "./Header.module.scss";

const Header = () => {
  return (
    <div>
      <div className={clas.titleCont}>
        <TextSplit
          textValue="Good Morning, Sulivan!"
          anyClass={`${clas.title}`}
        />
      </div>
    </div>
  );
};

export default Header;
