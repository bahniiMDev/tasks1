import React from "react";
import clas from "./TextSplit.module.scss";

const TextSplit = ({ textValue = "Text", anyClass = "" }) => {
  const textValueArray = textValue.split("");
  const numberDelayLetter = 0.05;

  return (
    <p className={clas.text}>
      {textValueArray.map((item, index) => (
        <span
          key={index}
          className={`${clas.letter} ${anyClass}`}
          style={{
            animationDelay: `${(index - 1) * numberDelayLetter + 0}s`,
          }}>
          {item === " " ? <>&nbsp;</> : item}
        </span>
      ))}
    </p>
  );
};

export default TextSplit;
