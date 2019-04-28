import React, { Component } from 'react';

class FixedDiv extends Component {

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
                {...this.props}
                style={{
                        width: styleWidth, // eg. 0.1 becomes 10vw
                        height: styleHeight, // eg 0.2 becomes 20 vh
                        position: "absolute",
                        top:styleTop,
                        left: styleLeft,
                        ...this.props.style
                    }}                
            >
            </div>
        );
    }
}

export default FixedDiv;