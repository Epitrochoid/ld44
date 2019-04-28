import React, { Component } from 'react';

class FixedImage extends Component {

    render(){
        let [
            width,
            height,
            rotation,
            x,
            y
        ] = this.props.orientation;
        let styleWidth = width * 100 + 'vw';
        let styleHeight = height * 100 + 'vh';
        let styleLeft = x * 100 + 'vw'
        let styleTop = y * 100 + 'vh'
        return (
            <div 
                style={{
                        width: styleWidth, // eg. 0.1 becomes 10vw
                        height: styleHeight, // eg 0.2 becomes 20 vh
                        backgroundImage: `url(${this.props.pic})`,
                        backgroundSize: '100% 100%',
                        position: "absolute",
                        top:styleTop,
                        left: styleLeft
                    }}>
            </div>
        );
    }
}

export default FixedImage;