import React from 'react'
import './analyst.css'
import Bar from '../bar/Bar'

export default function Analyst() {
  return (
    <div className='analyst'>
      <div className='analyst-perc'>
        <h1>70%</h1>
      </div>
      <div className='analyst-bar'>
       <span className='bar-span'>
        Buy
        <Bar range={'76%'} col={'#00b386'}></Bar>
        </span> 
        <span className='bar-span'>
          Hold 
          <Bar range={'8%'} col={'#c7c8ce'}></Bar>
        </span>
        <span className="bar-span">
          Sell 
          <Bar range={'16%'} col={'f7324c'}></Bar>
        </span>
      </div>
    </div>
  )
}
