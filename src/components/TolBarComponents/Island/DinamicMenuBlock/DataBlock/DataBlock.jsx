import React from "react";
import clas from "./DataBlock.module.scss";
import { useSelector } from "react-redux";

const DataBlock = React.forwardRef((_, ref) => {
  const arr = [...Array(30)].map((_, i) => i);
  const regim = useSelector((state) => state.tolBar.regimIslandMenu);

  const itemTagDisabledFunction = (index) => {
    if (regim !== 3) {
      return `${clas.item} ${clas.itemHidden} `;
    }
    // if (
    // 	arrayInActiveitem.includes(index) ||
    // 	index < itemComplitionFrom ||
    // 	(index != (itemComplitionEnd == "" ? index : itemComplitionEnd) &&
    // 		index != (itemComplitionFrom == "" ? index : itemComplitionFrom)) ||
    // 	Number(index) <= Number(new Date().getHours())
    // ) {
    // 	return `${clas.item} ${clas.itemOk}`;
    // }
    // if (itemComplitionFrom == index || itemComplitionEnd == index) {
    // 	return `${clas.item} ${clas.itemSelect} white-co`;
    // }
    return `${clas.item} blue1-bg`;
  };

  return (
    <div
      className={`${clas.container} ${regim !== 3 && clas.contNone}`}
      ref={ref}>
      {arr.map((item, index) => (
        <span
          className={`${itemTagDisabledFunction(
            index
          )} height_2 blue2-bg blue1-co size_4`}
          key={index}
          style={{
            transition: `scale 0.5s ease ${`${
              index * 0.01
            }s`}, opacity 0.5s ease ${`${index * 0.02}s`},
								background 0.4s ease 0s,color 0.4s ease 0s`,
          }}>
          {item + 1}
        </span>
      ))}
    </div>
  );
});

export default DataBlock;
