class Stand{
  constructor(x,y,width,height){
    var options={
      isStatic: true
    }
    this.body= Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
  }
  display(){
    var angle=this.angle;
    strokeWeight(2);
    fill("white");
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(angle);
    rectMODE(CENTER);
    rect(0,0,this.width,this.height);
    pop();
  }
}
  