import React, { useState, useEffect } from "react";
import "./Stats.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import StatsRow from "./StatsRow";
import { key } from "./api";
import axios from "axios";

const BASE_URL =
  "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=";

const KEY_URL = `&apikey=${key}`;

const getStocksData = (stock) => {
  let stocksData = [];
  axios
    .get(`${BASE_URL}${stock}${KEY_URL}`)
    .then((res) => {
      const { data } = res;
      console.log(data, "what is in data?");

      // data has two keys
      // 1. Meta Data
      // 2. Time Series (Daily)

      console.log(Object.keys(data["Time Series (Daily)"]).length);

      let stocksRow = stocksData.push({
        name: data["Meta Data"]["2. Symbol"],
      });
      // 1 object per stock
    })
    .catch((error) => {
      console.error("Error", error.message);
    });
};

function Stats() {
  const [stocksData, setStocksData] = useState([]);
  const [data, setResponseData] = useState([]);

  useEffect(() => {
    const stocksList = ["APPL", "MSFT", "TSLA", "FB"];

    let stocksData = stocksList.map((stock) => {
      getStocksData(stock);
    });
    setStocksData(stocksData);
  }, []);

  //   let stocksData = [];

  //       axios.all(stocksList
  //         .map((stock) => (
  //           axios.get()`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${stock}&apikey=${key}`);
  //       )
  //       .then((res) => {
  //         console.log(res.data);
  //         let response = res.data;
  //         let stockName = res.data["Meta Data"]["2. Symbol"];
  //         let stockDailyNumbers = response["Time Series (Daily)"];

  //         // stocksData.push({
  //         //   symbol: stockName,
  //         //   volume:

  //         // });
  //       });
  //     })
  //     .catch((error) => console.log(error));
  //   setStocksData(stocksData);
  // }, [stocksData]);

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
                name={"APPL"}
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

// const url = `https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&symbols="AAPL"&apikey=${key}`;

// const url =
//   "https://www.alphavantage.co/query?function=OVERVIEW&symbol=AAPL&apikey=UBFI68B0MJWJ7CG0";
