import React, { Component } from 'react';
import Coverpic from './cover'
import Banner from './banner';
import './cover.css'

class Cover extends Component {
    render() {
        return (
            <div className="cover-container">
                <Banner/>
                <Coverpic/>
            </div>
        );
    }
}

export default Cover;