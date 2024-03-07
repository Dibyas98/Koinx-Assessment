import React from "react";
import "./sentiment.css";
import KeyEventCard from "../keyevent/KeyEventCard";
import Analyst from "../analyst/Analyst";
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

export default function Sentiment() {
  return (
    <div className="sentiment">
      <h1>Sentiment</h1>
      <h4>Key Event</h4>
      <div style={{display:'flex',alignItems:'center'}}>
      <ChevronLeft></ChevronLeft>
      <div className="senitment-keyevent">

<KeyEventCard pic={'news'}></KeyEventCard>
<KeyEventCard pic={'stock'}></KeyEventCard>

</div>
<ChevronRight></ChevronRight>
      </div>
      <h4>Analyst Estimates</h4>
      <Analyst></Analyst>
    </div>
  );
}
