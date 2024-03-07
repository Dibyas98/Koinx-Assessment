import React, { useContext } from "react";
import "./chartsection.css";
import TradingViewWidget from "../charttable/TradingViewWidget";
import Context, { Data } from "../context/Context";
import high from '../../assets/high.png'

export default function ChartSection() {
  const { bitcoin } = useContext(Data);
  // console.log(bitcoin);
  return (
    <div className="chartsection">
      {Object.keys(bitcoin).length > 0 ? (
        <div className="coin-data">
          <div className="bitcoin-head">
            <img src={bitcoin.image.small} alt="" />
            <h1>{bitcoin.name}</h1>
            <p className="rank">Rank {bitcoin.market_cap_rank}</p>
          </div>
          <div style={{paddingLeft:'1rem'}}>
            <div className="" style={{display:'flex',alignItems:'center',gap:'1rem'}}>
            <p style={{fontSize:'1.3rem',fontWeight:'600'}}>$46,953.04</p>
            <img src={high} alt="" style={{height:'30px'}} />
            </div>
            <p>₹ 39,42,343</p>
          </div>
        </div>
      ) : (
        <></>
      )}
      <TradingViewWidget></TradingViewWidget>
    </div>
  );
}
