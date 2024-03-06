import React from 'react'
import './screen.css'
import LeftSide from '../leftside/LeftSide'
import RightSide from '../rightside/RightSide'

export default function Screen() {
  return (
    <div className='screen'>
      <LeftSide></LeftSide>
      <RightSide></RightSide>
    </div>
  )
}
