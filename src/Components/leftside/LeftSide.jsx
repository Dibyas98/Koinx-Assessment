import React from 'react'
import './leftside.css'
import ChartSection from '../currenctChart/ChartSection'
import Sentiment from '../sentiment/Sentiment'
import About from '../about/About'
import Team from '../team/Team'
import Tokonomices from '../tokonomices/Tokonomices'
import RightSide from '../rightside/RightSide'
import Performance from '../perfomance/Performance'
import YouMayLike from '../Youmaylike/YouMayLike'

export default function LeftSide() {
  return (
    <div className='leftside'>
      <ChartSection></ChartSection>
      <Performance></Performance>
      <Sentiment></Sentiment>
      <About></About>
      <Tokonomices></Tokonomices>
      <Team></Team>
      <YouMayLike></YouMayLike>
      <div className='mobile'>
        <RightSide></RightSide>
      </div>
    </div>
  )
}
