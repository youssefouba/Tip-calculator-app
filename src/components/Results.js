import React from 'react'
import AmountInfo from './AmountInfo'

const results = () => {
  return (
    <div className="Result">
      <div className='Amounts'>
        <AmountInfo Total="0.00" Title="Tip Amount" Unite="person"/>
        <AmountInfo Total="0.00" Title="Total" Unite="person"/>
      </div>
      <div className="divBtn">
        <button className="btn">RESET</button>
      </div>
    </div>
  )
}

export default results