import React from "react";
import { useDispatch, useSelector } from "react-redux";
import clas from "./Items.module.scss";
import Rect from "../../components/TolBarComponents/Rect/Rect";
import { setHeight, setItems } from "../../store/slices/taskInfoCreateSlice";

const Items = () => {
  const { items, height } = useSelector((state) => state.taskInfo);
  const disp = useDispatch();
  React.useEffect(() => {
    fetch("https://651ee37744a3a8aa4769288f.mockapi.io/items")
      .then((res) => res.json())
      .then((r) => {
        disp(setItems(r));
        disp(setHeight(51 * r.length));
      });
  }, []);

  return (
    <>
      <ul
        style={{
          height: `${height}px`,
        }}
        className={clas.container}>
        {items.map((item, i) => (
          <li
            className={`${clas.task} border-mini1`}
            style={{
              animationDelay: `${0.1 * i}s`,
            }}
            key={i}>
            <Rect color="lightgray" bd={1.5} regim="big" />
            {item.text}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Items;
