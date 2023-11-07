import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div>
      <div className="containerr">
        <div className="sidebar">
          <div className="user-account">
            <img src="src\assets\logo.png" alt="logo" />
            <h2>Coinverse</h2>
          </div>
          <ul className="links">
            <h4>Main Menu</h4>
            <li>
              <span className="material-symbols-outlined">dashboard</span>
              <Link to='/home'>Dashboard</Link>
            </li>
            <li>
              <span className="material-symbols-outlined">show_chart</span>
              <Link to='/charts'>Charts</Link>
            </li>
            <li>
              <span className="material-symbols-outlined">news</span>
              <a href="/news">News</a>
            </li>

            <li>
            <span class="material-symbols-outlined">currency_bitcoin</span>
            <Link to='/cryptos'>Cryptocurrencies</Link>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
