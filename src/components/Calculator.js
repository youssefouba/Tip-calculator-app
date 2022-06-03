import React from "react";
import Tips from "./Tips"

const Calculator = ({alltips,makeTip,setInfo,setAlltips,allInfo}) => {
  return (
    <div>
      <div className="infos">
      <div className='msg'>
        <span className="label">Bill</span>
      </div>
      <div className="inputBox">
        <img src={`/icon-dollar.svg`} alt="Dollar" />
        <input className="main-input" type="number" placeholder="0" onChange={(e)=>{ setInfo(t=>({...t,bill:Number(e.target.value)}))}}/>
      </div>
    </div>
      <Tips alltips={alltips} makeTip={makeTip} setInfo={setInfo} setAlltips={setAlltips}/>
      <div className="infos">
      <div className='msg'>
        <span className="label">Number of People</span>
        <span className={allInfo.nuPeople==0?"errorText":"errorText disNo"}>Can't be zero</span>
      </div>
      <div className="inputBox">
        <img src={`/icon-person.svg`} alt="Dollar" />
        <input className={allInfo.nuPeople==0?"main-input NotValid":"main-input"} type="number" placeholder="0" onChange={(e)=>{setInfo(t=>({...t,nuPeople:Number(e.target.value)}))}}/>
      </div>
    </div>
      
    </div>
  );
};

export default Calculator;
