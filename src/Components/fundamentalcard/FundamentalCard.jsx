import React from 'react'

export default function FundamentalCard({tag,detail}) {
  return (
    <div className='fundamentalcard' style={{display:'flex',justifyContent:'space-between',borderBottom:'2px solid #0000004d',padding:'1rem 0.5rem',}}>
      <p style={{color:'#7c8793'}}>{tag}</p>
      <p style={{fontWeight:'600',textAlign:'right'}}>{detail}</p>
    </div>
  )
}
