import React from 'react'
import './bar.css'
export default function Bar({range,col}) {
  return (
    <div className='bar' >
      <div className='bar-line' style={{width:range,backgroundColor:col}}></div>
      <p>{range}</p>
    </div>
  )
}
