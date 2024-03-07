import React from "react";
import "./screen.css";
import LeftSide from "../leftside/LeftSide";
import RightSide from "../rightside/RightSide";
import { ChevronsRight } from 'lucide-react';

export default function Screen() {
  return (
    <div className="screen">
      <p style={{display:'flex',alignItems:'center',gap:'0.5rem'}}>
        CryptoCurrencies<ChevronsRight></ChevronsRight> <span>Bitcoins</span>
      </p>
      <div className="screen-cont">
        <LeftSide></LeftSide>
        <section className="screen-right">
          <RightSide></RightSide>
        </section>
      </div>
    </div>
  );
}
