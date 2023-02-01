class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.noiseValue = 0;
    this.speed = 5;
    this.prev_pos = this.position.copy();
  }

  update() {
    if (this.isOnScreen()) {
      this.noiseValue = noise(this.position.x * 0.001, this.position.y * 0.001);
      this.velocity = p5.Vector.fromAngle(this.noiseValue * TWO_PI * 16);
      this.velocity.setMag(this.speed);
      this.prev_pos = this.position.copy();
      this.position.add(this.velocity);
    } else {
      this.position.x = random(width);
      this.position.y = random(height);
      this.prev_pos = this.position.copy();
    }
  }

  display() {
    stroke(this.noiseValue * 255, (1 - this.noiseValue) * 255, 255);
    strokeWeight(1);
    line(this.position.x, this.position.y, this.prev_pos.x, this.prev_pos.y);
  }

  isOnScreen() {
    return (
      this.position.x > 0 &&
      this.position.x < width &&
      this.position.y > 0 &&
      this.position.y < height
    );
  }
}
