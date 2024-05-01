import "./style.css";
import * as THREE from "three";
import{OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import{GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"
import * as lilgui from 'lil-gui'
import gsap from "gsap";

//canvas
const canvas = document.querySelector("canvas");

//scene
const scene = new THREE.Scene();

//camera
const camera = new THREE.PerspectiveCamera(
    45, // field of view
    window.innerWidth / window.innerHeight, //ascept ratio
    0.1, //near
    1000 // far
);
//camera.position.z = 5; //move it back
//scene.add(camera);

camera.position.set(1.3, 1.3, 0.0,)
camera.rotation.set(-1.1, -1.0, 1.1)

const renderer = new THREE.WebGLRenderer({
    canvas:canvas,
});
renderer.setSize(window.innerWidth, window.innerHeight);

// orbit controls
const controls = new OrbitControls(camera, canvas);
controls.enableDumping = true;  // sense of weight 

let position = 0;

// gltf loader
const gltfLoader = new GLTFLoader();
gltfLoader.load('/models/museum2/scene.gltf', (gltf)=>{ 
    console.log('our model here',gltf);
    const model = gltf.scene;
    scene.add(model);

    window.addEventListener("mouseup", function(){
        console.log(camera.position);
        console.log(camera.rotation);
    });

    window.addEventListener("mouseup", function(){
        switch(position){
           
            case 0:
            cameraMovement(-0.554, 0.665,-0.307);
            cameraRotation(2.550,-1.276, 2.570);
            position = 1;
            break;

            case 1:
            cameraMovement(-0.523, 0.710, -0.689);
            cameraRotation(3.070, -0.687, 3.096);
            position = 2;
            break;

            case 2:
            cameraMovement(-0.641, 0.955, 0.040);
            cameraRotation(-1.562,-0.924,-1.559);
            position = 3;
            break;
            
            case 3:
            cameraMovement(0.741, 0.668 ,-0.845);
            cameraRotation(-3.140,0.006,-3.140);
            position = 4;
            break;
            
            case 4:
            cameraMovement(0.490,1.003, 1.037);
            cameraRotation(-0.283, 0.988, 0.283);
            position = 5;
            break;
           
            case 5:
            cameraMovement(0.835, 0.935, -0.730);
            cameraRotation(-1.166, 1.160, 1.134);
            position = 6;
            break;
           
            case 6:
            cameraMovement(-0.490, 1.096, 0.717);
            cameraRotation(-0.328, -0.029, -0.010);
            position = 7;
            break;
            
            case 7:
            cameraMovement(0.398, 1.280, -1.302);
            cameraRotation(-2.704, 0.171, 3.061);
            position = 8;
            break;
           
            case 8:
            cameraMovement(-0.480, 0.790, 1.702);
            cameraRotation(-0.182, -0.327, -0.059);
            position = 9;
            break;

            case 9:
            cameraMovement(-1.444, 0.950, -0.122);
            cameraRotation(-2.216, -1.285, -2.236);
            position = 0;
            break;
        }
    })
});

function cameraMovement(x, y, z){
    gsap.to(camera.position, {
        x,
        y,
        z,
        duration:3,
    });
    }
    
    
    function cameraRotation(x, y, z){
    gsap.to(camera.rotation, {
        x,
        y,
        z,
        duration:3,
    });
    }
    

const animate = () => {
    renderer.render(scene, camera);

    // controls.update();
};

renderer.setAnimationLoop(animate);

animate();
