import React from "react";

function StatsRow(props) {
  return (
    <div className="statsRow">
      <div className="intro">
        <p>{props?.name}</p>
        <p>300 shares</p>
      </div>
      <div className="stats__chart">
        <p> mini chart</p>
      </div>
      <div className="stats__numbers">
        <p>$200,00</p>
        <p> +50%</p>
      </div>
    </div>
  );
}

export default StatsRow;
