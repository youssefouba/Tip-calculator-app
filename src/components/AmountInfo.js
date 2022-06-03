import React from 'react'

const AmountInfo = ({Total,Title,Unite}) => {
  return (
    <div className="Amount">
        <div className="amontTitle">
        <p className="AmontName">{Title}</p>
        <span className="units">/ {Unite}</span>
        </div>
        <span className="Amont">${Total}</span>
    </div>
  )
}

export default AmountInfo