class Rope{
    constructor(bodyA, pointB)
    {
      var options = {
          bodyA: bodyA,
          pointB: pointB,
          stiffness: 1.2,
          length: 250
      }
      this.rope= Constraint.create(options);
      this.pointB=pointB;
      World.add(world,this.rope);


    }

    fly(){
        this.rope.bodyA = null;
    }
    display() {
      if(this.rope.bodyA){
      var pointA=this.rope.bodyA.position;
      var pointB = this.pointB;
      push();
      strokeWeight(3);
      stroke(48,22,8);
      line(pointA.x,pointA.y,pointB.x,pointB.y);
      pop();
        
      }
      
    }
    
    
}