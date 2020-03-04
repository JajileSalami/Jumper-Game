


function jumper() {
  // this.#operation = value;
  this.x = w/2;
  this.y = h/2;
  this.gravity = 0.5;//gravity
  this.lift = -10;//jump height
  this.velocity = 0;//speed of gravity
  
  
  //function on screen to put values of character will look like
  this.show = function() {
    fill(255, 0, 0);
    ellipse(this.x, this.y, 50,50);
  };
  
  //build function to take intial velocity and change lift/jump
  this.up = function() {
    this.velocity += this.lift;
  };
  
  //builds function to update character
  this.update = function() {
    this.velocity += this.gravity;
    this.y += this.velocity;
    this.velocity * 0.9; //air resistance
    
    //IF character hits groubd, movement in y direction will have jumper from leaving ground
    if (this.y > h-25) {
      this.y = h-25;
      this.velocity = 0;
    }
    
    //stops character from leaving ceiling of screen
    if (this.y < 25) {
      this.y = 25;
      this.velocity = 0;
    }
  };
}

/*function jumper() {
  this.x = w/2;
  this.y = h/2;
  this.gravity = 0.5; // the force of gravity
  this.lift = -10; // the opposing force of gravity when I jump
  this.velocity = 0; // speed of gravity force
  
  // I am building a function to display on the screen. This is where I put my values of what the jumper will look like.
  this.show = function() {
    fill(255,0,0);
    ellipse(this.x, this.y, 50, 50);
  }
  // Build a function called UP that will take the initial velocity and modify by opposing gravity.
  this.up = function() {
    this.velocity += this.lift;
  }
  // This will continuously update the jumper.
  this.update = function() {
    this.velocity += this.gravity;
    this.y += this.velocity;
    this.velocity *= 0.9; // air resistance
    // This will prevent the jumper from leaving the ground.
    if (this.y > h) {
      this.y = h;
      this.velocity = 0;
    }
    // This will prevent the jumper from leaving the ceiling.
    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }
}



function barrier() {
    this.x = w;
    this.y = 100;
    let rand = random(w);
    //Barrier appears
    this.show = function() {
        fill("Blue");
        rect(this.x,this.y,50,200);
    }
    //Barrier moves
    this.move = function() {
        if (this.x < 0) {
            this.x += -10;
        }
    }
}


function barrier() {
  this.x = w/2;
  this.y = h/2;
  this.push = -10;
  this.horizontal = 0.5;
  let rand = random(0, 100);
  
  this.shape = function() {
    fill(0,0,255);
    rect(x, rand, 50, 200);
  }
  this.refresh = function() {
    this.x += this.push;
  }
}
*/