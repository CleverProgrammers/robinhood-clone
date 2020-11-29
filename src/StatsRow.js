import React from "react";
import StockChart from './stock.svg'

function StatsRow(props) {
  //   console.log(props, "what is in props here?");
// (currentPrice - openPrice)/openPrice
  const percentage = ((props.price - props.openPrice)/props.openPrice) * 100;
  return (
    <div className="row">
      <div className="row__intro">
        <h1>{props?.name}</h1>
        <p>300 shares</p>
      </div>
      <div className="row__chart">
        <img src={StockChart} height={16}/>
      </div>
      <div className="row__numbers">
        <p className="row__price">{props.price}</p>
  <p className="row__percentage"> +{Number(percentage).toFixed(2)}%</p>
      </div>
    </div>
  );
}

export default StatsRow;
