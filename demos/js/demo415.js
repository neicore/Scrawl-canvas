var mycode = function() {
	'use strict';
	//hide-start
	var testTicker = Date.now(),
		testTime = testTicker,
		testNow,
		testMessage = document.getElementById('testmessage');
	//hide-end

	//define variables
	var filter,

		current_alpha = 1,
		input_alpha = document.getElementById('alpha'),
		event_alpha,

		current_channel = 'red',
		input_channel = document.getElementById('channel'),
		event_channel,

		stopE;

	//set the initial imput values
	input_alpha.value = '1';
	input_channel.value = 'red';

	//define filter
	filter = scrawl.makeSeparateFilter({
		name: 'myfilter',
		alpha: 1,
		channel: 'red',
	});

	//define entity
	scrawl.makePicture({
		name: 'parrot',
		copyWidth: 360,
		copyHeight: 360,
		pasteWidth: 360,
		pasteHeight: 360,
		copyX: 50,
		pasteX: 20,
		pasteY: 20,
		filters: ['myfilter'],
		// url: 'http://scrawl.rikweb.org.uk/img/carousel/cagedparrot.png',
		url: 'img/carousel/cagedparrot.png',
	});

	//event listeners
	stopE = function(e) {
		e.preventDefault();
		e.returnValue = false;
	};

	event_alpha = function(e) {
		stopE(e);
		current_alpha = parseFloat(input_alpha.value);
		filter.set({
			alpha: current_alpha,
		});
	};
	input_alpha.addEventListener('input', event_alpha, false);
	input_alpha.addEventListener('change', event_alpha, false);

	event_channel = function(e) {
		stopE(e);
		current_channel = input_channel.value;
		filter.set({
			channel: current_channel,
		});
	};
	input_channel.addEventListener('change', event_channel, false);

	//animation object
	scrawl.makeAnimation({
		fn: function() {

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

scrawl.loadExtensions({
	path: '../source/',
	minified: false,
	extensions: ['images', 'filters', 'animation'],
	callback: function() {
		window.addEventListener('load', function() {
			scrawl.init();
			mycode();
		}, false);
	},
});