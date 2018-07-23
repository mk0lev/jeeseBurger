import { Component, OnInit,ViewChild ,NgZone,HostListener  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("canvas") canvas;
  
  title = 'Flappy Bird';
  cvs;
  ctx;
  // load images
  bg = new Image();  
  bird  = new Image();
  fg = new Image();
  pipeNorth = new Image();
  pipeSouth = new Image();
  gap = 85;
  constant;
  bX = 10;
  bY = 150;
  gravity = 1.5;
  score = 0;
  pipe = [];
  // audio files
  fly = new Audio();
  scor = new Audio();
  constructor(private ngZone: NgZone){
    this.bg.src = "assets/images/bg.png";
    this.bird.src = "assets/images/bird.png";
    this.fg.src = "assets/images/fg.png";
    this.pipeNorth.src = "assets/images/pipeNorth.png";
    this.pipeSouth.src = "assets/images/pipeSouth.png";
    //this.fly.src = "assets/sounds/fly.mp3";
    //this.scor.src = "assets/sounds/score.mp3";
  }
   ngAfterViewInit() {
    
    this.cvs = <HTMLCanvasElement> document.getElementById("canvas");
    this.pipe[0] = {
      x : this.cvs.width,
      y : 0
    };
    this.ctx = this.cvs.getContext("2d");
    // this.bg.onload = () => {
    //   this.bird.onload = () =>{
    //     this.fg.onload = () =>{
    //       this.pipeNorth.onload = () => {
            
    //       }
    //     }
    //     //this.draw(this.ctx)
    //   }
    //   //this.draw(this.ctx)
    //   //
    // }
    this.pipeSouth.onload = () => {
      this.ngZone.runOutsideAngular(() => { 
        this.draw(this.ctx,this.bg,this.bird,this.fg,this.pipeNorth,this.pipeSouth);
      });
    }
  }

@HostListener('document:keyup', ['$event'])
  onKeyUp(ev:KeyboardEvent) {
    // do something meaningful with it
    console.log(`The user just pressed ${ev.key}!`);
    this.moveUp();
  }

  moveUp(){
    this.bY -= 25;
    //this.fly.play();
  }
  restart(){
    this.gap = 85;
    this.constant;
    this.bX = 10;
    this.bY = 150;
    this.gravity = 1.5;
    this.score = 0;
    this.pipe = [];
    this.pipe[0] = {
      x : this.cvs.width,
      y : 0
    };
    this.draw(this.ctx,this.bg,this.bird,this.fg,this.pipeNorth,this.pipeSouth);
  }
// draw images
draw(ctx,bg,bird,fg,pipeNorth,pipeSouth){
    console.log(bg);
    ctx.drawImage(bg,0,0);
    
    
    for(var i = 0; i < this.pipe.length; i++){
        
        this.constant = pipeNorth.height+this.gap;
        ctx.drawImage(pipeNorth,this.pipe[i].x,this.pipe[i].y);
        ctx.drawImage(pipeSouth,this.pipe[i].x,this.pipe[i].y+this.constant);
             
        this.pipe[i].x--;
        
        if( this.pipe[i].x == 125 ){
          this.pipe.push({
                x : this.cvs.width,
                y : Math.floor(Math.random()*pipeNorth.height)-pipeNorth.height
            }); 
        }

        // detect collision
        
        if( this.bX + bird.width >= this.pipe[i].x && this.bX <= this.pipe[i].x + pipeNorth.width 
          && (this.bY <= this.pipe[i].y + pipeNorth.height || this.bY+bird.height >= this.pipe[i].y+this.constant) 
          || this.bY + bird.height >=  this.cvs.height - fg.height){
            //location.reload(); // reload the page //TODO
            alert("you died");
            return;
        }
        
        if(this.pipe[i].x == 5){
          this.score++;
          //this.scor.play();
        }
        
        
    }

    ctx.drawImage(fg,0,this.cvs.height - fg.height);
    
    ctx.drawImage(bird,this.bX,this.bY);
    
    this.bY += this.gravity;
    
    ctx.fillStyle = "#000";
    ctx.font = "20px Verdana";
    ctx.fillText("Score : "+this.score,10,this.cvs.height-20);
    
    setTimeout(()=>{this.draw(this.ctx,this.bg,this.bird,this.fg,this.pipeNorth,this.pipeSouth)},20);
  }



}


