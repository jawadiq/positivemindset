import React, { Component } from 'react';
import Coverpic from './cover'
import Banner from './banner';

class Cover extends Component {
    render() {
        return (
            <div>
                <Banner/>
                <Coverpic/>
            </div>
        );
    }
}

export default Cover;