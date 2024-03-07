import React from 'react';
import './keyeventcard.css';
import news from '../../assets/articles.png';
import stock from '../../assets/stock.png';

export default function KeyEventCard({ pic }) {
  return (
    <div className='keyeventcard' style={pic == 'stock'?{backgroundColor:'#Ebf9f4'}:{backgroundColor:'#e8f4fd'}}>
      <span><img src={pic === 'news' ? news : stock} alt="" /></span>
      <div>
        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quas totam ratione incidunt.</h6>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, sapiente asperiores. Suscipit aut, tempore molestiae eos ipsa voluptatem dolorem ducimus obcaecati non quasi aspernatur dolorum id quisquam maiores animi? Eius?</p>
      </div>
    </div>
  );
}
