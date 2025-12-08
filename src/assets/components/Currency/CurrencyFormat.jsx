import React from 'react'
import numeral from 'numeral'

const CurrencyFormat =((amount)=>{
    const formateAmount = numeral(amount).format("$0,0.00");
    return <div>{formateAmount}</div>
})

export default CurrencyFormat
