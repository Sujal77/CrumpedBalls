class paper{
    constructor(x,y,r){
        var options={
            'restitution':0.3,
            'isStatic':false,
            'friction':0.5,
            'density':1.2

        }
       this.r=r;
       this.y=y;
       this.x=x;
        this.body= Bodies.circle(this.x,this.y,this.r/2,options)
        World.add(world,this.body)
    }
 
    display(){

        var pos = this.body.position;
        push();
        translate(pos.x,pos.y)
       
        fill(255,0,255)
        ellipse(0,0,this.r, this.r);
        
        
       
        
        pop()
    }


}