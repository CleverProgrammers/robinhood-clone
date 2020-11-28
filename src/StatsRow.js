import React from "react";

function StatsRow(props) {
  console.log(props, "what is in props here?");
  return (
    <div className="row">
      <div className="row__intro">
        <h1>{props?.name}</h1>
        <p>300 shares</p>
      </div>
      <div className="row__chart">
        <p> mini chart</p>
      </div>
      <div className="row__numbers">
        <p>$200,00</p>
        <p> +50%</p>
      </div>
    </div>
  );
}

export default StatsRow;
