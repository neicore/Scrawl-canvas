var mycode = function() {
	'use strict';
	var testTicker = Date.now(),
		testTime = testTicker,
		testNow,
		testMessage = document.getElementById('testmessage');

	//define sprite
	scrawl.makeEllipse({
		name: 'ellie',
		startX: 200,
		startY: 200,
		radiusX: 150,
		radiusY: 50,
		lineWidth: 5,
		fillStyle: 'blue',
		strokeStyle: 'red',
		method: 'fillDraw',
		shape: true,
	});

	//animation object
	scrawl.newAnimation({
		fn: function() {
			scrawl.sprite.ellie.setDelta({
				roll: 1,
			});
			scrawl.cell.mycanvas_base.set({
				backgroundColor: (scrawl.sprite.ellie.checkHit(scrawl.pad.mycanvas.getMouse())) ? 'lightblue' : 'lightgreen',
			});
			scrawl.render();

			testNow = Date.now();
			testTime = testNow - testTicker;
			testTicker = testNow;
			testMessage.innerHTML = 'Milliseconds per screen refresh: ' + Math.ceil(testTime) + '; fps: ' + Math.floor(1000 / testTime);
		},
	});
};

scrawl.loadModules({
	path: '../source/',
	minified: false,
	modules: ['shape', 'factories', 'animation'],
	callback: function() {
		window.addEventListener('load', function() {
			scrawl.init();
			mycode();
		}, false);
	},
});