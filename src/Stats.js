import React, { useState } from "react";
import StatsRow from "./StatsRow";
import "./Stats.css";

function Stats() {
  const [stocks, setStocks] = useState([
    "APPL",
    "NFLX",
    "MSFT",
    "GOOG",
    "FB",
    "AMZN",
  ]);

  return (
    <div className="stats">
      <div className="stats__container">
        <div className="stats__header"></div>
        <p> Stocks</p>
        <div className="stats__rows">
          {stocks.map((stock, index) => (
            <StatsRow id={index} name={stock} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stats;

// const [cryptos, setCryptos] = useState([
//   "Bitcoin",
//   "Ethereum",
//   "XRP",
//   "Tether",
//   "Litecoin",
//   "Monero",
//   "Polkadot",
// ]);
