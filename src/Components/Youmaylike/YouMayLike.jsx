import React from 'react'
import './youmaylike.css'
import Treanding from '../treanding/Treanding'

export default function YouMayLike() {
  return (
    <div className='youmaylike'>
      <h2>You May Also Like</h2>
      <div>
      <Treanding></Treanding>
      </div>
      <h2>Treanding Coins</h2>
      <div>
        <Treanding></Treanding>
      </div>
    </div>
  )
}
