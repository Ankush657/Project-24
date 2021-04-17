class Rubber {
    constructor(x, y,r) {
      var options = {
          isStatic:false,
          'restitution':0.3,
          'friction':5.0,
          'density':1.0
      }
      this.x=x;
      this.y=y;
      this.r=r;
      this.body = Bodies.circle(x, y, (this.r-20)/2, options);
      World.add(world, this.body);
    }
    display(){
      var rubberpos =this.body.position;

      push();
      translate(rubberpos.x, rubberpos.y);
      ellipseMode(CENTER);
      strokeWeight(4);
      stroke("red"); 
      fill("white");
      ellipse(0, 0, this.r, this.r);
      pop();
    }
  };
  