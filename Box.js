class BoxO
{
    constructor(x,y,w,h)
    {
        this.width = w
        this.height = h
           this.body = Bodies.rectangle(x,y,w,h);
           World.add(world,this.body);

    }
display ()
{
    rectMode(CENTER);
    fill("white");
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
    
}

}