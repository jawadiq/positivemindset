import React from "react";
import Header from "./components/header-footer/header";
import "./App.css";
import Nata from "./resources/banner.svg";
import Features from "./components/carousel/index";
import Cover from "./cover/index";
import Footer from "./footer/footer";
import Designer from "./components/container/designers/designers";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="appmain">
        <img src={Nata} alt="main" className="image-main"></img>

        <Cover />
      </div>
      <Features />
      {/* <Designer/> */}
      {/* <Footer /> */}
    </div>
    
  );
}

export default App;
