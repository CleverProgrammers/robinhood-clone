import React, { useState, useEffect } from "react";
import "./Stats.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import StatsRow from "./StatsRow";
import { key } from "./api";
import axios from "axios";

const BASE_URL = "https://finnhub.io/api/v1/quote?symbol=";
const KEY_URL = `&token=${key}`;


const testData = []; 

function Stats() {
  const [stocksData, setStocksData] = useState([]);
  const [data, setResponseData] = useState([]);

  const getStocksData = (stock) => {
    return axios
      .get(`${BASE_URL}${stock}${KEY_URL}`)
      .then((res) => {
        testData.push({
          name: stock,
          ...res.data
        });
      })
      .catch((error) => {
        console.error("Error", error.message);
      });
  };

  useEffect(() => {
    const stocksList = ["AAPL", "MSFT", "TSLA", "FB", "BABA", "UBER", "DIS", "SBUX"];

    let promises = [];
    stocksList.map((stock) => {
      promises.push(getStocksData(stock))
    });
    Promise.all(promises).then(()=>{
      console.log(testData);
      setStocksData(testData);
    })
  }, []);

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
                key={stock.name}
                name={"APPL"}
                openPrice={stock.o}
                volume={3000}
                chartData="helloChartData"
                price={stock.c}
                volatility={45}
              />
            ))}
          </div>
        </div>
        <div className="stats__header stats-lists">
          <p>Lists</p>
        </div>
        <div className="stats__content">
          <div className="stats__rows">
            {stocksData.map((stock) => (
              <StatsRow
                key={stock.name}
                name={stock.name}
                volume={3000}
                openPrice={stock.o}
                chartData="helloChartData"
                price={stock.c}
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

// const url = `https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&symbols="AAPL"&apikey=${key}`;

// const url =
//   "https://www.alphavantage.co/query?function=OVERVIEW&symbol=AAPL&apikey=UBFI68B0MJWJ7CG0";
