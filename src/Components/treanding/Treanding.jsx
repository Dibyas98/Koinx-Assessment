import axios from "axios";
import React, { useEffect, useState } from "react";
import "./treanding.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; 

export default function Treanding() {
  const [teanding, settreanding] = useState({});
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/search/trending"
      );
      const coin = res.data;
      settreanding(coin.coins);
    }
    fetchData();
  }, []);
  
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="treanding">
      {teanding.length > 0 ? (
        teanding.map((ele) => {
          return (
            <div className="trean" key={ele.item.coin_id}>
              <div className="tren-head">
                <img src={ele.item.small} alt="" />
                <h6>{ele.item.name}</h6>
              </div>
              <h2>{ele.item.data.price.slice(0, 5)}</h2>
              <img src={ele.item.data.sparkline} alt="" />
            </div>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
}
