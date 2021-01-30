class Polygon
{
    constructor(x,y,width,height){
        var options={
            restitution:0.5,
            friction:1.0,
            density:20
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("hexagon.png");

        World.add(world,this.body);
    }
    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push ();
        translate (pos.x,pos.y);
        rotate (angle);
        fill ("white");
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop ();
    }
}