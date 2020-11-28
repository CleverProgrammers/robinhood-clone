import React, { useState } from "react";
import "./Stats.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

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
        <div className="stats__header">
          <p> Stocks</p>
          <MoreHorizIcon />
        </div>
        <div className="stats__content">
          <div className="stats__rows">
            {stocks.map((stock, index) => (
              <div className="row">
                <div className="row__intro">
                  <h1>{stock}</h1>
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
            ))}
          </div>
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
