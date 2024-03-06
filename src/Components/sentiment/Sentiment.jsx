import React from "react";
import "./sentiment.css";
import KeyEventCard from "../keyevent/KeyEventCard";
import Analyst from "../analyst/Analyst";

export default function Sentiment() {
  return (
    <div className="sentiment">
      <h1>Sentiment</h1>
      <h4>Key Event</h4>
      <div className="senitment-keyevent">
        <KeyEventCard pic={'news'}></KeyEventCard>
        <KeyEventCard pic={'stock'}></KeyEventCard>
      </div>
      <h4>Analyst Estimates</h4>
      <Analyst></Analyst>
    </div>
  );
}
