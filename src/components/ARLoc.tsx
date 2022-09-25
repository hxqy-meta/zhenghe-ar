import React from 'react';
// import ReactDOM from 'react-dom';

// AR.JS libraries are GLOBAL.


declare global {
    namespace JSX {
        interface IntrinsicElements {
            'a-scene': any,
            'a-marker': any,
            'a-text': any,
            'a-camera': any,
            'a-entity': any,
            'a-nft': any,
            'a-cone': any;
        }
    }
};

// declare var AFRAME: any;


class ARScene extends React.Component {

    render () {
        return (
            <a-scene
                vr-mode-ui="enabled: false"
                embedded
                arjs="sourceType: webcam; debugUIEnabled: true;"
                >
                <a-text
                    value="This content will always face you."
                    look-at="[gps-camera]"
                    scale="120 120 120"
                    gps-entity-place="latitude: 31.189857; longitude: 121.441883;"
                ></a-text>
                <a-camera gps-camera rotation-reader> </a-camera>

            </a-scene>
        );
    }
}

export default ARScene;
