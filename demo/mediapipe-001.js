// # Demo Mediapipe 001
// MediaPipe Selfie Segmentation - model image output

// [Run code](../../demo/mediapipe-001.html)
import * as scrawl from '../source/scrawl.js';

import { reportSpeed } from './utilities.js';


// #### Scene setup
const canvas = scrawl.library.artefact.mycanvas;


scrawl.makeFilter({
    name: 'grayscale',
    method: 'grayscale',
}).clone({
    name: 'sepia',
    method: 'sepia',
}).clone({
    name: 'invert',
    method: 'invert',
}).clone({
    name: 'red',
    method: 'red',
});

scrawl.makeFilter({
    name: 'pixelate',
    method: 'pixelate',
    tileWidth: 20,
    tileHeight: 20,
    offsetX: 8,
    offsetY: 8,
});

scrawl.makeFilter({
    name: 'background-blur',
    method: 'gaussianBlur',
    radius: 20,
});

scrawl.makeFilter({
    name: 'body-blur',
    method: 'gaussianBlur',
    radius: 10,
});

// #### MediaPipe functionality
// We'll handle everything in a raw asset object, which a Picture entity can then use as its source
const myAsset = scrawl.makeRawAsset({

    name: 'mediapipe-model-interpreter',

    userAttributes: [{

        // MediaPipe gives us imageData objects which we can drawImaghe into the RawAsset canvas element
        key: 'mask',
        defaultValue: [],
        setter: function (item) {

            item = (item.segmentationMask) ? item.segmentationMask : false;

            if (item) {

                this.canvasWidth = item.width;
                this.canvasHeight = item.height;
                this.mask = item;
                this.dirtyData = true;
            }
        },
    },{
        key: 'canvasWidth',
        defaultValue: 0,
        setter: () => {},
    },{
        key: 'canvasHeight',
        defaultValue: 0,
        setter: () => {},
    }],

    updateSource: function (assetWrapper) {

        const { element, engine, canvasWidth, canvasHeight, mask } = assetWrapper;

        if (canvasWidth && canvasHeight && mask) {

            // Clear the canvas, resizing it if required
            element.width = canvasWidth;
            element.height = canvasHeight;

            engine.drawImage(mask, 0, 0, canvasWidth, canvasHeight);
        }
    },
});


// The forever loop function, which captures the MediaPipe model's output and passes it on to our raw asset for processing
const perform = function (mask) {

    myAsset.set({ mask });

    if (!myOutline) {

        // Display the visual generated by our raw asset
        myOutline = scrawl.makePicture({

            name: 'outline',
            asset: 'mediapipe-model-interpreter',
            order: 0,

            width: '100%',
            height: '100%',

            copyWidth: '80%',
            copyHeight: '80%',
            copyStartX: '10%',
            copyStartY: '10%',

            // We blur here to make the outline merge into the background
            // + this does slow the demo down, but needs must.
            filters: ['body-blur'],
        });
    }
};


// ##### Import and use livestream
// convenience handle for the media stream asset
let video, model, myBackground, myOutline;

// Capture the media stream
scrawl.importMediaStream({

    name: 'device-camera',
    audio: false,
})
.then(mycamera => {

    video = mycamera;

    // This fixes the issue in Firefox where the media stream will crash Tensorflow if the stream's video element's dimensions have not been set
// @ts-expect-error
    video.source.width = "1280";
// @ts-expect-error
    video.source.height = "720";

    // Take the media stream and display it in our canvas element
    myBackground = scrawl.makePicture({

        name: 'background',
        asset: mycamera.name,
        order: 2,

        width: '100%',
        height: '100%',

        copyWidth: '80%',
        copyHeight: '80%',
        copyStartX: '10%',
        copyStartY: '10%',

        visibility: false,
        globalCompositeOperation: 'destination-over',
    });

    myBackground.clone({

        name: 'body',
        order: 1,
        visibility: true,
        globalCompositeOperation: 'source-in',
    });

    // Start the MediaPipe model
/* eslint-disable */
// @ts-expect-error
    model = new SelfieSegmentation({

/* eslint-enable */
        locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/selfie_segmentation/${file}`
    });

    model.setOptions({ modelSelection: 1 });
    model.onResults(perform);

    // Use MediaPipe's camera functionality to get updates to the forever loop
/* eslint-disable */
// @ts-expect-error
    const mediaPipeCamera = new Camera(video.source, {

/* eslint-enable */
        onFrame: async () => {

            await model.send({image: video.source});
        },

        width: 1280,
        height: 720,
    });

    mediaPipeCamera.start();
})
.catch(err => console.log(err.message));


// #### Scene animation
// Function to display frames-per-second data, and other information relevant to the demo
const report = reportSpeed('#reportmessage');


// Create the Display cycle animation
scrawl.makeRender({

    name: 'demo-animation',
    target: canvas,
    afterShow: report,
});


// #### User interaction
// Event listeners
scrawl.addNativeListener(['input', 'change'], (e) => {

    e.preventDefault();
    e.returnValue = false;

    if (e && e.target) {

        const id = e.target.id,
            val = e.target.value;

        if ('backgroundFilter' === id) {

            myBackground.clearFilters();

            if (val) {

                myBackground.set({
                    visibility: true,
                });

                myBackground.addFilters(val);
            }
            else {

                myBackground.set({
                    visibility: false,
                });
            }
        }
        else {

            if ('1' === val) myOutline.addFilters('body-blur');
            else myOutline.clearFilters();
        }
    }
}, '.controlItem');

// Set DOM form initial input values
// @ts-expect-error
document.querySelector('#backgroundFilter').value = '';
// @ts-expect-error
document.querySelector('#outlineFilter').value = '1';


// #### Development and testing
console.log(scrawl.library);

