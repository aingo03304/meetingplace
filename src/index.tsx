import React from 'react';
import { FreeCamera, Vector3, HemisphericLight, MeshBuilder, Scene, Mesh } from '@babylonjs/core';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SceneComponent from './SceneComponent';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

let box: Mesh | undefined;

const onSceneReady = (scene: Scene) => {
    var camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);
    camera.setTarget(Vector3.Zero());
    const canvas = scene.getEngine().getRenderingCanvas();
    camera.attachControl(canvas, true);

    var light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
    light.intensity = 0.7;

    box = MeshBuilder.CreateBox("box", { size: 2 }, scene);
    box.position.y = 1;

    MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, scene);
};

const onRender = (scene: Scene) => {
    if (box !== undefined) {
        var deltaTimeInMillis = scene.getEngine().getDeltaTime();
        const rpm = 10;
        box.rotation.y += (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
    }
};

root.render(
  <SceneComponent 
        id="scene-component"
        antialias
        adaptToDeviceRatio
        onRender={onRender}
        onSceneReady={onSceneReady} 
        engineOptions={undefined} 
        sceneOptions={undefined} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
