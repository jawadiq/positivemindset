import React from 'react';
import Pcover from '../resources/coverp.png';
import './cover.css'

const Coverpic = () => {
    return (
        <div className="cover-top">
              <img src={Pcover} alt="main" className="image-main"></img>
        </div>
    );
};

export default Coverpic;