import React, { Component } from 'react';
import mapPic from './map.jpg';
import FixedImage from './FixedImage'

class Map extends Component {
    constructor() {
        super();
        console.log('right on man');
        console.log(mapPic)
    }

    render() {
        let encounters = {
            reaper: {
                x: 0.3,
                y: 0.3
            }
        }
        return (
            <div>
                <div style={{ width: '100vw', height: '100vh', backgroundImage: `url(${mapPic})`, backgroundSize: 'cover'  }} ></div>
                <FixedImage name="Map" config="" />
            </div>
        );
    }
}

export default Map;