import * as PIXI from 'pixi.js';
import { Application, Container, Graphics, Loader, Sprite, Texture } from "pixi.js";
export class Game extends Application {
  constructor(opt:any){
    super(opt);
   
    this.image();
    this.image1();
    this.image2();
   
   
    
  }

  public textbutton(){
    const graphics = new PIXI.Graphics();
    
    graphics.beginFill(0xfa747d);
    graphics.drawRect(50, 50, 200, 100);
    graphics.x=100;
    graphics.y=200;
    graphics.endFill();
    graphics.interactive = true;
    graphics.buttonMode=true
    this.stage.addChild(graphics);
     
    //sprite.cursor = 'pointer';
    // graphics.on("pointerdown",this.onclick.bind(this))

    
  }
  public iconbutton(){
      const graphics1 = new PIXI.Graphics();
      graphics1.beginFill(0x650A5A);
      graphics1.drawRect(50, 50, 200, 100);
      graphics1.lineStyle(2, 0xFEEB77, 1);
      graphics1.endFill();
      graphics1.x=470;
      graphics1.y=200;
      graphics1.interactive = true;
      graphics1.buttonMode=true
      this.stage.addChild(graphics1);
      // graphics1.on("pointerdown",this.onhide.bind(this))
  }

  public borderbutton(){
    const graphics2= new PIXI.Graphics();
    graphics2.lineStyle(10, 0xFFBD01, 1);
    graphics2.beginFill(0xC34288);
    graphics2.drawRect(350, 50, 100, 100);
    graphics2.endFill();
    graphics2.x=600;
    graphics2.y=200;
    graphics2.interactive = true;
    graphics2.buttonMode=true
    this.stage.addChild(graphics2);
    // graphics2.on("pointerdown",this.onborder.bind(this))

  }

  public image(){
    const sprite= Sprite.from("./assets/Hello.png");
    // sprite.anchor.set(0.1);
    sprite.width=innerWidth/8;
    sprite.height=innerHeight/4;
    sprite.x=150;
    sprite.y=100;
    sprite.interactive = true;
    sprite.buttonMode=true;
    sprite.on("pointerdown",this.onclick.bind(this))
   //sprite.cursor = 'pointer';
    this.stage.addChild(sprite)

  }
  public image1(){
    const sprite= Sprite.from("./assets/remote.png");
    // sprite.anchor.set(0.1);
    sprite.width=innerWidth/10;
    sprite.height=innerHeight/4;
    sprite.x=550;
    sprite.y=100;
    sprite.interactive = true;
    sprite.buttonMode=true;
    sprite.on("pointerdown",this.onhide.bind(this))
    this.stage.addChild(sprite)


   //sprite.cursor = 'pointer';
    //Graphics.stage.addChild(graphics1)

  }
  public image2(){
    const sprite= Sprite.from("./assets/gamer.png");
    // sprite.anchor.set(0.1);
    sprite.width=innerWidth/10;
    sprite.height=innerHeight/4;
    sprite.x=920;
    sprite.y=100;
    sprite.interactive = true;
    sprite.buttonMode=true;
   //sprite.cursor = 'pointer';
    sprite.on("pointerdown",this.onborder.bind(this))
    this.stage.addChild(sprite)
  }
  public onclick(){
    this.stage.removeChildren();
    //this.button2();
    this.image();
    this.image1();
    this.image2();
    this.textbutton();
   
    //this.iconbutton();
    //this.borderbutton();
    
  }
  public onhide(){
    this.stage.removeChildren();
    this.image();
    this.image1();
    this.iconbutton();
    this.image2();
    //this.borderbutton();

  }
  public onborder(){
    this.stage.removeChildren();
    this.image();
    this.image1();
    this.image2();
    this.borderbutton();

  }
}