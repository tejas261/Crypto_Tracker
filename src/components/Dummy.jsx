import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dummy() {
  const [coins, setCoins] = useState([]);
  const [coinID, setCoinID] = useState([]);
  const [arr, setArr] = useState([]);

  async function fetchCoinData() {
    try {
      const res = await axios.get("https://api.coinranking.com/v2/coins");
      const data = res.data.data.coins;
      setCoins(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchID() {
    try {
      const newRes = await axios.get("https://api.coingecko.com/api/v3/coins/list");
      const data = newRes.data;
      setCoinID(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCoinData();
    fetchID();
  }, []);

  useEffect(() => {
    const matchedCoins = coins.map((coin) => {
      const coinMatch = coinID.find((id) => id.name === coin.name);
      return coinMatch ? coinMatch.id : null;
    });
    setArr(matchedCoins);
  }, [coins, coinID]);

  return (
    <div>
      {arr.map((coinId) => {
        if (coinId) {
          console.log(coinId);
          return (
            <div>
              {/* Render the coin information here */}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

export default Dummy;
