'use strict'
	import * as THREE from 'three';
	import Emitter from './emitter';
	import createjs from 'preload-js';
	import World from './world';
	import Util from './util';
	
	var world;
	const preloader = new createjs.LoadQueue(true);
	
	loadAssets();
	
	
	function onComplete() {
		
		initWorld();
		
		animate();
		
	}
	
	
	
	
	
	function onProgress() {
		var percent = preloader.progress*100;
		console.log(percent);		
	}
	
	
	function initWorld() {
		
		const camera = new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,0.1,2000);
		
		camera.position.set(0,0,2);
		
		camera.lookAt(new THREE.Vector3(0,0,0));
		
		world = new World(null,camera);
	    	
		world.init();
		  	
	}
		
	
	
	function loadAssets() {
		
		preloader.on("complete", onComplete);
		
		preloader.on("progress", onProgress);
		
		preloader.loadFile({id:"img", src:"/img/vanish.png"});
		
	}
	
	function animate() {
		
		requestAnimationFrame(animate);
		
		world.render();
		
	}
	
	window.ontouchstart = function(e) { e.preventDefault(); };