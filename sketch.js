particles = [];
const COUNT = 5000;

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < COUNT; i++) {
    particles.push(new Particle(random(width), random(height)));
  }
}

function draw() {
  background(0, 10);
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].display();
  }
}

function mouseClicked() {
  noiseSeed(random(100));
}
