class Plink {
  constructor(x, y, width, height) {
      var options = {
          restitution:0.4
         
      }
      this.body = Bodies.circle(x, y, width,options);
      World.add(world, this.body);
      this.width = width;
      this.height = height;
  }
  display() {
      push();
      var angle=this.body.angle;
      var pos = this.body.position;
      translate(pos.x,pos.y);
      rotate(angle);
      fill("red");
      ellipseMode(CENTER);
      ellipse(0, 0, this.width+20,this.height+20); 
      pop();
  }
}