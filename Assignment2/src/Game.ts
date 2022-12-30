import { Application, Container, Loader, Sprite, Texture } from "pixi.js";
import { gsap } from "gsap";
import { getResource, setResources } from "./Texture.utils";
import * as particles from "@pixi/particle-emitter";
export class Game extends Application {
  constructor(opt:any){
    super(opt);
    this.bg();
    this.button();
    // this.button2();
    // this.image();
    // this.onclick();
  }
  public bg(){
    const sprite=Sprite.from("./assets/Assignment1bg.jpg");
    this.stage.addChild(sprite);
    sprite.width=innerWidth/1;
    sprite.height=innerHeight/1;
    
  }
 
  public button(){
     const sprite= Sprite.from("./assets/3dbutton.png");
     sprite.anchor.set(0.1);
     sprite.width=innerWidth/2.15;
     sprite.height=innerHeight/2.15;
     sprite.interactive = true;
     sprite.buttonMode=true
     
     
    //sprite.cursor = 'pointer';
    this.stage.addChild(sprite);
    sprite.on("pointerdown",this.onclick.bind(this))

    
  }
  public button2(){
    const sprite= Sprite.from("./assets/3dbutton2.png");
    // sprite.anchor.set(0.1);
    // sprite.width=innerWidth/2.15;
    // sprite.height=innerHeight/2.15;
    sprite.x=1000;
    sprite.y=300;
    sprite.interactive = true;
    sprite.buttonMode=true;
    this.stage.addChild(sprite);
    sprite.on("pointerdown",this.onhide.bind(this))
  }
  public image(){
    const sprite= Sprite.from("./assets/image.png");
    // sprite.anchor.set(0.1);
    // sprite.width=innerWidth/2.15;
    sprite.height=innerHeight/2.15;
    sprite.x=500;
    sprite.y=200;
    sprite.interactive = true;
   //sprite.cursor = 'pointer';
    this.stage.addChild(sprite)

  }
  public onclick(){
    this.stage.removeChildren();
    this.button2();
    this.image();
    
  }
  public onhide(){
    this.stage.removeChildren();
    this.bg();
    this.button();

  }



}
  