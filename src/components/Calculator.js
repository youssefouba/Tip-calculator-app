import React from "react";
import LabelInput from "./LabelInput";
import Tips from "./Tips"

const Calculator = () => {
  return (
    <div>
      <LabelInput title="Bill" srcImg="/icon-dollar.svg" />
      <Tips/>
      <LabelInput title="Number of People" srcImg="/icon-person.svg" />
    </div>
  );
};

export default Calculator;
