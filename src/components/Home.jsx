import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
 

function Home() {
  const [coins, setCoins] = useState([]);
  const [stats, setstats] = useState([]);
  const color = ["blue","green","yellow","gray","slate","amber","purple","pink","orange"]
  async function fetchCoinData() {
    try {
      const res = await axios.get(import.meta.env.VITE_API_KEY1);
      const data = res.data.data.coins;
      console.log(res.data.data);
      setCoins(data.slice(0,10));
      setstats(res.data.data.stats)
      console.log(stats);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCoinData();
  }, []);
  return (
    <>
      <div className="relative mt-5 left-64 top-0 text-2xl font-bold">
        <h1>Global Stats</h1>
        <div className="m-2 grid grid-cols-2 text-black text-2xl md:text-lg">
          <div>
            <h3>Total Cryptocurrencies</h3>
            <h2>{stats.total}</h2>
          </div>
          <div>
            <h3>Total Market Cap</h3>
            <h2>$ {Math.floor(stats.totalMarketCap/100000000000)}B </h2>
          </div>
          <div>
            <h3>Total Exchanges</h3>
            <h2>{stats.totalExchanges}</h2>
          </div>
          <div>
            <h3>Total 24h Volume</h3>
            <h2>$ {Math.floor(parseFloat(stats.total24hVolume/100000000000)).toFixed(2)}B </h2>
          </div>
          <div>
            <h3>Total Markets</h3>
            <h2> {stats.totalMarkets}</h2>
          </div>
        </div>
      </div>

      <div className="relative mt-5 left-64 top-0 text-2xl font-bold flex justify-between">
        <h1>Top Cryptocurrencies by Market Cap</h1>
        <Link to="/cryptos" className=' text-blue-700'>See More</Link>
        </div>
      { (
        <div className="relative mt-10 left-64 right-0 text-xl grid grid-cols-4 gap-10">
          {coins.map((coin) => (
            <div key={coin.id} className={`bg-${color[(Math.random()*20).toFixed()]}-200 p-3 rounded-lg hover:scale-90 transition duration-300 ease-in-out`}>
              <div className="flex justify-between">
                <span className="inline-block">
                  <h5 className="font-bold">{coin.name}</h5>
                </span>
                <span>
                  <img width={40} src={coin.iconUrl} alt={coin.name} />
                </span>
              </div>

              <div>
                <h6>Rank: {coin.rank}</h6>
                <h6>Market Cap: $ {Math.floor(coin.marketCap/1000000000)}B</h6>
                <h6>Daily Change: {coin.change} %</h6>
              </div>
            </div>
          ))}
        </div>
      )}

    </>
  );
}

export default Home;
