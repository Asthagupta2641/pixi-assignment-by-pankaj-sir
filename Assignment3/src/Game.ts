import { Application, Container, Loader, Sprite, Texture } from "pixi.js";
import { gsap } from "gsap";
import { getResource, setResources } from "./Texture.utils";
import * as particles from "@pixi/particle-emitter";
export class Game extends Application {
  constructor(opt:any){
    super(opt);
    this.nextbutton();
    this.previousbutton();
    this.image1();
    // this.button2();
    // this.image();
    // this.onclick();
  }

  public nextbutton(){
     const sprite= Sprite.from("./assets/next button.png");
     //sprite.anchor.set(0.1);
    sprite.width=innerWidth/11;
    sprite.height=innerHeight/11;
    sprite.interactive = true;
    sprite.buttonMode=true;
    sprite.x=1230;
    sprite.y=250;
    this.stage.addChild(sprite);
     
     
    //sprite.cursor = 'pointer';
   sprite.on("pointerdown",this.onclick.bind(this))

    
  }
  public previousbutton(){
    const sprite= Sprite.from("./assets/previous button.png");
    // sprite.anchor.set(0.1);
    sprite.width=innerWidth/11;
    sprite.height=innerHeight/11;
    sprite.x=3;
    sprite.y=250;
    sprite.interactive = true;
    sprite.buttonMode=true;
    this.stage.addChild(sprite);
    sprite.on("pointerdown",this.onhide.bind(this))
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
  public image2(){
    const sprite= Sprite.from("./assets/loading image.png");
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
  