import React, { Component } from 'react';
import FixedDiv from './FixedDiv';

class FixedImage extends Component {

    render(){
        return (
            <FixedDiv
                {...this.props}
                style={{
                    backgroundImage: `url(${this.props.pic})`,
                    backgroundSize: '100% 100%',
                }}
                />
        )
    }
}

export default FixedImage;