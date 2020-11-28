import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

function LineGraph() {
  const [data, setData] = useState([
    {
      x: "January",
      y: 100,
    },
    {
      x: "February",
      y: 100,
    },
    {
      x: "1W",
      y: 150,
    },
    {
      x: "3M",
      y: 250,
    },
    {
      x: "1Y",
      y: 800,
    },
  ]);

  const options = {
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    maintainAspectRatio: false,
    tooltips: {
      mode: "index",
      intersect: false,
      //   callbacks: {
      //     label: function (tooltipItem, data) {
      //       return numeral(tooltipItem.value).format("+0,0");
      //     },
      //   },
    },
    scales: {
      xAxes: [
        {
          type: "time",
          time: {
            format: "MM",
            unit: "month",
            parser: "MM",
            displayFormats: { month: "MM/YY" },
            max: "2020-11-25",
            min: "2020-01-01",
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          //   ticks: {
          //     // Include a dollar sign in the ticks
          //     callback: function (value, index, values) {
          //       return numeral(value).format("0a");
          //     },
          //   },
        },
      ],
    },
  };

  //   const buildChartData = (data, casesType) => {
  //     let chartData = [];
  //     let lastDataPoint;
  //     for (let date in data.cases) {
  //       if (lastDataPoint) {
  //         let newDataPoint = {
  //           x: date,
  //           y: data[casesType][date] - lastDataPoint,
  //         };
  //         chartData.push(newDataPoint);
  //       }
  //       lastDataPoint = data[casesType][date];
  //     }
  //     return chartData;
  //   };

  //   function LineGraph({ casesType }) {
  //     const [data, setData] = useState({});

  //     useEffect(() => {
  //       const fetchData = async () => {
  //         await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
  //           .then((response) => {
  //             return response.json();
  //           })
  //           .then((data) => {
  //             let chartData = buildChartData(data, casesType);
  //             setData(chartData);
  //             console.log(chartData);
  //             // buildChart(chartData);
  //           });
  //       };

  //       fetchData();
  //     }, [casesType]);

  return (
    <div>
      {data?.length > 0 && (
        <Line
          data={{
            datasets: [
              {
                backgroundColor: "white",
                borderColor: "red",
                data: data,
              },
            ],
          }}
          options={options}
        />
      )}
    </div>
  );
}

export default LineGraph;
