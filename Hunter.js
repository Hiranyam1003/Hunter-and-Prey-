class Hunter {
constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 20, 50, options);
        this.width = 20;
        this.height = 50;
        this.image = loadImage("Images/hunterImage.png");
        World.add(world, this.body);
    }
    display(){
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    }
}
