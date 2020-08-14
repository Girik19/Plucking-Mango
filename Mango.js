class Mango{
    constructor(x,y,r){
        var options={
            isStatic:False,
            restitution:0,
            friction:1.2,
            density:0.6
        }
        this.x=x
        this.y=y
        this.r=r
        this.mango=loadImage("sprites/MANGO.png")
        this.mango=Bodies.circle(x,y,r)
    }
    display(){
        var mangopos=this.body.position
        var angle=this.body.angle
        push()
        translate(this.mangopos.x,this.mangopos.y)
        rotate(angle)
        imageMode(CENTER)
        pop()
    }
}