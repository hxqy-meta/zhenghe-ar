import './index.css';
import html2canvas from 'html2canvas';

const ARButton = () => {

    type screenshot = {
        capture?: any,
        getCanvas?: any;
    }

    function take_photo()
    {
        document.querySelector("video").pause();

        const videoElement = document.getElementsByTagName("video")[0];

        const canvasElement = document.createElement("canvas") as unknown as HTMLCanvasElement;

        var window_width = window.outerWidth;
        var window_height = window.outerHeight;


        var v_width = videoElement.offsetWidth;
        var v_height = videoElement.offsetHeight;

        var a_width = document.querySelector('a-scene').components.screenshot.data.width * 0.5;
        var a_height = document.querySelector('a-scene').components.screenshot.data.height * 0.5;
        canvasElement.width = window.outerWidth;
        canvasElement.height = window.outerHeight;
        
        // if (canvasElement.getContext('2d') == null) return;
        canvasElement.getContext('2d')!.drawImage(videoElement, 0, videoElement.offsetTop, v_width, v_height);

        var screenshot = document.querySelector('a-scene').components.screenshot as screenshot;
        var imgData = screenshot.getCanvas('perspective');

        canvasElement.getContext('2d')!
            .drawImage(imgData, 0, 0, window_width, window_height);
            
        var a = document.createElement('a') as unknown as HTMLAnchorElement;
        a.href = canvasElement.toDataURL("image/png");
        a.download = 'download.png';
        a.click();

        document.querySelector("video").play();
    }

    const handleCamera = () => {
        // let screenshot = document.querySelector('a-scene').components.screenshot as screenshot;
        // screenshot.capture('perspective');
        take_photo();
        // html2canvas(document.querySelector("#capture")).then(canvas => {
        //     console.log(canvas);
        //     let image = canvas.toDataURL('image/jpeg');
        //     window.open(image);
        // });
    };

    return (

        <div className="photo-button" onClick={handleCamera}>
            <div className="circle"></div>
            <div className="ring"></div>
        </div>
    )
};

export default ARButton;