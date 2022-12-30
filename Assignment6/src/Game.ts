import { Application, Container, Loader, Sprite, Texture } from "pixi.js";
import { gsap } from "gsap";
import { getResource, setResources } from "./Texture.utils";
import * as particles from "@pixi/particle-emitter";
import { sound } from "@pixi/sound";

export class Game extends Application {
  constructor(opt:any){
    super(opt);
    this.musicbg();
    this.startbutton();
    
    //this.previousbutton();
    //this.image1();
    // this.button2();
    // this.image();
    // this.onclick();
  }
  public musicbg(){
    const sprite1= Sprite.from("./assets/musicbg.jpg");
     sprite1.width=innerWidth/1.2;
     sprite1.height=innerHeight/1.1;
    // sprite1.width=-200;
    sprite1.x=50;
    sprite1.y=50;
    this.stage.addChild(sprite1);
  }
  
  public startbutton(){

    const sprite1= Sprite.from("./assets/startbutton.jpg");
    sprite1.width=innerWidth/10;
    sprite1.height=innerHeight/5;
    sprite1.interactive = true;
    sprite1.buttonMode=true;
    sprite1.x=600;
    sprite1.y=320;
    sprite1.on("pointerup",this.startmusic.bind(this))
    this.stage.addChild(sprite1);
  }
  public stopButton(){

    const sprite1= Sprite.from("./assets/stopbutton.jpg");
    sprite1.width=innerWidth/10;
    sprite1.height=innerHeight/5;
    sprite1.interactive = true;
    sprite1.buttonMode=true;
    sprite1.x=600;
    sprite1.y=320;
    sprite1.on("pointerup",this.stopmusic.bind(this))
    this.stage.addChild(sprite1);
  }

  public startmusic(){
    sound.add("s1","assets/abc.mp3")
    sound.play("s1");
   this.stage.removeChildren();
    this.musicbg();
    this.stopButton();

  }
  public stopmusic(){
    sound.stop("s1");
    this.stage.removeChildren();
    this.musicbg();
    this.startbutton();
  }
    
    

    
   
  }
  
  


  