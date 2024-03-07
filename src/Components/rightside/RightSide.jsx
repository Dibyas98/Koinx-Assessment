import React from "react";
import "./rightside.css";
import ads from "../../assets/ads.png";
import tranding from '../../assets/trandingcoin.png'

export default function RightSide() {
  return (
    <>
    <div className="rightside">
      <img src={ads} alt="" />
    </div>
    <div className="trandingcoin">
      <img src={tranding} alt="" />
    </div>
    </>
  );
}
