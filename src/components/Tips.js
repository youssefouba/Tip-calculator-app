import React from 'react'
import Tipbutton from './Tipbutton'

const Tips = ({alltips,makeTip,setInfo,setAlltips}) => {
  
  return (
    <div className="SelectTip">
        <span className="label">Select Tip %</span>
        <div className="Tips"> 
          {alltips.map((t)=>(
            <Tipbutton tipVal={t.tip} tipid={t.id} makeTip={makeTip} tipStat={t.clicked} key={t.tip}/>
          ))}
          <input className="tip custip"  type="number" placeholder='Custom' onChange={(e)=>{setInfo(t=>({...t,tipSe:Number(e.target.value)}));setAlltips(alltips.map((y)=>({...y,clicked:false})))}}/>
        </div>
      </div>
  )
}

export default Tips;