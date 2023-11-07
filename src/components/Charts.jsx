import React, { useEffect } from "react";
import axios from "axios";
import { createChart } from "lightweight-charts";
import { useParams } from 'react-router-dom';

function Charts() {
  const { id } = useParams();
    console.log(id);
  const chartProps = {
    width: 1500,
    height: 700,
    timeScale: {
      timeVisible: true,
      secondsVisible: false,
    },
  };

  useEffect(() => {
    let chartelement = document.getElementById("chart");

    const chart = createChart(chartelement, chartProps);
    const candlesticks = chart.addCandlestickSeries({
      upColor: "#50ecef",
      downColor: "#ecef50",
      borderVisible: false,
      wickUpColor: "#50ecef",
      wickDownColor: "#ecef50",
    });

    let getdata = async () => {
      try {
        let res = await axios.get(`https://api.coingecko.com/api/v3/coins/${id.toLowerCase().replace(/[^a-zA-Z0-9]/g,"-")}/ohlc?vs_currency=usd&days=365`);
        const data = res.data;
        const cdata = data.map((arrItems) => {
            return {
              time: arrItems[0]/1000,
              open: arrItems[1],
              high: arrItems[2],
              low: arrItems[3],
              close: arrItems[4],
            };
          });
        console.log(cdata);
        candlesticks.setData(cdata);
        chart.timeScale().fitContent();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
        
    getdata();
  }, []);
  return (
    <div>
      <div id="chart"></div>
    </div>
  );
}

export default Charts;
