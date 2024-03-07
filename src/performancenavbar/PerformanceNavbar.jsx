import React from 'react'
import './performancnavbar.css'

export default function PerformanceNavbar() {
  return (
    <div className='performancnavbar'>
      <ul>
        <li className='active'>OverView</li>
        <li className='hide-nav'>Fundamentals</li>
        <li className='hide-nav'>News Insight</li>
        <li className='hide-nav'>Sentiments</li>
        <li className='hide-nav'>Team</li>
        <li className='hide-nav'>Technicals</li>
        <li className='hide-nav'>Tokenimices</li>
      </ul>
      <hr />
    </div>
  )
}
