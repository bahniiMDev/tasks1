import React from "react";
import clas from "./ListFilters.module.scss";
import { setFilters } from "../../../../../store/slices/taskInfoCreateSlice";
import Rect from "../../../Rect/Rect";
import { useDispatch, useSelector } from "react-redux";

const ListFilters = React.forwardRef((_, ref) => {
  const disp = useDispatch();
  const regim = useSelector((state) => state.tolBar.regimIslandMenu);
  const { filters } = useSelector((state) => state.taskInfo);

  const [ghost, setGhost] = React.useState(0);
  const refD = React.useRef(null);
  const array = [
    {
      img: "./home.png",
      text: "Home",
      count: 8,
    },
    {
      img: "./sport.png",
      text: "Training",
      count: 5,
    },
    {
      img: "./travel.png",
      text: "Travel",
      count: 3,
    },
    {
      img: "#d56dfb",
      text: "Personal",
      count: 3,
    },
    {
      img: "#0760fb",
      text: "Work",
      count: 2,
    },
    {
      img: "#4CBB17",
      text: "Learning",
      count: 0,
    },
  ];

  const setArray = (item, i) => {
    disp(setFilters({ ...item, index: i }));
    console.log(item);
  };
  return (
    <div
      ref={ref}
      className={
        regim === 4
          ? `${clas.container} ${clas.containerActive}`
          : clas.container
      }>
      <span
        style={{
          top: `${
            ghost >= filters.index + 1 && filters.index !== null
              ? filters.index === array.length - 1
                ? ghost * refD.current?.offsetHeight
                : (ghost - 1) * refD.current?.offsetHeight
              : ghost * refD.current?.offsetHeight
          }px`,
        }}
        className={`${clas.ghost} height_4 border-mini1 gray1-bg`}></span>
      {array.map((item, i) => (
        <div
          key={i}
          ref={refD}
          onMouseMove={() => setGhost(i)}
          onClick={() => setArray(item, i)}
          style={{
            transitionDelay:
              regim === 4
                ? item.img === filters.img
                  ? null
                  : `${i * 0.1 + 0.1}s`
                : `${i * 0.05}s`,
          }}
          className={`${
            regim === 4
              ? item.img === filters.img
                ? `${clas.item} ${clas.itemActive} ${clas.itemClick}`
                : `${clas.item} ${clas.itemActive}`
              : clas.item
          } height_4 border-mini1 black1-co size_1`}>
          {item.img.length === 7 ? (
            <Rect color={item.img} bd={1.5} />
          ) : (
            <span className={clas.contImg}>
              <img src={item.img} className={clas.img} />
            </span>
          )}
          <p className={clas.text}>{item.text}</p>
          <div className={clas.contCount}>
            <span className={`${clas.count} gray1-bg size_2`}>
              {item.count}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
});

export default ListFilters;
