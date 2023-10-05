import React from "react";
import clas from "./DataBlock.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setDate } from "../../../../../store/slices/taskInfoCreateSlice";
import { setRegim } from "../../../../../store/slices/tolBarSlice";

const DataBlock = React.forwardRef((_, ref) => {
  const arr = [...Array(42)].map((_, i) => i);
  const regim = useSelector((state) => state.tolBar.regimIslandMenu);
  const date = useSelector((state) => state.taskInfo.date);
  const disp = useDispatch();
  const itemTagDisabledFunction = (index) => {
    if (regim !== 3) {
      return `${clas.item} ${clas.itemHidden} `;
    }
    if (index === date) {
      return `${clas.item} ${clas.itemSelect} white-co`;
    }
    if (
      Number(++index) < Number(new Date().getDate()) ||
      (date !== "" && index !== date + 1)
    ) {
      return `${clas.item} ${clas.itemOk} `;
    }

    return `${clas.item} blue1-bg`;
  };

  const dataClick = (index) => {
    disp(setDate(index === date ? "" : index));
    date === "" ? setTimeout(() => disp(setRegim(1)), 300) : null;
  };
  return (
    <div
      className={`${clas.container} ${regim !== 3 && clas.contNone} gap_1`}
      ref={ref}>
      {arr.map((item, index) => (
        <span
          onClick={() => dataClick(index)}
          className={`${itemTagDisabledFunction(
            index
          )} blue2-bg blue1-co size_4 height_3`}
          key={index}
          style={{
            transition: `scale 0.5s ease ${`${
              index * 0.01
            }s`}, opacity 0.5s ease ${`${index * 0.01}s`},
				background 0.4s ease 0s,color 0.4s ease 0s`,
          }}>
          {item + 1}
        </span>
      ))}
    </div>
  );
});

export default DataBlock;
