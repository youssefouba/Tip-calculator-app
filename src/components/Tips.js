import React from 'react'
import Tipbutton from './Tipbutton'

const Tips = () => {
  return (
    <div className="SelectTip">
        <span className="label">Select Tip %</span>
        <div className="Tips">
          <Tipbutton tipVal='5%'/>
          <Tipbutton tipVal='50%'/>
          <Tipbutton tipVal='500%'/>
          <Tipbutton tipVal='50%'/>
          <Tipbutton tipVal='5%'/>
          <input className="tip custip" placeholder='Custom'/>
        </div>
      </div>
  )
}

export default Tips