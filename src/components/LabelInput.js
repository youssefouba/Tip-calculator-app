import React from "react";

const LabelInput = ({ title, srcImg }) => {
  return (
    <div className="infos">
      <div className='msg'>
        <span className="label">{title}</span>
        <span className="errorText disNo">Can't be zero</span>
      </div>
      <div className="inputBox">
        <img src={`${srcImg}`} alt="Dollar" />
        <input className="main-input" placeholder="0"/>
      </div>
    </div>
  );
};

export default LabelInput;
