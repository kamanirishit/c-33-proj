class Plinko {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true
           
        }
        this.body = Bodies.circle(x, y, width,options);
        World.add(world, this.body);
        this.width = width;
        this.height = height;
    }
    display() {
        push();
        var pos = this.body.position;
        fill("pink");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y, this.width+25,this.height+25); 
        pop();
    }
  }