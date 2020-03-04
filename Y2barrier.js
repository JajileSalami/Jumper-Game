


function barrier() {
  this.h = window.innerHeight;
  this.randh = 0;
  this.x1 = w-20;
  this.y1 = 100;
  this.gravity = 0.5;
  this.velocity = -10;
  
  
  
  this.show = function() {
    fill(0, 0,255);
    rect(this.x1, this.y1, 20, 200);
  };
  
  this.update = function() {
    this.x1 += this.velocity;
    if (this.x1 < 0) {
      this.y1 = random(h);
    }
    //randh = (h - (h * random(h)));
    if (barrier.x1 < 0) {
      barrier.x1 = w-10;
    }
  };

}