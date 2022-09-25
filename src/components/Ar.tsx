import 'aframe';
import 'aframe-look-at-component';
// import 'aframe-particle-system-component';
import React from 'react';
// import ReactDOM from 'react-dom';
// import '@ar-js-org/ar.js/three.js/build/ar-threex-location-only';
// import '@ar-js-org/ar.js/aframe/build/aframe-ar';
import '@ar-js-org/ar.js/aframe/build/aframe-ar-new-location-only';


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

class ARScene extends React.PureComponent {
    // constructor(props: any) {
    //     super(props);
    // }
    // componentDidMount() {
    //     document
    //         .querySelector("a-scene")!
    //         .addEventListener("loaded", this.onSceneLoad);

    //     // AFRAME.registerComponent("add-number", {
    //     //     init: function() {
    //     //     this.el.addEventListener("click", this.onClick.bind(this));
    //     //     },
    //     //     onClick: function(e: any) {
    //     //     console.error("onClick");
    //     //     }
    //     // });
    // }
    // onSceneLoad = () => {};
    render () {
        return (
            <>
            <a-scene
                vr-mode-ui="enabled: false"
                embedded
                arjs="sourceType: webcam; videoTexture: true; debugUIEnabled: true;"
                renderer='antialias: true; alpha: true'
            >

            <a-text
                value="This content will always face you."
                // look-at="[gps-camera]"
                // scale="120 120 120"
                gps-entity-place="latitude: 31.1923547; longitude: 121.4376755;"
            ></a-text>
            <a-camera gps-camera='gpsMinDistance: 1' rotation-reader> </a-camera>
            {/* <a-entity camera></a-entity> */}
            
            {/* <a-camera gps-new-camera='gpsMinDistance: 5'></a-camera> */}
            </a-scene>
            {/* <div id='setloc' style={{ 'position':'absolute', 'left': '10px', 'bottom': '2%', zIndex:'999', backgroundColor: 'blue', color: 'white', padding: '10px'}}>
                Lat: {}
                Lon: {position.coords.longitude}
            </div> */}
            </>
            // Marker version
            // <a-scene arjs="sourceType: webcam; debugUIEnabled: true;">
            //     <a-marker preset="hiro">
            //         <a-entity
            //         position="0 0 0"
            //         scale="0.05 0.05 0.05"
            //         gltf-model="./trex/scene.gltf"
            //         ></a-entity>
            //     </a-marker>
            //     <a-entity camera></a-entity>
            //     {/* <a-camera gps-new-camera='gpsMinDistance: 5'></a-camera> */}
            // </a-scene>
            // <a-scene
            //     vr-mode-ui="enabled: false;"
            //     renderer="logarithmicDepthBuffer: true;"
            //     embedded
            //     arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: true;"
            // >
            //     <a-nft
            //         type="nft"
            //         url="./trex/trex-image/trex"
            //         smooth="true"
            //         smoothCount="10"
            //         smoothTolerance=".01"
            //         smoothThreshold="5"
            //     >
            //         <a-text
            //             value="This content will always face you."
            //             look-at="[camera]"
            //             scale="120 120 120"
            //     ></a-text>
            //         <a-entity
            //             gltf-model="./trex/scene.gltf"
            //             scale="5 5 5"
            //             position="0.05 0.05 0.05"
            //         >
            //         </a-entity>
            //     </a-nft>
            //     <a-entity camera></a-entity>
            // </a-scene>


             
        );
    }
}

// ReactDOM.render(<VRScene/>, document.querySelector('#sceneContainer'));

export default ARScene;
