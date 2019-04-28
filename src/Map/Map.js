import React, { Component } from 'react';
import mapPic from '../images/map.jpg';
import FixedImage from './FixedImage'
import EncounterMarker from './EncounterMarker';

class Map extends Component {
    constructor() {
        super();
        console.log('right on man');
        console.log(mapPic)
    }

    render() {
        let mapEncounters = {
            reaper: {
                x: 0.3,
                y: 0.3
            },
            slug: {
                x: 0.4,
                y: 0.6,
                
            }
        }
        return (
            <div>
                <div style={{ width: '100vw', height: '100vh', backgroundImage: `url(${mapPic})`, backgroundSize: '100% 100%'  }} ></div>
                <EncounterMarker orientation={[0.8, 0.6]}/> 
                <EncounterMarker orientation={[0.35, 0.3]}/> 
                <EncounterMarker orientation={[0.5, 0.2]}/> 
            </div>
        );
    }
}

export default Map;