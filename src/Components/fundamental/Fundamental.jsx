import React, { useEffect } from 'react'
import './fundamental.css'
import FundamentalCard from '../fundamentalcard/FundamentalCard'
import axios from 'axios'

export default function Fundamental() {
    useEffect(() =>{
        async function fetchData(){
            const data = await axios.get
        }
    })
  return (
    <div className='fundamental'>
      <div className='fundamental-col'>
        <FundamentalCard tag={'BitCoins'} detail={'1666666'}></FundamentalCard>
      </div>
      <div className='fundamental-col'>
      <FundamentalCard tag={'BitCoins'} detail={'1666666'}></FundamentalCard>
      </div>
    </div>
  )
}
