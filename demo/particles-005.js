// # Demo Particles 005 
// Emit particles from inside an artefact's area

// [Run code](../../demo/particles-005.html)
import * as scrawl from '../source/scrawl.js'

import { reportSpeed } from './utilities.js';


// #### Scene setup
const canvas = scrawl.library.artefact.mycanvas;

scrawl.library.group[canvas.base.name].set({

    order: 1,
})


// Create draggable entitys which will act as the areas in which particles will be generated by the Emitter entitys 
const dragItems = scrawl.makeGroup({

    name: 'my-drag-items',
    host: canvas.base.name,
    order: 0,
});

scrawl.makePhrase({

    name: 'hello',
    group: 'my-drag-items',

    text: 'HELLO!',

    font: 'bold 100px sans-serif',
    lineHeight: 0.8,

    startX: 70,
    startY: 200,

    handleX: 20,
    handleY: 20,

    roll: -30,
    scale: 1.1,

    fillStyle: 'aliceblue',
    method: 'fillThenDraw',

});

scrawl.makeShape({

    name: 'myshape',
    group: 'my-drag-items',

    pathDefinition: 'M266.2,703.1 h-178 L375.1,990 l287-286.9 H481.9 C507.4,365,683.4,91.9,911.8,25.5 877,15.4,840.9,10,803.9,10 525.1,10,295.5,313.4,266.2,703.1 z',

    start: [400, 300],
    handle: ['center', 'center'],

    scale: 0.2,
    roll: -90,
    flipUpend: true,
    scaleOutline: false,

    fillStyle: 'aliceblue',
    method: 'fillThenDraw',
});


// #### Particle physics animation scene

// Create a World object which we can then assign to the particle emitter
const myWorld = scrawl.makeWorld({

    name: 'demo-world',
    tickMultiplier: 2,
});

// Create the particle Emitter entity
scrawl.makeEmitter({

    name: 'emitter-one',
    world: myWorld,

    generationRate: 60,
    killAfterTime: 5,

    rangeZ: 0.3,
    rangeFromZ: 0.1,

    // We tell the Emitter to generated its Particles randomly, with initial start coordinates constrained to within the area defined by another artefact - we can set the `generateInArea` attribute by the artefact's name String, or the artefact object itself.
    generateInArea: 'hello',

    // This is the entity the Emitter will be stamping
    artefact: scrawl.makeWheel({

        name: 'particle-wheel-entity',

        radius: 12,

        handle: ['center', 'center'],

        globalCompositeOperation: 'source-atop',

        fillStyle: 'blue',
        strokeStyle: 'white',
        method: 'fillThenDraw',
        visibility: false, 

        noUserInteraction: true,
        noPositionDependencies: true,
        noFilters: true,
        noDeltaUpdates: true,
    }),

    stampAction: function (artefact, particle, host) {

        const history = particle.history;
        
        let remaining, globalAlpha, scale, start, z, roll;

        history.forEach(p => {

            [remaining, z, ...start] = p;
            
            globalAlpha = remaining / 6;
            scale = 1 + (z / 3);

            if (globalAlpha > 0 && scale > 0) {

                roll = globalAlpha * 720;
                artefact.simpleStamp(host, {start, scale, globalAlpha, roll});
            }
        });
    },

// Test that we can clone the Emitter entity
}).clone({

    name: 'emitter-two',
    generateInArea: 'myshape',

    artefact: scrawl.makeBlock({

        name: 'particle-block-entity',

        width: 20,
        height: 20,

        handle: ['center', 'center'],

        fillStyle: 'red',
        method: 'fillThenDraw',
        visibility: false, 

        globalCompositeOperation: 'source-atop',

        noUserInteraction: true,
        noPositionDependencies: true,
        noFilters: true,
        noDeltaUpdates: true,
    }),
});


// #### Scene animation
// Function to display frames-per-second data, and other information relevant to the demo
const particlenames = scrawl.library.particlenames,
    particle = scrawl.library.particle;

const report = reportSpeed('#reportmessage', function () {

    // ParticleHistory arrays are not saved in the Scrawl-canvas library; instead we need to count them in each particle
    let historyCount = 0;
    particlenames.forEach(n => {

        const p = particle[n];
        if (p) historyCount += p.history.length;
    });

    return `    Particles: ${particlenames.length}
    Stamps per display: ${historyCount}`;
});


// Create the Display cycle animation
scrawl.makeRender({

    name: 'demo-animation',
    target: canvas,
    afterShow: report,
});


// #### User interaction
scrawl.makeDragZone({

    zone: canvas,
    collisionGroup: dragItems,
    endOn: ['up', 'leave'],
    exposeCurrentArtefact: true,
    preventTouchDefaultWhenDragging: true,
});


// #### Development and testing
console.log(scrawl.library);
