import React from "react";
import clas from "./InputCustom.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setValue } from "../../../../store/slices/taskInfoCreateSlice";
import Rect from "../../Rect/Rect";

const InputCustom = () => {
  const { timeComplitionFrom, timeComplitionEnd, text, date } = useSelector(
    (state) => state.taskInfo
  );
  const disp = useDispatch();

  return (
    <div className={`${clas.wrapper} border-mini1 gray1-bg height_1 mg_b_1`}>
      <Rect color={"lightgray"} bd={1.5} regim="big" />
      <input
        onChange={(e) => {
          disp(setValue(e.target.value));
        }}
        value={text}
        placeholder="Create new titile"
        className={`${clas.input} size_1 gray1-bg border-mini1`}
      />
      <div className={clas.wrapper2}>
        <span
          className={`${
            timeComplitionFrom !== "" || timeComplitionEnd !== ""
              ? clas.tag
              : `${clas.tagHidden} ${clas.tag}`
          } size_3`}>
          {timeComplitionFrom
            ? timeComplitionFrom >= 12
              ? `${timeComplitionFrom}pm`
              : `${timeComplitionFrom}am`
            : ""}
          &nbsp;-&nbsp;
          {timeComplitionEnd
            ? timeComplitionEnd >= 12
              ? `${timeComplitionEnd}pm`
              : `${timeComplitionEnd}am`
            : ""}
        </span>

        <span
          className={`${
            date !== "" ? clas.tagCircle : `${clas.tagHidden} ${clas.tagCircle}`
          } size_3`}>
          {date}
        </span>
      </div>
    </div>
  );
};

export default InputCustom;
