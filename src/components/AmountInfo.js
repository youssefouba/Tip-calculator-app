import React from 'react'

const AmountInfo = ({Total,Title,Unite}) => {
  return (
    <div className="Amount">
        <div className="amontTitle">
        <p className="AmontName">{Title}</p>
        <sapn className="units">/ {Unite}</sapn>
        </div>
        <sapn className="Amont">${Total}</sapn>
    </div>
  )
}

export default AmountInfo