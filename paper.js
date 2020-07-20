class Paper{
    constructor(x, y) {
      var options = {
          isStatic: false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2,
      }
      ellipse(x,y,50,50,options);

    //World.add(world, this.body);
}


    display(){
      var pos =this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      fill("gray");
      push();
      translate(pos.x, pos.y);
      rect(0, 0, 50, 50);
      pop();

    }
}

