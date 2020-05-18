import React from 'react';
import './carousel.css'
import AboutMe from '../../items/items'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'


const Cardui = () => {
    return (
        <div>
       <div className="center">
  <div className="property-card">
    <a >
      <div className="property-image">
        <div className="property-image-title">
 <h5>OM MIG</h5> 

        </div>
      </div></a>
    <div className="property-description">
      <h5> Card Title </h5>
      <p>Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard.</p>
    </div>
   
    
           <button className="property-social-icons">Click here to read more
         <AboutMe/>
      </button>
   
  </div>
</div>
    </div>
    );
};

export default Cardui;