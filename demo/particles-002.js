// # Demo Particles 002 
// Emitter using artefacts

// [Run code](../../demo/particles-002.html)
import scrawl from '../source/scrawl.js'

import { reportSpeed } from './utilities.js';

// Get Scrawl-canvas to recognise and act on device pixel ratios greater than 1
scrawl.setIgnorePixelRatio(false);


// #### Scene setup
let canvas = scrawl.library.artefact.mycanvas;

scrawl.importDomImage('#bunny');

canvas.setBase({
    backgroundColor: '#000040',
});


// Create entitys that we can use with the particle emitter
// + Set various `noXYZ` flags to false in the hope that this will speed up stamp computation times
// + Set `visibility` to false to prevent the entity appearing in the scene outside of the emitter's control
// + No need to set `fillStyle` and `strokeStyle` colors - we'll do that via the particle emitter and the world object
let commonValues = {
    handle: ['center', 'center'],
    lineWidth: 2,
    method: 'fillThenDraw',
    visibility: false, 
    noUserInteraction: true,
    noPositionDependencies: true,
    noFilters: true,
    noDeltaUpdates: true,
};

let wheel = scrawl.makeWheel({ 
    name: 'particle-wheel-entity',
    radius: 16, 
    startAngle: 20,
    endAngle: -20,
    includeCenter: true,
}).set(commonValues);

let block = scrawl.makeBlock({ 
    name: 'particle-block-entity',
    dimensions: [30, 20],
}).set(commonValues);

let star = scrawl.makeStar({
    name: 'particle-star-entity',
    radius1: 18,
    radius2: 12,
    points: 5,
}).set(commonValues);

let picture = scrawl.makePicture({
    name: 'particle-image-entity',
    asset: 'bunny',
    width: 26,
    height: 37,
    copyWidth: '100%',
    copyHeight: '100%',
}).set(commonValues);

let phrase = scrawl.makePhrase({
    name: 'particle-phrase-entity',
    text: 'Hello',
    font: 'bold 40px Garamond, serif',
    exposeText: false,
}).set(commonValues);


// #### Particle physics animation scene

// Create a World object which we can then assign to the particle emitter
let myWorld = scrawl.makeWorld({

    name: 'demo-world',

    tickMultiplier: 2,

    userAttributes: [
        {
            key: 'strokeStyle', 
            defaultValue: '#b9b5df',
        },
        {
            key: 'globalAlpha', 
            defaultValue: 0.2,
        },
    ],
});


// Create the particle Emitter entity
// + Emitter entitys include functionality for assigning randomized fillStyle and strokeStyle colors to the particles they generate. They do this through the use of a Color factory in the emitter. By default the emitter will assign the full range of random colors to each particle (which then remembers its color). 
// + We can restrict the range of colors generated by setting the minimum and maximum color values on these color factories - see the user interaction code near the end of this file for details.
const myemitter = scrawl.makeEmitter({

    name: 'use-artefact',
    world: myWorld,

    start: ['center', 'center'],

    historyLength: 20,

    generationRate: 10,
    killAfterTime: 5,

    // As well as killing our particles beyond their lifetime limit (as set in `killAfterTime`) we can also kill particles that move a certain distance beyond their initial position
    killRadius: 50, 
    killRadiusVariation: 0,

    // Assign the artefact that we will be using for the particle animation
    artefact: star,

    rangeX: 40,
    rangeFromX: -20,

    rangeY: 40,
    rangeFromY: -20,

    rangeZ: -1,
    rangeFromZ: -0.2,

    // Define the stampAction function
    stampAction: function (artefact, particle, host) {

        // We will use the (semi-)random `fill` color assigned to the particle when it was generated
        let {history, fill} = particle;
        let remaining, scale, roll, start, z;

        // For the stroke color, we shall give all particles the same color, as defined in our World object
        let {strokeStyle, globalAlpha} = myWorld;

        // We will display each particle on the canvas using the entity currently assigned to our emitter's `artefact` attribute
        history.forEach((p, index) => {

            // Entitys use Scrawl-canvas Coordinate arrays for their positioning data; we can set the `start` Coordinate using a normal Array containing `[x, y]` data - which we can easily extract from the particle's history arrays like so:
            [remaining, z, ...start] = p;
            
            // We change the size of this instance of the particle based on it's `z coordinate` value, by scaling the artefact.
            scale = 1 + (z / 3);

            if (scale > 0) {

                // We can roll the artefact (for added drama), calculating the `roll` value based on the amount of time left before the particle gets killed.
                roll = (remaining / 5) * 720;

                // The artefact's `simpleStamp` function bypasses much of the normal Display cycle functionality; instead it forces the artefact to stamp itself onto the host Cell's &lt;canvas> element immediately
                // + The first argument is the host Cell object,
                // + The second argument is a normal JS object containing key:value pairs describing the changes we want to make to the artefact prior to it stamping itself onto the canvas.
                artefact.simpleStamp(host, {
                    start, 
                    scale, 
                    roll, 
                    globalAlpha,
                    strokeStyle, 
                    fillStyle: fill, 
                });
            }
        });
    },
});


// #### Scene animation
// Function to display frames-per-second data, and other information relevant to the demo
const particlenames = scrawl.library.particlenames,
    particle = scrawl.library.particle;

const report = reportSpeed('#reportmessage', function () {

    // ParticleHistory arrays are not saved in the Scrawl-canvas library; instead we need to count them in each particle
    let historyCount = 0;
    particlenames.forEach(n => {

        let p = particle[n];
        if (p) historyCount += p.history.length;
    });

    let kr = parseFloat(killRadius.value),
        krv = parseFloat(killRadiusVariation.value) / 2;

    return `    Particles: ${particlenames.length}, generationRate: ${generationRate.value}, historyLength: ${historyLength.value}
    Stamps per display: ${historyCount}

    Background color: ${background.value}, World speed (tickMultiplier): ${worldSpeed.value}
    Outline color (strokeStyle): ${outlineColor.value}, Opacity (globalAlpha): ${opacity.value}
    Kill radius: from ${(kr - krv) > 0 ? kr - krv : 0}px to ${kr + krv}px
    Minimum fill color: ${minFill.value}, Maximum fill color: ${maxFill.value}`;
});

let mouseCheck = function () {

    let active = false;

    return function () {

        if (canvas.here.active !== active) {

            active = canvas.here.active;

            myemitter.set({
                lockTo: (active) ? 'mouse' : 'start'
            });
        }
    };
}();

// Create the Display cycle animation
scrawl.makeRender({

    name: 'demo-animation',
    target: canvas,
    commence: mouseCheck,
    afterShow: report,
});


// #### User interaction
// For this demo we will suppress touchmove functionality over the canvas
scrawl.addNativeListener('touchmove', (e) => {

    e.preventDefault();
    e.returnValue = false;

}, canvas.domElement);

// Setting (restricting) the range of colors assigned to particles when they are generated.
const setLowColor = function () {

    const selector = document.querySelector('#min-fill'),
        colorFactory = myemitter.fillColorFactory;

    return function () {

        colorFactory.setMinimumColor(selector.value);
    }
}();
scrawl.addNativeListener(['input', 'change'], setLowColor, '#min-fill');

const setHighColor = function () {

    const selector = document.querySelector('#max-fill'),
        colorFactory = myemitter.fillColorFactory;

    return function () {

        colorFactory.setMaximumColor(selector.value);
    }
}();
scrawl.addNativeListener(['input', 'change'], setHighColor, '#max-fill');

// Change the artefact to be used in the animation
const useArtefact = function () {

    const selector = document.querySelector('#artefact');

    let choice, val;

    return function () {

        val = selector.value;
        choice = false;

        switch (val) {

            case 'star' :
                choice = star;
                break;

            case 'wheel' :
                choice = wheel;
                break;

            case 'block' :
                choice = block;
                break;

            case 'picture' :
                choice = picture;
                break;

            case 'phrase' :
                choice = phrase;
                break;
        }

        if (choice) {

            myemitter.set({
                artefact: choice,
            });
        }
    }
}();
scrawl.addNativeListener(['input', 'change'], useArtefact, '#artefact');

// Setup other form observer functionality
scrawl.observeAndUpdate({

    event: ['input', 'change'],
    origin: '.controlItem',

    target: myWorld,

    useNativeListener: true,
    preventDefault: true,

    updates: {

        'outline-color': ['strokeStyle', 'raw'],
        'world-speed': ['tickMultiplier', 'float'],
        'opacity': ['globalAlpha', 'float'],
    },
});

scrawl.observeAndUpdate({

    event: ['input', 'change'],
    origin: '.controlItem',

    target: myemitter,

    useNativeListener: true,
    preventDefault: true,

    updates: {

        generationRate: ['generationRate', 'int'],
        historyLength: ['historyLength', 'int'],
        'kill-radius': ['killRadius', 'int'],
        'kill-radius-variation': ['killRadiusVariation', 'int'],
    },
});

scrawl.observeAndUpdate({

    event: ['input', 'change'],
    origin: '.controlItem',

    target: canvas,

    useNativeListener: true,
    preventDefault: true,

    updates: {

        background: ['backgroundColor', 'raw'],
    },
});


const worldSpeed = document.querySelector('#world-speed'),
    minFill = document.querySelector('#min-fill'),
    maxFill = document.querySelector('#max-fill'),
    background = document.querySelector('#background'),
    outlineColor = document.querySelector('#outline-color'),
    opacity = document.querySelector('#opacity'),
    killRadius = document.querySelector('#kill-radius'),
    killRadiusVariation = document.querySelector('#kill-radius-variation'),
    historyLength = document.querySelector('#historyLength'),
    generationRate = document.querySelector('#generationRate');

minFill.value = '#000000';
maxFill.value = '#ffffff';
outlineColor.value = '#F0F8FF';
background.value = '#000040';
worldSpeed.value = 2;
opacity.value = 0.2;
generationRate.value = 10;
historyLength.value = 20;
killRadius.value = 50;
killRadiusVariation.value = 0;

document.querySelector('#artefact').value = 'star';


// #### Development and testing
console.log(scrawl.library);
