import React from 'react'

const Tipbutton = ({tipid,tipVal,makeTip,tipStat}) => {
  return (
    <div>
        <button className={(tipStat?"tip Lastclick":"tip")} onClick={()=>{makeTip(tipid)}}>{tipVal}%</button>
    </div>
  )
}

export default Tipbutton