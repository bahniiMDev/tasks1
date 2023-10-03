import React from "react";
import clas from "./Rect.module.scss";

const Rect = ({ color = "#000", bd = 1.1, regim = "medium", qus = false }) => {
  const rectWidthFunction = () => {
    if (regim === "big") return "52%";
    if (regim === "medium") return "48%";
    if (regim === "small") return "46%";
  };

  return (
    <div className={qus ? `${clas.cont} ${clas.contActive}` : clas.cont}>
      <span
        className={clas.rect}
        style={{
          boxShadow: `0px 0px 0px ${bd}px ${qus ? "#f5f4f6" : color} inset`,
          height: rectWidthFunction(),
        }}></span>
    </div>
  );
};

export default Rect;
