class Ground
{
  constructor(x,y,width,height)
  {
   var options={
      isStatic:true,
      
    }

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = 30;
    this.body = Bodies.rectangle(this.x,this.y,this.width,30,options);
    World.add(world,this.body);
  }
  display()
  {
    var groundPos = this.body.position;
    push()
    translate(groundPos.x,groundPos.y);
    rectMode(CENTER);
    strokeWeight(4);
    fill("yellow");
    rect(0,0,this.width,this.height);

    pop()
  }
}