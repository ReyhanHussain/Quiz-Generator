import { Circle } from "lucide-react";
import React from "react";

function OptionsCard({ question }) {
  return (
    <div className="singleOptionCard">
      <span>{question.key}</span>
      <span>{question.text}</span>
    </div>
  );
}

export default OptionsCard;