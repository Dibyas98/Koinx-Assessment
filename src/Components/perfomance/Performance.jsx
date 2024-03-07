import React from 'react'
import './performance.css'
import Fundamental from '../fundamental/Fundamental'
import meter from '../../assets/meter.png'

export default function Performance() {
  return (
    <div className='performance'>
      <h2>Performance</h2>
        <div style={{width:'100%'}}>
          <img src={meter} alt="" style={{width:'100%'}}/>
        </div>
      <h3>Fundamental</h3>
      <Fundamental></Fundamental>
    </div>
  )
}
