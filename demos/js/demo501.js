var mycode = function() {
	'use strict';
	//hide-start
	var testTicker = Date.now(),
		testTime = testTicker,
		testNow,
		testMessage = document.getElementById('testmessage');
	//hide-end

	//define variables
	var sprites = [
        '{"type":"Group","classname":"groupnames","name":"mysprites","cell":"mycanvas_base","order":1,"visibility":true,"spriteSort":true,"regionRadius":0}',
        '{"type":"Color","classname":"designnames","name":"myRed","r":255}',
        '{"type":"Color","classname":"designnames","name":"myBlue","r":1,"g":148,"b":207,"a":0.7357016485242454,"aShift":0.002,"aBounce":true,"autoUpdate":true}',
        '{"type":"Gradient","classname":"designnames","name":"gradient","color":[{"color":"#333333","stop":0},{"color":"orange","stop":0.2},{"color":"gold","stop":0.4},{"color":"green","stop":0.6},{"color":"#cccccc","stop":0.8},{"color":"#333333","stop":1}],"setToSprite":true,"roll":0.002}',
        '{"type":"Path","classname":"spritenames","name":"myregularshape","isLine":false,"radius":50,"width":90.4508,"height":95.1057,"method":"fillDraw","data":"m50.0000,0.0000 -90.4508,29.3893 55.9017,-76.9421 0.0000,95.1057 -55.9017,-76.9421 90.4508,29.3893 z","fillStyle":"myRed","winding":"evenodd","group":"mysprites","start":{"x":100,"y":100,"z":0}}',
        '{"type":"Path","classname":"spritenames","name":"mylineshape","closed":false,"width":90,"data":"m0,0 90,0","strokeStyle":"blue","lineWidth":4,"lineCap":"round","group":"mysprites","start":{"x":300,"y":100,"z":0},"handle":{"x":"left","y":"top","z":0}}',
        '{"type":"Path","classname":"spritenames","name":"myquadshape","closed":false,"width":90,"data":"m0,0q45,-90 90,0","strokeStyle":"blue","lineWidth":4,"lineCap":"round","group":"mysprites","start":{"x":500,"y":100,"z":0},"handle":{"x":"left","y":"top","z":0}}',
        '{"type":"Path","classname":"spritenames","name":"myrectshape","isLine":false,"radius":8,"width":90,"height":40,"method":"fillDraw","data":"m37,20l-74,0c-4.399999999999977,0 -8,-3.5999999999999943 -8,-8l0,-24c0,-4.400000000000006 3.6000000000000227,-8 8,-8l74,0c4.399999999999977,0 8,3.5999999999999943 8,8l0,24c0,4.400000000000006 -3.6000000000000227,8 -8,8z","fillStyle":"lightblue","lineWidth":2,"lineJoin":"round","group":"mysprites","start":{"x":700,"y":100,"z":0}}',
        '{"type":"Shape","classname":"spritenames","name":"myregularoutline","data":"m50.0000,0.0000 -90.4508,29.3893 55.9017,-76.9421 0.0000,95.1057 -55.9017,-76.9421 90.4508,29.3893 z","isLine":false,"method":"fillDraw","radius":50,"width":90.45080000000002,"height":95.10570000000001,"fillStyle":"myRed","winding":"evenodd","group":"mysprites","start":{"x":100,"y":300,"z":0}}',
        '{"type":"Shape","classname":"spritenames","name":"mylineoutline","data":"m0,0 90,0","width":90,"strokeStyle":"blue","lineWidth":4,"lineCap":"round","group":"mysprites","start":{"x":300,"y":300,"z":0},"handle":{"x":"left","y":"top","z":0}}',
        '{"type":"Shape","classname":"spritenames","name":"myquadoutline","data":"m0,0q45,-90 90,0","width":90,"strokeStyle":"blue","lineWidth":4,"lineCap":"round","group":"mysprites","start":{"x":500,"y":300,"z":0},"handle":{"x":"left","y":"top","z":0}}',
        '{"type":"Shape","classname":"spritenames","name":"myrectoutline","data":"m37,20l-74,0c-4.399999999999977,0 -8,-3.6000000000000227 -8,-8l0,-24c0,-4.399999999999977 3.6000000000000227,-8 8,-8l74,0c4.399999999999977,0 8,3.6000000000000227 8,8l0,24c0,4.399999999999977 -3.6000000000000227,8 -8,8z","isLine":false,"method":"fillDraw","radius":8,"width":90,"height":40,"fillStyle":"lightblue","lineWidth":2,"lineJoin":"round","group":"mysprites","start":{"x":700,"y":300,"z":0}}',
        '{"type":"Picture","classname":"spritenames","name":"mypicture","source":"angelfish","imageType":"img","width":100,"height":67,"copyWidth":540,"copyHeight":360,"method":"fillDraw","strokeStyle":"Gold","lineWidth":3,"shadowBlur":4,"shadowColor":"Black","group":"mysprites","start":{"x":100,"y":500,"z":0},"url":"img/carousel/angelfish.png"}',
        '{"type":"Block","classname":"spritenames","name":"myblock","width":100,"height":100,"method":"fillDraw","fillStyle":"myBlue","strokeStyle":"Orange","lineWidth":6,"lineDash":[20,5],"group":"mysprites","start":{"x":300,"y":500,"z":0}}',
        '{"type":"Wheel","classname":"spritenames","name":"mywheel","radius":40,"width":80,"height":80,"method":"fillDraw","fillStyle":"gradient","strokeStyle":"#800","lineWidth":6,"lineDash":[20,5,5,5],"group":"mysprites","start":{"x":500,"y":500,"z":0}}',
        '{"type":"Phrase","classname":"spritenames","name":"myphrase","text":"Hello Scrawl,\\nHello World","width":124.46666717529297,"height":48,"font":"16pt Arial, Helvetica ","group":"mysprites","start":{"x":700,"y":500,"z":0}}'
      ];

	scrawl.load(sprites);

	//animation object
	scrawl.newAnimation({
		fn: function() {
			scrawl.group.mysprites.updateSpritesBy({
				roll: 1,
			});
			scrawl.render();

			//hide-start
			testNow = Date.now();
			testTime = testNow - testTicker;
			testTicker = testNow;
			testMessage.innerHTML = 'Milliseconds per screen refresh: ' + Math.ceil(testTime) + '; fps: ' + Math.floor(1000 / testTime);
			//hide-end
		},
	});
};

scrawl.loadModules({
	path: '../source/',
	minified: false,
	modules: ['saveload', 'animation', 'block', 'wheel', 'phrase', 'path', 'shape', 'images', 'color'],
	callback: function() {
		window.addEventListener('load', function() {
			scrawl.init();
			mycode();
		}, false);
	},
});