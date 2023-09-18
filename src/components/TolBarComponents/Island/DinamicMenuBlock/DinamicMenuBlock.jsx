import React, { useState } from "react";
import clas from "./DinamicMenuBlock.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  setTimeComplitionEnd,
  setTimeComplitionFrom,
} from "../../../../store/slices/taskInfoCreateSlice";
import DataBlock from "./DataBlock/DataBlock";

const DinamicMenuBlock = () => {
  const disp = useDispatch();
  const { timeComplitionFrom, timeComplitionEnd } = useSelector(
    (state) => state.taskInfo
  );
  const regim = useSelector((state) => state.tolBar.regimIslandMenu);
  const arr1 = [...Array(24)].map((_, i) => i);
  const arrayInActiveTime = [1, 23, 18];
  const ref = React.useRef(null);
  const date = useSelector((state) => state.taskInfo.date);
  const dataRef = React.useRef(null);
  //

  //
  const timeTagDisabledFunction = (index) => {
    if (regim !== 1) {
      return `${clas.time} ${clas.timeHidden} `;
    }
    if (
      index < timeComplitionFrom ||
      (index != (timeComplitionEnd == "" ? index : timeComplitionEnd) &&
        index != (timeComplitionFrom == "" ? index : timeComplitionFrom))
    ) {
      return `${clas.time} ${clas.timeOk} size_4`;
    }
    if (timeComplitionFrom == index || timeComplitionEnd == index) {
      return `${clas.time} ${clas.timeSelect} size_4 white-co`;
    }
    if (date > Number(new Date().getDate())) {
      return `${clas.time} size_4 blue1-bg`;
    }
    if (
      arrayInActiveTime.includes(index) ||
      Number(index) <= Number(new Date().getHours())
    ) {
      return `${clas.time} ${clas.timeOk} size_4`;
    }

    return `${clas.time} size_4 blue1-bg`;
  };
  const timeTagOnClickFunction = (index) => {
    if (timeComplitionFrom === "" && timeComplitionEnd !== index) {
      return disp(setTimeComplitionFrom(index));
    }

    if (timeComplitionFrom === index) {
      return disp(setTimeComplitionFrom(""));
    }
    if (timeComplitionEnd === index) {
      return disp(setTimeComplitionEnd(""));
    }
    if (
      timeComplitionFrom !== "" &&
      timeComplitionEnd !== index &&
      timeComplitionEnd === ""
    ) {
      return disp(setTimeComplitionEnd(index));
    }
    if (
      timeComplitionEnd !== "" &&
      timeComplitionFrom !== index &&
      timeComplitionFrom === ""
    ) {
      return disp(setTimeComplitionFrom(index));
    }
  };
  const string = (index) => {
    if (index < 8) {
      return `0${index + 1}.00`;
    }
    return `${index + 1}.00`;
  };
  const dinamicBlockFunctionState = () => {
    if (regim === 2) {
      return `${clas.dinamicBlock} ${clas.dinamicBlockRegim2}`;
    }
    return clas.dinamicBlock;
  };

  const dinamicTimeFunctionState = () => {
    if (regim === 2) {
      return `${clas.timesCont} ${clas.timesContActive}`;
    }
    return clas.timesCont;
  };
  const dinamicTimeFunctionHeight = () => {
    if (regim === 1) {
      return `${ref.current?.offsetHeight}px`;
    }
    if (regim === 3) {
      return `${dataRef.current?.offsetHeight}px`;
    }
  };
  //

  //
  return (
    <div
      className={`${dinamicBlockFunctionState()} ${
        regim === 2 ? "mg_bt_2" : "mg_bt_1"
      }`}
      style={{
        height: dinamicTimeFunctionHeight(),
        opacity: ref.current?.offsetHeight ? 1 : 0,
      }}>
      <textarea
        placeholder="Add notes"
        className={`${
          regim === 2 ? `${clas.area} ${clas.areaAcive}` : clas.area
        } gray1-bg border-mini1 size_1`}
      />
      <div
        ref={ref}
        className={`${dinamicTimeFunctionState()} gap_1`}
        style={{
          pointerEvents: regim === 1 ? "all" : "none",
        }}>
        {arr1.reverse().map((_, index) => (
          <span
            onClick={() => timeTagOnClickFunction(index + 1)}
            className={`${timeTagDisabledFunction(
              index + 1
            )} height_2 blue2-bg blue1-co size_4`}
            key={index}
            style={{
              transition: `scale 0.5s ease ${`${
                index * 0.02
              }s`}, opacity 0.5s ease ${`${index * 0.02}s`},
								background 0.4s ease 0s,color 0.4s ease 0s`,
            }}>
            {string(index)}
          </span>
        ))}
      </div>
      <DataBlock ref={dataRef} />
    </div>
  );
};

export default DinamicMenuBlock;
