import React, { useState, useEffect } from "react";
import axios from 'axios';

function News() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);


  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.request(import.meta.env.VITE_KEY2);
      const data = response.data.results;
      console.log(data);
      setNewsData(data.slice(0,20));
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
            </div>
            <p className="font-bold">{new Date(arrItems.published_at).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})}</p>
          </div>
          </div>
        ))
      )}       
    </>
  );
}

export default News;
