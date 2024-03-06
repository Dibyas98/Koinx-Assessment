import React from 'react'
import './leftside.css'
import ChartSection from '../currenctChart/ChartSection'
import Sentiment from '../sentiment/Sentiment'

export default function LeftSide() {
  return (
    <div className='leftside'>
      <ChartSection></ChartSection>
      <Sentiment></Sentiment>
    </div>
  )
}
