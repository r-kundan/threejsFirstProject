import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.124.0/build/three.module.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 50;
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.getElementById('app').appendChild(renderer.domElement);

const controls = new OrbitControls(camera ,renderer.domElement)


const ambientlight = new THREE.AmbientLight(0x404040,.8);
scene.add( ambientlight );

const pointlight = new THREE.PointLight(0xffffff,1,100)
scene.add(pointlight)

const material = new THREE.MeshStandardMaterial( { color: "red" } );
const geometry = new THREE.BoxGeometry( 3,3,3 );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );


// const material = new THREE.PointsMaterial( { color: "red", size:0.4 } );
// const geometry = new THREE.SphereGeometry( 18, 20,20); 
// const cube = new THREE.Points( geometry, material );
// scene.add( cube );



const lightgeometry = new THREE.SphereGeometry( 1, 10,12); 
const lightmaterial = new THREE.MeshBasicMaterial( { color: 0xffffff } ); 
const lightsphere = new THREE.Mesh( lightgeometry, lightmaterial );
 scene.add( lightsphere );

renderer.render(scene,camera)
 
let q = 0;
animate()
function animate() {
	requestAnimationFrame( animate );
	controls.update();
	q += 0.01
	let qSin = Math.sin(q);
	let qCos = Math.cos(q);
	cube.position.x = 3*qSin;

	let scaledSin = 30 * qSin;
	let scaledCos = 30 * qCos;
	lightsphere.position.set(scaledCos,0,scaledSin)
	pointlight.position.set(scaledCos,0,scaledSin)



	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	cube.rotation.z += 0.01;

	renderer.render( scene, camera );
}

