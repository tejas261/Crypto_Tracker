import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Cryptocurrencies() {
  const [coins, setCoins] = useState([]);
  const [coinID, setCoinID] = useState([]);
  const [coinname, setCoinname] = useState("");
  const [arr, setArr] = useState([]);
  var i = 0;
  const color = ["blue","green","yellow","gray","slate","amber","purple","pink"]


  async function fetchCoinData() {
    try {
      const res = await axios.get(import.meta.env.VITE_API_KEY1);
      const data = res.data.data.coins;
      setCoins(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchID(){
    try {
      const newRes = await axios.get("https://api.coingecko.com/api/v3/coins/list");
      const data = newRes.data
      setCoinID(data)
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
      <div className="w-[100%] h-[100%] grid grid-cols-4 left-64 relative top-0">
        <input
        onChange={(e)=>{
          setCoinname(e.target.value)
        }}
          className="mt-3 p-2 outline-none w-[200%] left-10 relative border-blue-100 rounded-2xl"
          type="text"
          placeholder="Search for your favorite crypto"
        />
        <button className="relative right-[40%] ml-[130%] top-[10%]" type="submit">
          Search
        </button>
      </div>
      { (
        <button type="submit">
      <div className="relative mt-10 left-64 right-0 text-xl grid grid-cols-4 gap-10">
      {coins.map((coin) => {
            return (
            <Link to={`/cryptos/${arr[i+=1]}`}>
            <div key={coin.uuid} className={`bg-${color[(Math.random()*10).toFixed()]}-300 p-3 rounded-lg hover:scale-90 text-left transition duration-300 ease-in-out`}>
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
              <h6>CMP: $ {Math.ceil(coin.price)}</h6>
              <h6>Market Cap: $ {Math.floor(coin.marketCap/1000000000)}B</h6>
              <h6>Daily Change: {coin.change} %</h6>
            </div>
          </div>
          </Link>
            )
          })}
        </div>
      </button>
     )}


    </div>
  );
}

export default Cryptocurrencies;
