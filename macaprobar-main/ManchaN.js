class ManchaN {
 constructor(img, x, y, w, h, velocidad) {
  this.img = img;
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.velocidad = velocidad;
  this.angulo = 0;
  this.rotando = false;
  this.opacidad = 255; // Opacidad inicial
 }

 startRotating() {
  this.rotando = true;
 }

 stopRotating() {
  this.rotando = false;
 }

 rotar() {
  if (this.rotando) {
   this.angulo += this.velocidad;
  }
 }

 desvanecer() {
  if (this.opacidad > 0) {
   this.opacidad -= 5; // Reducir opacidad
  }
 }

 dibujar(capa) {
  capa.push();
  capa.translate(this.x + this.w / 2, this.y + this.h / 2);
  this.rotar();
  capa.rotate(this.angulo);
  capa.tint(255, this.opacidad); // Aplicar opacidad
  capa.image(this.img, -this.w / 2, -this.h / 2, this.w, this.h);
  capa.pop();
 }
}
