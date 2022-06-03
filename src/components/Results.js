import React from 'react'
import AmountInfo from './AmountInfo'
import { useState,useEffect } from "react";

const results = ({amountT}) => {
  return (
    <div className="Result">
      <div className='Amounts'>
        <AmountInfo Total={!isNaN(amountT.tipAmount)?amountT.tipAmount:"0.00"} Title="Tip Amount" Unite="person"/>
        <AmountInfo Total={!isNaN(amountT.total)?amountT.total:"0.00"} Title="Total" Unite="person"/>
      </div>
      <div className="divBtn">
        <button className="btn" onClick={()=>{window.location.reload(false);}}>RESET</button>
      </div>
    </div>
  )
}

export default results