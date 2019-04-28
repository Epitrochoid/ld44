import React from 'react';
import FixedImage from './FixedImage';
import encounterMarkePic from '../images/encounter-marker.png';

class EncounterMarker extends FixedImage {

    constructor(props) {
        super(props);
        this.state = {
            displayMarker: true
        }
    }
    engageTooltip(){
        console.log('eeerrrr')
        this.state.setState({disableMarker: false});
    }
    
    render(){
        const reenableMarker = () => {
            this.state.setState({disableMarker: true});
        }
        const [
            x,
            y
        ] = this.props.orientation;
        console.log('buggy')
        return  this.state.displayMarker ? (
            <FixedImage 
                orientation={[0.02, 0.05, 0, x, y ]}
                pic={encounterMarkePic} 
                onMouseOver={console.log}
                />
        ) : (
            <div>
                sup
            </div>
        ) 
    }
}

export default EncounterMarker;