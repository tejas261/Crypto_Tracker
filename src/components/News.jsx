import React, { useState, useEffect } from "react";
import axios from 'axios';

function News() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);


  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.request(import.meta.env.VITE_KEY2);
      const data = response.data.data;
      setNewsData(data.slice(0,10));
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <>
      <h1 className="font-bold m-5 text-3xl relative left-72">Latest News</h1>
       {loading ? (
        <p>Loading...</p>
      ) : (
        newsData.map((arrItems) => ( 
          <div className="relative left-64 top-0 mb-5">
          <div key={arrItems.id} className=" p-5 rounded-lg bg-slate-200 md:w-[64%] max-w-[768px]">
            <div className="flex justify-between">
              <span className="w-[60%] font-bold">
                <a target="_blank" href={arrItems.url}><h1>{arrItems.title}</h1></a>
              </span>
              <span className="w-[10%] h-[20%] rounded-3xl">
                <img width={100} height={100} src={arrItems.image_url} alt="img" />
              </span>
            </div>
            <p>{arrItems.description}</p>
            <p className="font-bold">{new Date().getUTCHours()- arrItems.published_at.slice(11,12)-0} hours ago</p>
          </div>
          </div>
        ))
      )} 

          {/* <div className="absolute right-36 p-5 bg-red-400 h-auto w-[20%] ">
            <div className="p-2 ml-20 text-xl font-bold italic">
             <img src="" alt="" /> 
             <h2>BTC</h2> 
            </div><hr />
            
            <div  className="p-2 ml-20 text-xl font-bold italic">
             <img src="" alt="" /> 
             <h2>ETH</h2>
            </div>

            <div  className="p-2 ml-20 text-xl font-bold italic">
             <img src="" alt="" /> 
             <h2>XRP</h2>
            </div>

            <div  className="p-2 ml-20 text-xl font-bold italic">
             <img src="" alt="" /> 
             <h2>DOT</h2>
            </div>

            <div  className="p-2 ml-20 text-xl font-bold italic">
             <img src="" alt="" /> 
             <h2>TRON</h2>
            </div>
          </div> */}

         

    </>
  );
}

export default News;
