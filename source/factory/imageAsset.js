/*
# ImageAsset factory
*/
import { constructors, canvas, cell, group, artefact } from '../core/library.js';
import { mergeOver, isa_obj } from '../core/utilities.js';

import baseMix from '../mixin/base.js';
import assetMix from '../mixin/asset.js';

/*
## ImageAsset constructor
*/
const ImageAsset = function (items = {}) {

	return this.assetConstructor(items);
};

/*
## ImageAsset object prototype setup
*/
let P = ImageAsset.prototype = Object.create(Object.prototype);
P.type = 'Image';
P.lib = 'asset';
P.isArtefact = false;
P.isAsset = true;

/*
Apply mixins to prototype object
*/
P = baseMix(P);
P = assetMix(P);

/*
## Define default attributes
*/
let defaultAttributes = {

};
P.defs = mergeOver(P.defs, defaultAttributes);

let G = P.getters,
	S = P.setters,
	D = P.deltaSetters;

/*

*/
S.source = function (item = {}) {

	if (item) {

		// For &lt;img> and &lt;picture> elements
		if (['IMG', 'PICTURE'].indexOf(item.tagName.toUpperCase()) >= 0) {

			this.source = item;
			this.sourceNaturalWidth = item.naturalWidth;
			this.sourceNaturalHeight = item.naturalHeight;
			this.sourceLoaded = item.complete;
		}

		if (this.sourceLoaded) this.notifySubscribers();
	}
};


/*
## Define prototype functions
*/

/*

*/
P.checkSource = function (width, height) {

	let el = this.source;

	if (this.sourceLoaded) {

		if (this.sourceNaturalWidth !== el.naturalWidth || 
				this.sourceNaturalHeight !== el.naturalHeight || 
				this.sourceNaturalWidth !== width ||
				this.sourceNaturalHeight !== height) {

			this.sourceNaturalWidth = el.naturalWidth;
			this.sourceNaturalHeight = el.naturalHeight;

			this.notifySubscribers();
		}
	}
};

/*

*/
const gettableImageAssetAtributes = [];

/*

*/
const settableImageAssetAtributes = [];

/*
Import images from wherever

Arguments can be either string urls - 'http://www.example.com/path/to/image/flower.jpg' - in which case Scrawl-canvas:

* will attempt to give the new imageAsset object, and img element, a name/id value of eg 'flower' (but not guaranteed)
* will not add the new img element to the DOM

... or the argument can be an object with the following attributes:

* __name__ string
* __src__ url string
* __parent__ CSS search string - if set, Scrawl-canvas will attempt to append the new img element to the corresponding DOM element
* __isVisible__ boolean - if true, and new img element has been added to DOM, make that image visible; default is false
* __className__ string - list of classes to be added to the new img element
*/
const importImage = function (...args) {

	let reg = /.*\/(.*?)\./,
		results = [];

	args.forEach(item => {

		let name, url, className, visibility, 
			parent = false;

		let flag = false;

		if (item.substring) {

			let match = reg.exec(item);

			name = (match && match[1]) ? match[1] : '';
			url = item;
			className = '';
			visibility = false;
			// parent = null;

			flag = true;
		}
		else {

			item = (isa_obj(item)) ? item : false;

			if (item && item.src) {

				name = item.name || '';

				url = item.src;
				className = item.className || '';
				visibility = item.visibility || false;
				if (item.parent) parent = document.querySelector(item.parent);

				flag = true;
			}
		}	

		if (flag) {

			let image = makeImageAsset({
				name: name,
			});

			let img = document.createElement('img');

			img.name = name;
			img.className = className;
			img.crossorigin = 'anonymous';

			img.style.display = (visibility) ? 'block' : 'none';

			if (parent) parent.appendChild(img);
			
			img.onload = () => {

				image.set({
					source: img,
				});
			};
			
			img.src = url;

			image.set({
				source: img,
			});

			results.push(name);
		}
		else results.push(false);
	});
	return results;
};

/*
Import images from the DOM

Required argument is a query string used to search the dom for matching elements

Note: unlike in Scrawl-canvas v7, img elements imported from the DOM will always remain in the DOM. If those img elements should not appear on the web page or scene, then coders will need to hide them in some way - either by: positioning them (or their parent element) absolutely to the top or left of the display; or giving their parent element zero width/height; or by setting the img or parent element's style.display attribute to 'none', or their style.opacity attribute's value to 0 ... or some other clever way to hide them.
*/
const importDomImage = function (query) {

	let reg = /.*\/(.*?)\./;

	let items = document.querySelectorAll(query);

	items.forEach(item => {

		let name;

		if (['IMG', 'PICTURE'].indexOf(item.tagName.toUpperCase()) >= 0) {

			if (item.id || item.name) name = item.id || item.name;
			else {

				let match = reg.exec(item.src);
				name = (match && match[1]) ? match[1] : '';
			}

			let image = makeImageAsset({
				name: name,
				source: item,
			});

			item.onload = () => {

				image.set({
					source: item,
				});
			};
		}
	});
};

/*
We can get cells, groups and entitys to save their output as imagedata, which we can then use to build an asset which in turn can be used by Picture entitys and pattern styles
*/
const createImageFromCell = function (item, stashAsAsset = false) {

	let mycell = (item.substring) ? cell[item] || canvas[item] : item;

	if (mycell.type === 'Canvas') mycell = mycell.base;

	if (mycell.type === 'Cell') {

		mycell.stashOutput = true;

		if (stashAsAsset) mycell.stashOutputAsAsset = true;
	}
};

const createImageFromGroup = function (item, stashAsAsset = false) {

	let mygroup;

	if (item && !item.substring) {

		if (item.type === 'Group') mygroup = item;
		else if (item.type === 'Cell') mygroup = group[item.name];
		else if (item.type === 'Canvas') mygroup = group[item.base.name];
	}
	else if (item && item.substring) mygroup = group[item];

	if (mygroup) {

		mygroup.stashOutput = true;

		if (stashAsAsset) mygroup.stashOutputAsAsset = true;
	}
};

const createImageFromEntity = function (item, stashAsAsset = false) {

	let myentity = (item.substring) ? artefact[item] : item;

	if (myentity.isArtefact) {

		myentity.stashOutput = true;

		if (stashAsAsset) myentity.stashOutputAsAsset = true;
	}
};


/*
## Exported factory function
*/
const makeImageAsset = function (items) {

	return new ImageAsset(items);
};

constructors.ImageAsset = ImageAsset;

export {
	makeImageAsset,

	gettableImageAssetAtributes,
	settableImageAssetAtributes,

	importImage,
	importDomImage,

	createImageFromCell,
	createImageFromGroup,
	createImageFromEntity,
};