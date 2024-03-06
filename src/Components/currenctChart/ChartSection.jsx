import React from 'react'
import './chartsection.css'
import TradingViewWidget from '../charttable/TradingViewWidget'

export default function ChartSection() {
  return (
    <div className='chartsection'>
      
      <TradingViewWidget></TradingViewWidget>
    </div>
  )
}
