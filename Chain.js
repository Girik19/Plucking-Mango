class Chain{
    constructor(bodyA,pointB){
    var options={
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.08
    }
    this.chain=Constraint.create(options)
    World.add(world,this.chain)
}
display(){
    var pointA=this.bodyA.position
    var pointB=this.pointB
    strokeWieght(4)
    line(pointA.x,pointA.y,pointB.x,pointB.y)

}
}