import { Application, Container, Loader, Sprite, Texture } from "pixi.js";
import { gsap } from "gsap";
import { getResource, setResources } from "./Texture.utils";
import * as particles from "@pixi/particle-emitter";
export class Game extends Application {
  constructor(opt:any){
    super(opt);
    this.nextbutton();
    this.previousbutton();
    this.image2();
    // this.button2();
    // this.image();
    // this.onclick();
  }

  public nextbutton(){
     const sprite= Sprite.from("./assets/ne.png");
     //sprite.anchor.set(0.1);
    sprite.width=innerWidth/11;
    sprite.height=innerHeight/8;
    sprite.interactive = true;
    sprite.buttonMode=true;
    sprite.x=1230;
    sprite.y=250;
    this.stage.addChild(sprite);
     
     
    //sprite.cursor = 'pointer';
   sprite.on("pointerdown",this.onclick.bind(this))

    
  }
  public previousbutton(){
    const sprite= Sprite.from("./assets/pr.png");
    // sprite.anchor.set(0.1);
    sprite.width=innerWidth/11;
    sprite.height=innerHeight/8;
    sprite.x=3;
    sprite.y=250;
    sprite.interactive = true;
    sprite.buttonMode=true;
    this.stage.addChild(sprite);
    sprite.on("pointerdown",this.onhide.bind(this))
  }
  public image2(){
    const sprite= Sprite.from("./assets/lo.png");
    sprite.anchor.set(0.1);
    sprite.width=innerWidth/2.5;
    sprite.height=innerHeight/1.5;
    sprite.x=450;
    sprite.y=150;
    sprite.interactive = true;
   //sprite.cursor = 'pointer';
    this.stage.addChild(sprite)

  }
  public image1(){
    const sprite= Sprite.from("./assets/gaming-background.jpg");
    // sprite.anchor.set(0.1);
    sprite.width=innerWidth/1.4;
    sprite.height=innerHeight/1.5;
    sprite.x=170;
    sprite.y=100;
    sprite.interactive = true;
   //sprite.cursor = 'pointer';
    this.stage.addChild(sprite)

  }
  
  public onclick(){
    this.stage.removeChildren();
    this.previousbutton();
    this.nextbutton();
    this.image1();
    
  }
  public onhide(){
    this.stage.removeChildren();
    this.nextbutton();
    this.previousbutton();
    this.image2();

  }



}
  