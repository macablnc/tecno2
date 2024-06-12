class ManchaN {
 constructor(img, x, y, w, h) {
  this.img = img;
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.angulo = 0;
 }

 dibujar(graphics) {
  graphics.push();
  graphics.translate(this.x + this.w / 2, this.y + this.h / 2);
  graphics.rotate(this.angulo);
  graphics.image(this.img, -this.w / 2, -this.h / 2, this.w, this.h);
  graphics.pop();
 }

 rotar() {
  this.angulo += 0.01;
 }
}

// Añadir la clase ManchaN al ámbito global
// window.ManchaN = ManchaN;
