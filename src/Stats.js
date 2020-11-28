import React, { useState, useEffect } from "react";
import "./Stats.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import StatsRow from "./StatsRow";
import { key } from "./api";
import axios from "axios";

function Stats() {
  const [stocksData, setStocksData] = useState([
    "APPL",
    "MSFT",
    "AMD",
    "FB",
    "TSLA",
    "SHOP",
    "EXAS",
    "NVAX",
  ]);
  const [data, setResponseData] = useState([]);

  useEffect(() => {
    // const url = `https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&symbols="AAPL"&apikey=${key}`;

    const url =
      "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=UBFI68B0MJWJ7CG0";

    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        // let stocks = _.flattenDeep(
        //   Array.from(res.data["Stock Quotes"]).map((stock) => [
        //     {
        //       symbol: stock["1. symbol"],
        //       price: stock["2. price"],
        //       volume: stock["3. volume"],
        //       timestamp: stock["4. timestamp"],
        //     },
        //   ])
        // );
        // console.log(stocks);
      })
      .catch((error) => console.log(error));
  }, [stocksData]);

  return (
    <div className="stats">
      <div className="stats__container">
        <div className="stats__header">
          <p> Stocks</p>
          <MoreHorizIcon />
        </div>
        <div className="stats__content">
          <div className="stats__rows">
            {stocksData.map((stock) => (
              <StatsRow
                name="APPL"
                volume={3000}
                chartData="helloChartData"
                price={116}
                volatility={45}
              />
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
