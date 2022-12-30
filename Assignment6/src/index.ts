import { Application } from 'pixi.js';
import { Game } from './Game';
import './css/main.css';
import src from 'gsap/src';
/***
 * Register pixi particles
 */
 // import {ParticleRenderer} from '@pixi/particle-container';
 // import {extensions} from '@pixi/core';
 
 // extensions.add(ParticleRenderer);
 ///;
window.onload = ()=>{
    const gameDiv:HTMLDivElement = <HTMLDivElement>document.getElementById('game');
    const app:Application = new Game({
        //resizeTo: gameDiv,
        width:innerWidth/1.01,
        height:innerHeight/1.01,
        
        
    });
    gameDiv.appendChild(app.view);
}
