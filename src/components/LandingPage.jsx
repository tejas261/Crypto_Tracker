import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  
  return (
    <div className="absolute w-[100%] h-[100%] mt-0 bg-[url('./assets//bgg.jpg')]">
      <div className="flex m-5">
        <div className="w-[100%] h-auto flex align-center">
          <img
            className="w-[30px] rounded-xl"
            src="src\assets\logo.png"
            alt=""
          />

          <h2 className="ml-3 font-bold text-2xl text-white">Coinoverse</h2>
        </div>

        <div className="w-[100%] ">
          <ul className="text-white flex ml-3 justify-evenly text-lg font-bold">
            <li>
            <Link to='/home'>Home</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/charts">Cryptocurrencies</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="content m-10">
        <h1 className="text-white xl:text-6xl font-bold w-[40%] m-10 sm:text-3xl md:text-5xl">
          Get real time insights of the current ongoings in the Crypto Market
        </h1>
        <button className="bg-black text-white rounded-xl text-2xl w-[20%] h-12 font-bold">
        <Link to='/home'>Try Now</Link>
        </button>
      </div>

      <div className="flex justify-evenly text-white font-bold text-xl bg-transparent w-[100%] absolute bottom-0">
        <div>
        <h3 className='mt-[4%]'>
          &copy; 2023 Coinoverse | All Rights Reserved
        </h3>
        </div>
        <div className="text-2xl">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-linkedin"></i>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
