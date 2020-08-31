class Paper{
  constructor(x, y, r) {
      var options = {
          'restitution':0.5,
          'friction':0.5,
          'density':1.0,
          isStatic:false
      }
      this.body= Bodies.circle(x, y, r, options);
      this.r=r;
      World.add(world, this.body);

    }
    display(){
      var pos = this.body.position;
      push();
      translate(this.body.position.x, this.body.position.y);
      strokeWeight(3)
      fill(255,0,255);
      ellipse(0,0,this.r,this.r);
      
      pop();
    }
}