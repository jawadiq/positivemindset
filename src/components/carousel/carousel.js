import React from "react";
import Cardui from './cards';


import "./carousel.css";

const Carrousel = () => {
  return <div className="carosel">
      <div className="conone">
      <div className="card-one"><Cardui/></div>
      <div className="card-two"><Cardui/></div>
      <div className="card-three"><Cardui/></div>

      </div><div className="contwo">
      <div className="card-four"><Cardui/></div>
      <div className="card-five"><Cardui/></div>
      <div className="card-six"><Cardui/></div>
      </div>
     
  </div>
};

export default Carrousel;
