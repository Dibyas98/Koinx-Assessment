import React from 'react'
import './chartsection.css'
import ChartTable from '../charttable/ChartTable'

export default function ChartSection() {
  return (
    <div className='chartsection'>
      <p>CryptoCurrencies <span>Bitcoins</span></p>
      <ChartTable></ChartTable>
    </div>
  )
}
