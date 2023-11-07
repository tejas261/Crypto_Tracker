import "./App.css";
import { Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import LandingPage from "./components/LandingPage";
import News from "./components/News";
import SideBar from "./components/SideBar";
import { useState, createContext, useEffect } from "react";

import Cryptocurrencies from "./components/Cryptocurrencies";
import Charts from "./components/Charts";
import Dummy from "./components/Dummy";
export const Appcontext = createContext();

function App() {
  return (
    <>
      {window.location.pathname!="/" ? (<SideBar />) : (!<SideBar />)}
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/cryptos" element={<Cryptocurrencies />} />
        <Route path="/cryptos/:id" element={<Charts />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/dummy" element={<Dummy />} />
        <Route path="*" element={<h1>PAGE NOT FOUND!!!</h1>} />
      </Routes>
    </>
  );
}

export default App;
