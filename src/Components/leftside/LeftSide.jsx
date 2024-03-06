import React from 'react'
import './leftside.css'
import ChartSection from '../currenctChart/ChartSection'
import Sentiment from '../sentiment/Sentiment'
import About from '../about/About'
import Team from '../team/Team'

export default function LeftSide() {
  return (
    <div className='leftside'>
      <ChartSection></ChartSection>
      <Sentiment></Sentiment>
      <About></About>
      <Team></Team>
    </div>
  )
}
