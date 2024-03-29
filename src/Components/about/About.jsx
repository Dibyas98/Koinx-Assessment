import React from 'react'
import './about.css'
import already1 from '../../assets/alradyhold1.png';
import already2 from '../../assets/alradyhold2.png';

export default function About() {
  return (
    <div className='about'>
      <h1>About bitCoins</h1>
      <div>
        <h5>What is bitcoins</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus et maxime error, tempore, eius esse eum obcaecati, voluptatem harum repellat tenetur assumenda beatae non. Nisi alias soluta nesciunt aperiam eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem esse officiis, nesciunt cumque ullam modi cupiditate aut quisquam vero sunt odit corporis pariatur, laudantium maxime ex fugit dolore rerum. Cupiditate.</p>
      </div>
      <hr />
      <div>
        <h5>Lorem ipsum dolor sit amet</h5>
        <div className='about-para'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, nihil, dignissimos ipsam ut modi adipisci aliquid facilis iusto reiciendis unde consequuntur error aut veniam et in minus totam molestiae inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus velit nesciunt quaerat corporis excepturi, quas possimus explicabo hic repudiandae, ut quos nam, voluptas dicta rem? Vitae accusamus quibusdam temporibus accusantium.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae iure, dolore vero repellendus perspiciatis sint est, itaque quisquam vel ad rem ipsa cumque quas, eveniet commodi nemo ipsum nisi laborum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nostrum voluptatem inventore ratione accusantium accusamus reiciendis in quisquam dignissimos similique! Illo fugit deleniti tempora necessitatibus, doloremque consequuntur? Minima, totam ratione?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore unde praesentium exercitationem ea et sit illum necessitatibus iste excepturi. Aperiam corrupti, molestias explicabo praesentium est suscipit itaque ipsam! Sapiente, expedita? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis expedita accusantium ad corporis tenetur cum voluptates enim placeat dolor, tempora deleniti beatae culpa pariatur labore ex quos! Commodi, optio cumque.</p>
        </div>
      </div>
      <hr />
      <h5>Already hold bitCoins</h5>
      <div className='already'>
        <img src={already1} alt="" />
        <img src={already2} alt="" />
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ratione reprehenderit ipsam eos facilis voluptatem atque quis eligendi! Expedita tempore natus impedit similique, nesciunt ipsam tenetur sint voluptatum dolorum fugit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus perferendis nostrum aspernatur. Reiciendis autem atque, iste minus maiores hic vel minima ea quibusdam tempora debitis repellendus, eveniet, error distinctio sunt!</p>
      

    </div>
  )
}
