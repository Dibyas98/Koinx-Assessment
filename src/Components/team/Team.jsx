import React from 'react'
import './team.css'
import TeamCard from '../teamcard/TeamCard'
export default function Team() {
  return (
    <div className='team'>
      <h1>Team</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, totam sunt fuga, earum exercitationem quasi iusto amet eius officiis accusamus est quod rerum cupiditate aspernatur voluptatibus molestias placeat eveniet quisquam.</p>
      <div className='team-people'>
        
            <TeamCard></TeamCard>
            <TeamCard></TeamCard>
            <TeamCard></TeamCard>
        
      </div>
    </div>
  )
}
