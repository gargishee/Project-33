class snow{
    constructor(x,y,width,height) {
        var options = {
            'friction':1.0,
            'density':0.4,
            isStatic: false
        }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.image = loadImage("snow4.webp");
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}