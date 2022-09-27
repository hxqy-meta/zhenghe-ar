import 'mind-ar/dist/mindar-image.prod.js';
import 'aframe';
import 'mind-ar/dist/mindar-image-aframe.prod.js';
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'a-scene': any,
            'a-marker': any,
            'a-text': any,
            'a-camera': any,
            'a-entity': any,
            'a-nft': any,
            'a-assets': any,
            'a-asset-item': any,
            'a-plane': any,
            'a-gltf-model': any,
            'a-cone': any;
        }
    }
};

const AR = () => {
    
    return (
        <a-scene 
            mindar-image="maxTrack: 2; warmupTolerance: 1; filterMinCF:0.0001; filterBeta: 0.001; imageTargetSrc: assets/zhenghe/zhenghe.mind;" 
            color-space="sRGB" 
            renderer="colorManagement: true, physicallyCorrectLights" 
            vr-mode-ui="enabled: false" 
            device-orientation-permission-ui="enabled: false"
        >
            <a-assets>
                <img id="card" src="assets/card.png" alt="card" />
                <img id="compass" src="assets/compass/compass.png" alt="compass" />
                <img id="zhenghe1" src="assets/zhenghe/zhenghe1.png" alt="drawing of zhenghe" />
                <img id="zhenghe2" src="assets/zhenghe/zhenghe2.jpeg" alt="drawing of zhenghe" />
                <a-asset-item id="avatarModel" src="assets/scene.gltf"></a-asset-item>
                <a-asset-item id="horse" src="assets/models/horse/scene.gltf"></a-asset-item>
                <a-asset-item id="warrior1" src="assets/models/warrior1/scene.gltf"></a-asset-item>
                <a-asset-item id="warrior2" src="assets/models/warrior2/scene.gltf"></a-asset-item>
            </a-assets>

            <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>
            <a-entity mindar-image-target="targetIndex: 0">
                <a-plane src="#zhenghe1" position="0 -0.4 0.2" height="1" width="1" rotation="0 0 0" animation="property: position; to: 0 0.1 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate"></a-plane> 
                <a-gltf-model rotation="90 0 0" position="0 0 0" scale="0.05 0.05 0.05" src="#warrior2" animation="property: position; to: 0 0.1 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate" />
            </a-entity>
            <a-entity mindar-image-target="targetIndex: 1">
                <a-plane src="#zhenghe2" position="0 -0.4 0" height="1" width="0.667" rotation="0 0 0"></a-plane> 
                <a-gltf-model rotation="0 0 0" position="0 0 0" scale="10 10 10" src="#horse" animation="property: position; to: 0 0.1 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate" />
            </a-entity>
        </a-scene>
    );
};

export default AR;