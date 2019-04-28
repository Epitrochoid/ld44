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
        let monsters = {
            reaper: {
                x: 0.3,
                y: 0.3
            },
            slug: {
                x: 0.4,
                y: 0.6,
            },
            squirrel: {
                x: 0.85,
                y: 0.4,
            }
        }
        const mapEncounters = Object.keys(monsters).map(monsterName => ({
            x: monsters[monsterName].x,
            y: monsters[monsterName].y,
            name: monsterName
        }))
        console.log(mapEncounters)
        return (
            <div>
                <FixedImage orientation={[1, 1, 0, 0, 0]} pic={mapPic} />
                {mapEncounters.map(encounter => (
                    <EncounterMarker name={encounter.name} orientation={[encounter.x, encounter.y]}/>
                ))}
            </div>
        );
    }
}

export default Map;