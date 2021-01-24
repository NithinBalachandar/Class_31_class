class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.smokeImage = loadImage("sprites/smoke.png");
    this.image = loadImage("sprites/bird.png");
    this.birdPosition = []
  }

  display() {

    if(this.body.position.x>200 && this.body.velocity.x>10){
      var position = [this.body.position.x, this.body.position.y];
      this.birdPosition.push(position);
    }

    for( var i = 0; i<this.birdPosition.length; i= i+1){
      image(this.smokeImage,this.birdPosition[i][0],this.birdPosition[i][1]);
    }
    super.display();
  }
}
