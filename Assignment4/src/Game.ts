import { Application, Container, Loader, Sprite, Texture } from "pixi.js";
import { gsap } from "gsap";
import { getResource, setResources } from "./Texture.utils";
import * as particles from "@pixi/particle-emitter";

export class Game extends Application {
  constructor(opt:any){
    super(opt);
    this.bonusbutton();
    
    //this.previousbutton();
    //this.image1();
    // this.button2();
    // this.image();
    // this.onclick();
  }
  
  public bonusbutton(){

    const sprite= Sprite.from("./assets/bonuss.png");
    sprite.width=innerWidth/1.4;
    sprite.height=innerHeight/1.5;
    sprite.visible = false
    sprite.x=170;
    sprite.y=100;
    sprite.interactive = true;
    this.stage.addChild(sprite)

     const sprite1= Sprite.from("./assets/bonusbutton.png");
    sprite1.width=innerWidth/11;
    sprite1.height=innerHeight/11;
    sprite1.interactive = true;
    sprite1.buttonMode=true;
    sprite1.x=630;
    sprite1.y=550;
    this.stage.addChild(sprite1);
    sprite1.on("pointerdown",()=>{
      sprite.visible = true
      setTimeout(() => {
        sprite.visible = false
      }, 3000);
    })
   
     
    
  
 
    
  }
    
    

    
   
  }
  
  


  