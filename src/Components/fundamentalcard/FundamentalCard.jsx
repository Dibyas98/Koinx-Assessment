import React from 'react'

export default function FundamentalCard({tag,detail}) {
  return (
    <div style={{display:'flex',justifyContent:'space-between',borderBottom:'2px solid black',padding:'1rem 0.5rem'}}>
      <p>{tag}</p>
      <p>{detail}</p>
    </div>
  )
}
