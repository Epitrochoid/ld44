import React from 'react';
import FixedImage from './FixedImage';
import encounterMarkePic from '../images/encounter-marker.png';
import FixedDiv from './FixedDiv';

class EncounterMarker extends FixedImage {

    constructor(props) {
        super(props);
        this.state = {
            displayMarker: true
        }
    }
    
    render(){
        const reenableMarker = () => {
            this.setState({displayMarker: true});
        }
        const engageTooltip = () => {
            console.log('eeerrrr')
            this.setState({displayMarker: false});
        }
        const [
            x,
            y
        ] = this.props.orientation;
        return  this.state.displayMarker ? (
            <div onMouseOver={engageTooltip}>
                <FixedImage 
                    orientation={[0.02, 0.05, 0, x, y ]}
                    pic={encounterMarkePic}
                    />
            </div>
        ) : (
            <FixedDiv 
                onMouseLeave={reenableMarker}
                orientation={[0.10, 0.10, 0, x, y ]}
                style={{
                    background: 'red'
                }}
            >
                <strong>{this.props.name}</strong> <br />
                {`${this.props.name} stats go here`}
                <button onClick={()=>console.log(`fighting ${this.props.name}`)}>Fight {this.props.name}</button>
            </FixedDiv>
        ) 
    }
}

export default EncounterMarker;