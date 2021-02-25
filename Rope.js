    class Rope{
        constructor(bodyA, pointB){
            var options = {
                bodyA: bodyA,
                pointB: pointB,                
                stiffness: 0.0175,
                length: 200
            }
            this.pointB=pointB;
            this.rope = Constraint.create(options);
            World.add(world, this.rope);
        }
        fly(){
            this.rope.bodyA=null;
        }
        display(){
            if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.rope.pointB;
            strokeWeight(4);
            line(pointA.x -100, pointA.y, pointB.x, pointB.y);
        }
          }
    }


