import React from "react";
import { useDispatch, useSelector } from "react-redux";
import clas from "./Items.module.scss";
import Rect from "../../components/TolBarComponents/Rect/Rect";
import { setItems } from "../../store/slices/taskInfoCreateSlice";

const Items = () => {
  const items = useSelector((state) => state.taskInfo.items);
  console.log(items);
  const disp = useDispatch();
  React.useEffect(() => {
    fetch("https://651ee37744a3a8aa4769288f.mockapi.io/items")
      .then((res) => res.json())
      .then((r) => {
        disp(setItems(r));
      });
  }, []);
  return (
    <ul className={clas.container}>
      {items.map((item, i) => (
        <li className={`${clas.task} border-mini1 mg_b_1`} key={i}>
          <Rect color="lightgray" bd={1.5} regim="big" />
          {item.text}
        </li>
      ))}
    </ul>
  );
};

export default Items;
