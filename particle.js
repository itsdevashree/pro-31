class Particles{
   constructor(x,y,radius){
     var options={
       restitution:0.8,
       friction:1,
       density:1
     }
    
     this.body = Bodies.circle(x,y,radius,options)
     this.radius = radius
     this.color = color(random(0,255),random(0,255),random(0,255))
     World.add(world,this.body)

   }
   display(){

      var pos = this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x, pos.y);
      rotate(angle)
      fill(this.color)
      ellipseMode(RADIUS);
      ellipse(pos.x,pos.y,5);
      pop();

   }

}