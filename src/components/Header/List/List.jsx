import React from "react";
import clas from "./List.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setClickList, setClickMenu } from "../../../store/slices/header";

const List = () => {
  const disp = useDispatch();
  const { listClick } = useSelector((state) => state.header);

  return (
    <div
      onClick={() => {
        disp(setClickList(!listClick));
        disp(setClickMenu(false));
      }}
      className={`${
        listClick ? `${clas.today} ${clas.todayActive}` : clas.today
      } border-mini1  black1-co`}>
      <span className={clas.list}>
        <button className="gray1-bg border-mini1">
          <svg
            width="13"
            height="22"
            viewBox="0 0 13 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.46967 1.46967C1.76256 1.17678 2.23744 1.17678 2.53033 1.46967L11.5303 10.4697C11.8232 10.7626 11.8232 11.2374 11.5303 11.5303L2.53033 20.5303C2.23744 20.8232 1.76256 20.8232 1.46967 20.5303C1.17678 20.2374 1.17678 19.7626 1.46967 19.4697L9.93934 11L1.46967 2.53033C1.17678 2.23744 1.17678 1.76256 1.46967 1.46967Z"
              fill={listClick ? "#000" : "gray"}
              stroke={listClick ? "#000" : "gray"}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </span>
      Today
    </div>
  );
};

export default List;
