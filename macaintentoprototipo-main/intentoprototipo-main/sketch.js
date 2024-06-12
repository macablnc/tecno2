/*
let CapamanchaG, CapamanchaN, Capalineas;
let cant = 5;
let manchaG = [];
let manchaN = [];
let lineas = [];
let conteoG = [];
let conteoN = [];
let conteoLineas = [];

function preload() {
  for (let i = 0; i < cant; i++) {
    let manchagris = "data/manchasg" + (i + 1) + ".png";
    manchaG[i] = loadImage(manchagris);
    conteoG[i] = 0;
  }

  for (let i = 0; i < cant; i++) {
    let manchanegra = "data/manchasn" + (i + 1) + ".png";
    manchaN[i] = loadImage(manchanegra);
    conteoN[i] = 0;
  }

  for (let i = 0; i < cant; i++) {
    let dlineas = "data/Linea" + (i + 1) + ".png";
    lineas[i] = loadImage(dlineas);
    conteoLineas[i] = 0;
  }
}

function setup() {
  createCanvas(550, 800);

  CapamanchaG = createGraphics(550, 800);
  CapamanchaN = createGraphics(550, 800);
  Capalineas = createGraphics(550, 800);
}

function draw() {
  background(150);

  // capa mancha NEGRA
  //CapamanchaN.clear();.....Esto limpia la capa
  CapamanchaN.noFill();
  CapamanchaN.noStroke();
  CapamanchaN.blendMode(BLEND);
  for (let i = 0; i < cant; i++) {
    if (mouseY > 0 && mouseY < 266 && conteoN[i] <= 5) {
      let x = random(width);
      let y = random(height);
      let w = random(150, 250);
      let h = random(150, 250);
      CapamanchaN.image(manchaN[i], x, y, w, h);
      conteoN[i]++;
    }
  }
  image(CapamanchaN, 0, 0);

  // capa Lineas
  //Capalineas.clear();.....Esto limpia la capa
  Capalineas.noFill();
  Capalineas.noStroke();
  Capalineas.blendMode(BLEND);
  for (let i = 0; i < cant; i++) {
    if (mouseY > 532 && mouseY < 800 && conteoLineas[i] <= 5) {
      let x = random(width);
      let y = random(height);
      let w = random(5, 50);
      let h = random(5, 50);
      Capalineas.image(lineas[i], x, y, w, h);
      conteoLineas[i]++;
    }
  }
  image(Capalineas, 0, 0);

  // capa mancha gris
  //CapamanchaG.clear();.....Esto limpia la capa
  CapamanchaG.noFill();
  CapamanchaG.noStroke();
  CapamanchaG.blendMode(BLEND);
  for (let i = 0; i < cant; i++) {
    if (mouseY > 266 && mouseY < 532 && conteoG[i] <= 5) {
      let x = random(width);
      let y = random(height);
      let w = random(250, 450);
      let h = random(250, 450);
      CapamanchaG.image(manchaG[i], x, y, w, h);
      conteoG[i]++;
    }
  }
  image(CapamanchaG, 0, 0);
}
*/

/*
//solucion a todos los arreglos al mismo tiempo
let CapamanchaG, CapamanchaN, Capalineas;
let cant = 5;
let manchaG = [];
let manchaN = [];
let lineas = [];
let conteoG = [];
let conteoN = [];
let conteoLineas = [];

function preload() {
  for (let i = 0; i < cant; i++) {
    let manchagris = "data/manchasg" + (i + 1) + ".png";
    manchaG[i] = loadImage(manchagris);
    conteoG[i] = 0;
  }

  for (let i = 0; i < cant; i++) {
    let manchanegra = "data/manchasn" + (i + 1) + ".png";
    manchaN[i] = loadImage(manchanegra);
    conteoN[i] = 0;
  }

  for (let i = 0; i < cant; i++) {
    let dlineas = "data/Linea" + (i + 1) + ".png";
    lineas[i] = loadImage(dlineas);
    conteoLineas[i] = 0;
  }
}

function setup() {
  createCanvas(550, 800);

  CapamanchaG = createGraphics(550, 800);
  CapamanchaN = createGraphics(550, 800);
  Capalineas = createGraphics(550, 800);
}

function draw() {
  background(150);

  // capa mancha NEGRA
  //CapamanchaN.clear(); // Limpia la capa
  CapamanchaN.noFill();
  CapamanchaN.noStroke();
  CapamanchaN.blendMode(BLEND);
  for (let i = 0; i < cant; i++) {
    if (mouseY > 0 && mouseY < 266 && conteoN[i] <= 5) {
      let x = random(width);
      let y = random(height);
      let w = random(150, 250);
      let h = random(150, 250);
      CapamanchaN.image(manchaN[i], x, y, w, h);
      conteoN[i]++;
      break; // Rompe el bucle después de dibujar una imagen
    }
  }
  image(CapamanchaN, 0, 0);

  // capa Lineas
  //Capalineas.clear(); // Limpia la capa
  Capalineas.noFill();
  Capalineas.noStroke();
  Capalineas.blendMode(BLEND);
  for (let i = 0; i < cant; i++) {
    if (mouseY > 532 && mouseY < 800 && conteoLineas[i] <= 5) {
      let x = random(width);
      let y = random(height);
      let w = random(5, 50);
      let h = random(5, 50);
      Capalineas.image(lineas[i], x, y, w, h);
      conteoLineas[i]++;
      break; // Rompe el bucle después de dibujar una imagen
    }
  }
  image(Capalineas, 0, 0);

  // capa mancha gris
  //CapamanchaG.clear(); // Limpia la capa
  CapamanchaG.noFill();
  CapamanchaG.noStroke();
  CapamanchaG.blendMode(BLEND);
  for (let i = 0; i < cant; i++) {
    if (mouseY > 266 && mouseY < 532 && conteoG[i] <= 5) {
      let x = random(width);
      let y = random(height);
      let w = random(250, 450);
      let h = random(250, 450);
      CapamanchaG.image(manchaG[i], x, y, w, h);
      conteoG[i]++;
      break; // Rompe el bucle después de dibujar una imagen
    }
  }
  image(CapamanchaG, 0, 0);
}
*/

/*
let CapamanchaG, CapamanchaN, Capalineas;
let cant = 5;
let manchaG = [];
let manchaN = [];
let lineas = [];
let conteoG = [];
let conteoN = [];
let conteoLineas = [];
let tiempoDentroCapa = 0;
let tiempoAnterior = 0;
let tiempoLimite = 2000; // 2 segundos

function preload() {
  for (let i = 0; i < cant; i++) {
    let manchagris = "data/manchasg" + (i + 1) + ".png";
    manchaG[i] = loadImage(manchagris);
    conteoG[i] = 0;
  }

  for (let i = 0; i < cant; i++) {
    let manchanegra = "data/manchasn" + (i + 1) + ".png";
    manchaN[i] = loadImage(manchanegra);
    conteoN[i] = 0;
  }

  for (let i = 0; i < cant; i++) {
    let dlineas = "data/Linea" + (i + 1) + ".png";
    lineas[i] = loadImage(dlineas);
    conteoLineas[i] = 0;
  }
}

function setup() {
  createCanvas(550, 800);

  CapamanchaG = createGraphics(550, 800);
  CapamanchaN = createGraphics(550, 800);
  Capalineas = createGraphics(550, 800);
}

function draw() {
  background(150);

  let tiempoTranscurrido = millis() - tiempoAnterior;

  if (mouseY > 0 && mouseY < 266) {
    tiempoDentroCapa += tiempoTranscurrido;
    tiempoAnterior = millis();
    if (tiempoDentroCapa >= tiempoLimite) {
      let i = floor(random(cant));
      let x = random(width);
      let y = random(height);
      let w = random(150, 250);
      let h = random(150, 250);
      CapamanchaN.image(manchaN[i], x, y, w, h);
      conteoN[i]++;
      tiempoDentroCapa = 0;
    }
  } else if (mouseY > 532 && mouseY < 800) {
    tiempoDentroCapa += tiempoTranscurrido;
    tiempoAnterior = millis();
    if (tiempoDentroCapa >= tiempoLimite) {
      let i = floor(random(cant));
      let x = random(width);
      let y = random(height);
      let w = random(5, 50);
      let h = random(5, 50);
      Capalineas.image(lineas[i], x, y, w, h);
      conteoLineas[i]++;
      tiempoDentroCapa = 0;
    }
  } else if (mouseY > 266 && mouseY < 532) {
    tiempoDentroCapa += tiempoTranscurrido;
    tiempoAnterior = millis();
    if (tiempoDentroCapa >= tiempoLimite) {
      let i = floor(random(cant));
      let x = random(width);
      let y = random(height);
      let w = random(250, 450);
      let h = random(250, 450);
      CapamanchaG.image(manchaG[i], x, y, w, h);
      conteoG[i]++;
      tiempoDentroCapa = 0;
    }
  }

  image(CapamanchaN, 0, 0);
  image(Capalineas, 0, 0);
  image(CapamanchaG, 0, 0);
}
*/

/*
//avances hasta el 2.06.2024

//capas
let CapamanchaG;
let CapamanchaN;
let Capalineas;
//cant es asignado con un valor de 5
let cant = 5;
//arreglos
let manchaG = [];
let manchaN = [];
let lineas = [];
let conteoG = [];
let conteoN = [];
let conteoLineas = [];
//contadores
let tiempoDentroCapa = 0;
let tiempoAnterior = 0;
let tiempoLimite = 1000; //1 segundos
let limiteImagenes = 10;  //las veces que se van a dibujar
//carga imagenes
function preload() {
  //manchasrandes
  for (let i = 0; i < cant; i++) {
    let manchagris = "data/manchasg" + (i + 1) + ".png";
    manchaG[i] = loadImage(manchagris);
    conteoG[i] = 0;
  }
  //manchasnegras
  for (let i = 0; i < cant; i++) {
    let manchanegra = "data/manchasn" + (i + 1) + ".png";
    manchaN[i] = loadImage(manchanegra);
    conteoN[i] = 0;
  }
  //lineas
  for (let i = 0; i < cant; i++) {
    let dlineas = "data/Linea" + (i + 1) + ".png";
    lineas[i] = loadImage(dlineas);
    conteoLineas[i] = 0;
  }
}

function setup() {
  createCanvas(550, 800);
  //se convierten en capas
  CapamanchaG = createGraphics(550, 800);
  CapamanchaN = createGraphics(550, 800);
  Capalineas = createGraphics(550, 800);
}

function draw() {
  background(150);

  let tiempoTranscurrido = millis() - tiempoAnterior;

  if (mouseY > 0 && mouseY < 266 && conteoN.reduce((a, b) => a + b, 0) < limiteImagenes) {
    tiempoDentroCapa += tiempoTranscurrido;
    tiempoAnterior = millis();
    if (tiempoDentroCapa >= tiempoLimite) {
      let i = floor(random(cant));
      let x = random(width);
      let y = random(height);
      let w = random(150, 250);
      let h = random(150, 250);
      CapamanchaN.image(manchaN[i], x, y, w, h);
      conteoN[i]++;
      tiempoDentroCapa = 0;
    }
  } else if (mouseY > 532 && mouseY < 800 && conteoLineas.reduce((a, b) => a + b, 0) < limiteImagenes) {
    tiempoDentroCapa += tiempoTranscurrido;
    tiempoAnterior = millis();
    if (tiempoDentroCapa >= tiempoLimite) {
      let i = floor(random(cant));
      let x = random(width);
      let y = random(height);
      let w = random(5, 50);
      let h = random(5, 50);
      Capalineas.image(lineas[i], x, y, w, h);
      conteoLineas[i]++;
      tiempoDentroCapa = 0;
    }
  } else if (mouseY > 266 && mouseY < 532 && conteoG.reduce((a, b) => a + b, 0) < limiteImagenes) {
    tiempoDentroCapa += tiempoTranscurrido;
    tiempoAnterior = millis();
    if (tiempoDentroCapa >= tiempoLimite) {
      let i = floor(random(cant));
      let x = random(width);
      let y = random(height);
      let w = random(250, 450);
      let h = random(250, 450);
      CapamanchaG.image(manchaG[i], x, y, w, h);
      conteoG[i]++;
      tiempoDentroCapa = 0;
    }
  }

  image(CapamanchaN, 0, 0);
  image(Capalineas, 0, 0);
  image(CapamanchaG, 0, 0);
}
*/

/*
//avances hasta el 4.06.2024

// Capas
let CapamanchaG;
let CapamanchaN;
let Capalineas;

// Cantidad es asignada con un valor de 5
let cant = 5;

// Arreglos
let manchaG = [];
let manchaN = [];
let lineas = [];
let conteoG = [];
let conteoN = [];
let conteoLineas = [];
let posG = [];
let anguloG = [];
let posN = [];
let anguloN = [];
let posLineas = [];
let anguloLineas = [];

// Contadores
let tiempoDentroCapaN = 0;
let tiempoDentroCapaG = 0;
let tiempoDentroCapaL = 0;
let tiempoAnterior = 0;
let tiempoLimite = 1000; // 1 segundo
let tiempoRotacion = 2000; // 2 segundos
let limiteImagenes = 5; // Las veces que se van a dibujar

let rotarG = false;
let rotarN = false;
let rotarLineas = false;

function preload() {
  // Manchas grandes
  for (let i = 0; i < cant; i++) {
    let manchagris = "data/manchasg" + (i + 1) + ".png";
    manchaG[i] = loadImage(manchagris);
    conteoG[i] = 0;
  }
  // Manchas negras
  for (let i = 0; i < cant; i++) {
    let manchanegra = "data/manchasn" + (i + 1) + ".png";
    manchaN[i] = loadImage(manchanegra);
    conteoN[i] = 0;
  }
  // Líneas
  for (let i = 0; i < cant; i++) {
    let dlineas = "data/Linea" + (i + 1) + ".png";
    lineas[i] = loadImage(dlineas);
    conteoLineas[i] = 0;
  }
}

function setup() {
  createCanvas(550, 800);
  // Se convierten en capas
  CapamanchaG = createGraphics(550, 800);
  CapamanchaN = createGraphics(550, 800);
  Capalineas = createGraphics(550, 800);
}

function draw() {
  background(150);

  let tiempoTranscurrido = millis() - tiempoAnterior;
  tiempoAnterior = millis();

  if (mouseY > 0 && mouseY < 266) {
    tiempoDentroCapaN += tiempoTranscurrido;
    tiempoDentroCapaG = 0;
    tiempoDentroCapaL = 0;
    rotarG = false;
    rotarLineas = false;
  } else if (mouseY > 532 && mouseY < 800) {
    tiempoDentroCapaL += tiempoTranscurrido;
    tiempoDentroCapaG = 0;
    tiempoDentroCapaN = 0;
    rotarG = false;
    rotarN = false;
  } else if (mouseY > 266 && mouseY < 532) {
    tiempoDentroCapaG += tiempoTranscurrido;
    tiempoDentroCapaN = 0;
    tiempoDentroCapaL = 0;
    rotarN = false;
    rotarLineas = false;
  } else {
    tiempoDentroCapaN = 0;
    tiempoDentroCapaG = 0;
    tiempoDentroCapaL = 0;
    rotarG = false;
    rotarN = false;
    rotarLineas = false;
  }

  // Verificamos si el mouse está sobre CapamanchaN
  if (mouseY > 0 && mouseY < 266 && conteoN.reduce((a, b) => a + b, 0) < limiteImagenes) {
    if (tiempoDentroCapaN >= tiempoLimite) {
      let i = floor(random(cant));
      let x = random(width);
      let y = random(height);
      let w = random(150, 250);
      let h = random(150, 250);
      CapamanchaN.image(manchaN[i], x, y, w, h);
      conteoN[i]++;
      posN.push({ x, y, w, h });
      anguloN.push(0);
      tiempoDentroCapaN = 0;
    }
  } else if (mouseY > 532 && mouseY < 800 && conteoLineas.reduce((a, b) => a + b, 0) < limiteImagenes) {
    if (tiempoDentroCapaL >= tiempoLimite) {
      let i = floor(random(cant));
      let x = random(width);
      let y = random(height);
      let w = random(5, 50);
      let h = random(5, 50);
      Capalineas.image(lineas[i], x, y, w, h);
      conteoLineas[i]++;
      posLineas.push({ x, y, w, h });
      anguloLineas.push(0);
      tiempoDentroCapaL = 0;
    }
  } else if (mouseY > 266 && mouseY < 532 && conteoG.reduce((a, b) => a + b, 0) < limiteImagenes) {
    if (tiempoDentroCapaG >= tiempoLimite) {
      let i = floor(random(cant));
      let x = random(width);
      let y = random(height);
      let w = random(250, 450);
      let h = random(250, 450);
      CapamanchaG.image(manchaG[i], x, y, w, h);
      conteoG[i]++;
      posG.push({ x, y, w, h });
      anguloG.push(0);
      tiempoDentroCapaG = 0;
    }
  }

  // Mouse se queda en la misma capa por los segundos
  if (mouseY > 0 && mouseY < 266 && conteoN.reduce((a, b) => a + b, 0) >= limiteImagenes && tiempoDentroCapaN >= tiempoRotacion) {
    rotarN = true;
  } else if (mouseY > 532 && mouseY < 800 && conteoLineas.reduce((a, b) => a + b, 0) >= limiteImagenes && tiempoDentroCapaL >= tiempoRotacion) {
    rotarLineas = true;
  } else if (mouseY > 266 && mouseY < 532 && conteoG.reduce((a, b) => a + b, 0) >= limiteImagenes && tiempoDentroCapaG >= tiempoRotacion) {
    rotarG = true;
  }

  // Rotar imágenes si se ha alcanzado el límite de imágenes y han pasado 6 segundos
  CapamanchaN.clear();
  Capalineas.clear();
  CapamanchaG.clear();

  if (rotarN) {
    for (let i = 0; i < posN.length; i++) {
      anguloN[i] += 0.01;
      CapamanchaN.push();
      CapamanchaN.translate(posN[i].x + posN[i].w / 2, posN[i].y + posN[i].h / 2);
      CapamanchaN.rotate(anguloN[i]);
      CapamanchaN.image(manchaN[i % cant], -posN[i].w / 2, -posN[i].h / 2, posN[i].w, posN[i].h);
      CapamanchaN.pop();
    }
  } else {
    for (let i = 0; i < posN.length; i++) {
      CapamanchaN.image(manchaN[i % cant], posN[i].x, posN[i].y, posN[i].w, posN[i].h);
    }
  }

  if (rotarLineas) {
    for (let i = 0; i < posLineas.length; i++) {
      anguloLineas[i] += 0.01;
      Capalineas.push();
      Capalineas.translate(posLineas[i].x + posLineas[i].w / 2, posLineas[i].y + posLineas[i].h / 2);
      Capalineas.rotate(anguloLineas[i]);
      Capalineas.image(lineas[i % cant], -posLineas[i].w / 2, -posLineas[i].h / 2, posLineas[i].w, posLineas[i].h);
      Capalineas.pop();
    }
  } else {
    for (let i = 0; i < posLineas.length; i++) {
      Capalineas.image(lineas[i % cant], posLineas[i].x, posLineas[i].y, posLineas[i].w, posLineas[i].h);
    }
  }

  if (rotarG) {
    for (let i = 0; i < posG.length; i++) {
      anguloG[i] += 0.01;
      CapamanchaG.push();
      CapamanchaG.translate(posG[i].x + posG[i].w / 2, posG[i].y + posG[i].h / 2);
      CapamanchaG.rotate(anguloG[i]);
      CapamanchaG.image(manchaG[i % cant], -posG[i].w / 2, -posG[i].h / 2, posG[i].w, posG[i].h);
      CapamanchaG.pop();
    }
  } else {
    for (let i = 0; i < posG.length; i++) {
      CapamanchaG.image(manchaG[i % cant], posG[i].x, posG[i].y, posG[i].w, posG[i].h);
    }
  }

  image(CapamanchaN, 0, 0);
  image(Capalineas, 0, 0);
  image(CapamanchaG, 0, 0);
}
*/

/*
// Capas
let CapamanchaG;
let CapamanchaN;
let Capalineas;

// Cantidad es asignada con un valor de 5
let cant = 5;

// Arreglos
let manchaG = [];
let manchaN = [];
let lineas = [];
let conteoG = [];
let conteoN = [];
let conteoLineas = [];
let posG = [];
let anguloG = [];
let posN = [];
let anguloN = [];
let posLineas = [];
let anguloLineas = [];
let anguloN_out = [];
let anguloLineas_out = [];
let anguloG_out = [];

// Contadores
let tiempoDentroCapaN = 0;
let tiempoDentroCapaG = 0;
let tiempoDentroCapaL = 0;
let tiempoAnterior = 0;
let tiempoLimite = 1000; // 1 segundo
let tiempoRotacion = 2000; // 2 segundos
let limiteImagenes = 5; // Las veces que se van a dibujar

let rotarG = false;
let rotarN = false;
let rotarLineas = false;

function preload() {
  // Manchas grandes
  for (let i = 0; i < cant; i++) {
    let manchagris = "data/manchasg" + (i + 1) + ".png";
    manchaG[i] = loadImage(manchagris);
    conteoG[i] = 0;
  }
  // Manchas negras
  for (let i = 0; i < cant; i++) {
    let manchanegra = "data/manchasn" + (i + 1) + ".png";
    manchaN[i] = loadImage(manchanegra);
    conteoN[i] = 0;
  }
  // Líneas
  for (let i = 0; i < cant; i++) {
    let dlineas = "data/Linea" + (i + 1) + ".png";
    lineas[i] = loadImage(dlineas);
    conteoLineas[i] = 0;
  }
}

function setup() {
  createCanvas(550, 800);
  // Se convierten en capas
  CapamanchaG = createGraphics(550, 800);
  CapamanchaN = createGraphics(550, 800);
  Capalineas = createGraphics(550, 800);
}

function draw() {
  background(150);

  let tiempoTranscurrido = millis() - tiempoAnterior;
  tiempoAnterior = millis();

  if (mouseY > 0 && mouseY < 266) {
    tiempoDentroCapaN += tiempoTranscurrido;
    tiempoDentroCapaG = 0;
    tiempoDentroCapaL = 0;
    rotarG = false;
    rotarLineas = false;
  } else if (mouseY > 532 && mouseY < 800) {
    tiempoDentroCapaL += tiempoTranscurrido;
    tiempoDentroCapaG = 0;
    tiempoDentroCapaN = 0;
    rotarG = false;
    rotarN = false;
  } else if (mouseY > 266 && mouseY < 532) {
    tiempoDentroCapaG += tiempoTranscurrido;
    tiempoDentroCapaN = 0;
    tiempoDentroCapaL = 0;
    rotarN = false;
    rotarLineas = false;
  } else {
    tiempoDentroCapaN = 0;
    tiempoDentroCapaG = 0;
    tiempoDentroCapaL = 0;
    rotarG = false;
    rotarN = false;
    rotarLineas = false;
  }

  // Verificamos si el mouse está sobre CapamanchaN
  if (mouseY > 0 && mouseY < 266 && conteoN.reduce((a, b) => a + b, 0) < limiteImagenes) {
    if (tiempoDentroCapaN >= tiempoLimite) {
      let i = floor(random(cant));
      let x = random(width);
      let y = random(height);
      let w = random(150, 250);
      let h = random(150, 250);
      CapamanchaN.image(manchaN[i], x, y, w, h);
      conteoN[i]++;
      posN.push({ x, y, w, h });
      anguloN.push(0);
      tiempoDentroCapaN = 0;
    }
  } else if (mouseY > 532 && mouseY < 800 && conteoLineas.reduce((a, b) => a + b, 0) < limiteImagenes) {
    if (tiempoDentroCapaL >= tiempoLimite) {
      let i = floor(random(cant));
      let x = random(width);
      let y = random(height);
      let w = random(5, 50);
      let h = random(5, 50);
      Capalineas.image(lineas[i], x, y, w, h);
      conteoLineas[i]++;
      posLineas.push({ x, y, w, h });
      anguloLineas.push(0);
      tiempoDentroCapaL = 0;
    }
  } else if (mouseY > 266 && mouseY < 532 && conteoG.reduce((a, b) => a + b, 0) < limiteImagenes) {
    if (tiempoDentroCapaG >= tiempoLimite) {
      let i = floor(random(cant));
      let x = random(width);
      let y = random(height);
      let w = random(250, 450);
      let h = random(250, 450);
      CapamanchaG.image(manchaG[i], x, y, w, h);
      conteoG[i]++;
      posG.push({ x, y, w, h });
      anguloG.push(0);
      tiempoDentroCapaG = 0;
    }
  }

  // Verificamos si el mouse ha permanecido en la misma capa por 6 segundos
  if (mouseY > 0 && mouseY < 266 && conteoN.reduce((a, b) => a + b, 0) >= limiteImagenes && tiempoDentroCapaN >= tiempoRotacion) {
    rotarN = true;
  } else if (mouseY > 532 && mouseY < 800 && conteoLineas.reduce((a, b) => a + b, 0) >= limiteImagenes && tiempoDentroCapaL >= tiempoRotacion) {
    rotarLineas = true;
  } else if (mouseY > 266 && mouseY < 532 && conteoG.reduce((a, b) => a + b, 0) >= limiteImagenes && tiempoDentroCapaG >= tiempoRotacion) {
    rotarG = true;
  }

  // Rotar imágenes si se ha alcanzado el límite de imágenes y han pasado 6 segundos
  CapamanchaN.clear();
  Capalineas.clear();
  CapamanchaG.clear();

  if (rotarN) {
    for (let i = 0; i < posN.length; i++) {
      anguloN[i] += 0.01;
      CapamanchaN.push();
      CapamanchaN.translate(posN[i].x + posN[i].w / 2, posN[i].y + posN[i].h / 2);
      CapamanchaN.rotate(anguloN[i]);
      CapamanchaN.image(manchaN[i % cant], -posN[i].w / 2, -posN[i].h / 2, posN[i].w, posN[i].h);
      CapamanchaN.pop();
    }
  } else {
    for (let i = 0; i < posN.length; i++) {
      CapamanchaN.image(manchaN[i % cant], posN[i].x, posN[i].y, posN[i].w, posN[i].h);
    }
  }

  if (rotarLineas) {
    for (let i = 0; i < posLineas.length; i++) {
      anguloLineas[i] += 0.01;
      Capalineas.push();
      Capalineas.translate(posLineas[i].x + posLineas[i].w / 2, posLineas[i].y + posLineas[i].h / 2);
      Capalineas.rotate(anguloLineas[i]);
      Capalineas.image(lineas[i % cant], -posLineas[i].w / 2, -posLineas[i].h / 2, posLineas[i].w, posLineas[i].h);
      Capalineas.pop();
    }
  } else {
    for (let i = 0; i < posLineas.length; i++) {
      Capalineas.image(lineas[i % cant], posLineas[i].x, posLineas[i].y, posLineas[i].w, posLineas[i].h);
    }
  }

  if (rotarG) {
    for (let i = 0; i < posG.length; i++) {
      anguloG[i] += 0.01;
      CapamanchaG.push();
      CapamanchaG.translate(posG[i].x + posG[i].w / 2, posG[i].y + posG[i].h / 2);
      CapamanchaG.rotate(anguloG[i]);
      CapamanchaG.image(manchaG[i % cant], -posG[i].w / 2, -posG[i].h / 2, posG[i].w, posG[i].h);
      CapamanchaG.pop();
    }
  } else {
    for (let i = 0; i < posG.length; i++) {
      CapamanchaG.image(manchaG[i % cant], posG[i].x, posG[i].y, posG[i].w, posG[i].h);
    }
  }

  image(CapamanchaN, 0, 0);
  image(Capalineas, 0, 0);
  image(CapamanchaG, 0, 0);
}
*/

/////////////////////////////////////////////////////////////////////////////
//VERSION DEFINITIVA
/*
// Capas
let CapamanchaG;
let CapamanchaN;
let Capalineas;

// Cantidad es asignada con un valor de 5
let cant = 5;

// Arreglos
let manchaG = [];
let manchaN = [];
let lineas = [];
let conteoG = [];
let conteoN = [];
let conteoLineas = [];

//  Para  rotar
let posG = [];
let anguloG = [];
let velG = [];
let posN = [];
let anguloN = [];
let velN = [];
let posLineas = [];
let anguloLineas = [];
let velLineas = [];

// Contadores
let tiempoDentroCapaN = 0;
let tiempoDentroCapaG = 0;
let tiempoDentroCapaL = 0;
let tiempoAnterior = 0;
let tiempoLimite = 1000; // 1 segundo
let tiempoRotacion = 2000; // 2 segundos
let limiteImagenes = 5; // Las veces que se van a dibujar

//  Futuras condicionales
let rotarG = false;
let rotarN = false;
let rotarLineas = false;

function preload() {
  // Manchas grandes
  for (let i = 0; i < cant; i++) {
    let manchagris = "data/manchasg" + (i + 1) + ".png";
    manchaG[i] = loadImage(manchagris);
    conteoG[i] = 0;
  }
  // Manchas negras
  for (let i = 0; i < cant; i++) {
    let manchanegra = "data/manchasn" + (i + 1) + ".png";
    manchaN[i] = loadImage(manchanegra);
    conteoN[i] = 0;
  }
  // Líneas
  for (let i = 0; i < cant; i++) {
    let dlineas = "data/Linea" + (i + 1) + ".png";
    lineas[i] = loadImage(dlineas);
    conteoLineas[i] = 0;
  }
}

function setup() {
  createCanvas(550, 800);
  // Se convierten en capas
  CapamanchaG = createGraphics(550, 800);
  CapamanchaN = createGraphics(550, 800);
  Capalineas = createGraphics(550, 800);
}

function draw() {
  background(150);

  let tiempoTranscurrido = millis() - tiempoAnterior;
  tiempoAnterior = millis();
  //  Si  mouseY y mouseX ... entonces
  if (mouseY > 0 && mouseY < 266) {
    tiempoDentroCapaN += tiempoTranscurrido;
    tiempoDentroCapaG = 0;
    tiempoDentroCapaL = 0;
  } else if (mouseY > 532 && mouseY < 800) {
    tiempoDentroCapaL += tiempoTranscurrido;
    tiempoDentroCapaG = 0;
    tiempoDentroCapaN = 0;
  } else if (mouseY > 266 && mouseY < 532) {
    tiempoDentroCapaG += tiempoTranscurrido;
    tiempoDentroCapaN = 0;
    tiempoDentroCapaL = 0;
  } else {
    tiempoDentroCapaN = 0;
    tiempoDentroCapaG = 0;
    tiempoDentroCapaL = 0;
  }

  // Si el mouse esta sobre Capa...
  if (mouseY > 0 && mouseY < 266 && conteoN.reduce((a, b) => a + b, 0) < limiteImagenes) {
    if (tiempoDentroCapaN >= tiempoLimite) {
      let i = floor(random(cant));
      let x = random(width);
      let y = random(height);
      let w = random(150, 250);
      let h = random(150, 250);
      CapamanchaN.image(manchaN[i], x, y, w, h);
      conteoN[i]++;
      posN.push({ x, y, w, h });
      anguloN.push(0);
      velN.push(random(0.01, 0.05));
      tiempoDentroCapaN = 0;
    }
  } else if (mouseY > 532 && mouseY < 800 && conteoLineas.reduce((a, b) => a + b, 0) < limiteImagenes) {
    if (tiempoDentroCapaL >= tiempoLimite) {
      let i = floor(random(cant));
      let x = random(width);
      let y = random(height);
      let w = random(5, 50);
      let h = random(5, 50);
      Capalineas.image(lineas[i], x, y, w, h);
      conteoLineas[i]++;
      posLineas.push({ x, y, w, h });
      anguloLineas.push(0);
      velLineas.push(random(0.01, 0.05));
      tiempoDentroCapaL = 0;
    }
  } else if (mouseY > 266 && mouseY < 532 && conteoG.reduce((a, b) => a + b, 0) < limiteImagenes) {
    if (tiempoDentroCapaG >= tiempoLimite) {
      let i = floor(random(cant));
      let x = random(width);
      let y = random(height);
      let w = random(250, 450);
      let h = random(250, 450);
      CapamanchaG.image(manchaG[i], x, y, w, h);
      conteoG[i]++;
      posG.push({ x, y, w, h });
      anguloG.push(0);
      velG.push(random(0.01, 0.05));
      tiempoDentroCapaG = 0;
    }
  }

  // Si el mouse se quedo en la misma capa por 2 segundos
  if (mouseY > 0 && mouseY < 266 && conteoN.reduce((a, b) => a + b, 0) >= limiteImagenes && tiempoDentroCapaN >= tiempoRotacion) {
    rotarN = true;
    rotarG = false;
    rotarLineas = false;
  } else if (mouseY > 532 && mouseY < 800 && conteoLineas.reduce((a, b) => a + b, 0) >= limiteImagenes && tiempoDentroCapaL >= tiempoRotacion) {
    rotarLineas = true;
    rotarG = false;
    rotarN = false;
  } else if (mouseY > 266 && mouseY < 532 && conteoG.reduce((a, b) => a + b, 0) >= limiteImagenes && tiempoDentroCapaG >= tiempoRotacion) {
    rotarG = true;
    rotarN = false;
    rotarLineas = false;
  } else {
    rotarN = false;
    rotarLineas = false;
    rotarG = false;
  }

  // Borra el paso que dejan las imagenes
  CapamanchaN.clear();
  Capalineas.clear();
  CapamanchaG.clear();
  // Rotar imagenes si se alcanzo el limite de imagenes y pasaron 2 segundos
  for (let i = 0; i < posN.length; i++) {
    if (rotarN) {
      anguloN[i] += velN[i];
    }
    CapamanchaN.push();
    CapamanchaN.translate(posN[i].x + posN[i].w / 2, posN[i].y + posN[i].h / 2);
    CapamanchaN.rotate(anguloN[i]);
    CapamanchaN.image(manchaN[i % cant], -posN[i].w / 2, -posN[i].h / 2, posN[i].w, posN[i].h);
    CapamanchaN.pop();
  }

  for (let i = 0; i < posLineas.length; i++) {
    if (rotarLineas) {
      anguloLineas[i] += velLineas[i];
    }
    Capalineas.push();
    Capalineas.translate(posLineas[i].x + posLineas[i].w / 2, posLineas[i].y + posLineas[i].h / 2);
    Capalineas.rotate(anguloLineas[i]);
    Capalineas.image(lineas[i % cant], -posLineas[i].w / 2, -posLineas[i].h / 2, posLineas[i].w, posLineas[i].h);
    Capalineas.pop();
  }

  for (let i = 0; i < posG.length; i++) {
    if (rotarG) {
      anguloG[i] += velG[i];
    }
    CapamanchaG.push();
    CapamanchaG.translate(posG[i].x + posG[i].w / 2, posG[i].y + posG[i].h / 2);
    CapamanchaG.rotate(anguloG[i]);
    CapamanchaG.image(manchaG[i % cant], -posG[i].w / 2, -posG[i].h / 2, posG[i].w, posG[i].h);
    CapamanchaG.pop();
  }

  image(CapamanchaN, 0, 0);
  image(Capalineas, 0, 0);
  image(CapamanchaG, 0, 0);
}
*/
/*
//avances hasta el 4.06.2024
// Capas
let CapamanchaG;
let CapamanchaN;
let Capalineas;

// Cantidad es asignada con un valor de 5
let cant = 5;

// Arreglos
let manchaG = [];
let manchaN = [];
let lineas = [];
let conteoG = [];
let conteoN = [];
let conteoLineas = [];
let posG = [];
let anguloG = [];
let posN = [];
let anguloN = [];
let posLineas = [];
let anguloLineas = [];

// Contadores
let tiempoDentroCapaN = 0;
let tiempoDentroCapaG = 0;
let tiempoDentroCapaL = 0;
let tiempoAnterior = 0;
let tiempoLimite = 1000; // 1 segundo
let tiempoRotacion = 2000; // 2 segundos
let limiteImagenes = 5; // Las veces que se van a dibujar

let rotarG = false;
let rotarN = false;
let rotarLineas = false;

function preload() {
  // Manchas grandes
  for (let i = 0; i < cant; i++) {
    let manchagris = "data/manchasg" + (i + 1) + ".png";
    manchaG[i] = loadImage(manchagris);
    conteoG[i] = 0;
  }
  // Manchas negras
  for (let i = 0; i < cant; i++) {
    let manchanegra = "data/manchasn" + (i + 1) + ".png";
    manchaN[i] = loadImage(manchanegra);
    conteoN[i] = 0;
  }
  // Líneas
  for (let i = 0; i < cant; i++) {
    let dlineas = "data/Linea" + (i + 1) + ".png";
    lineas[i] = loadImage(dlineas);
    conteoLineas[i] = 0;
  }
}

function setup() {
  createCanvas(550, 800);
  // Se convierten en capas
  CapamanchaG = createGraphics(550, 800);
  CapamanchaN = createGraphics(550, 800);
  Capalineas = createGraphics(550, 800);
}

function draw() {
  background(200);

  let tiempoTranscurrido = millis() - tiempoAnterior;
  tiempoAnterior = millis();

  if (mouseY > 0 && mouseY < 266) {
    tiempoDentroCapaN += tiempoTranscurrido;
    tiempoDentroCapaG = 0;
    tiempoDentroCapaL = 0;
  } else if (mouseY > 532 && mouseY < 800) {
    tiempoDentroCapaL += tiempoTranscurrido;
    tiempoDentroCapaG = 0;
    tiempoDentroCapaN = 0;
  } else if (mouseY > 266 && mouseY < 532) {
    tiempoDentroCapaG += tiempoTranscurrido;
    tiempoDentroCapaN = 0;
    tiempoDentroCapaL = 0;
  } else {
    tiempoDentroCapaN = 0;
    tiempoDentroCapaG = 0;
    tiempoDentroCapaL = 0;
  }

  // Verificamos si el mouse está sobre CapamanchaN
  if (mouseY > 0 && mouseY < 266 && conteoN.reduce((a, b) => a + b, 0) < limiteImagenes) {
    if (tiempoDentroCapaN >= tiempoLimite) {
      let i = floor(random(cant));
      let x = random(width);
      let y = random(height);
      let w = random(150, 250);
      let h = random(150, 250);
      CapamanchaN.image(manchaN[i], x, y, w, h);
      conteoN[i]++;
      posN.push({ x, y, w, h });
      anguloN.push(0);
      tiempoDentroCapaN = 0;
    }
  } else if (mouseY > 532 && mouseY < 800 && conteoLineas.reduce((a, b) => a + b, 0) < limiteImagenes) {
    if (tiempoDentroCapaL >= tiempoLimite) {
      let i = floor(random(cant));
      let x = random(width);
      let y = random(height);
      let w = random(5, 50);
      let h = random(5, 50);
      Capalineas.image(lineas[i], x, y, w, h);
      conteoLineas[i]++;
      posLineas.push({ x, y, w, h });
      anguloLineas.push(0);
      tiempoDentroCapaL = 0;
    }
  } else if (mouseY > 266 && mouseY < 532 && conteoG.reduce((a, b) => a + b, 0) < limiteImagenes) {
    if (tiempoDentroCapaG >= tiempoLimite) {
      let i = floor(random(cant));
      let x = random(width);
      let y = random(height);
      let w = random(250, 450);
      let h = random(250, 450);
      CapamanchaG.image(manchaG[i], x, y, w, h);
      conteoG[i]++;
      posG.push({ x, y, w, h });
      anguloG.push(0);
      tiempoDentroCapaG = 0;
    }
  }

  // Verificamos si el mouse ha permanecido en la misma capa por 2 segundos
  if (mouseY > 0 && mouseY < 266 && conteoN.reduce((a, b) => a + b, 0) >= limiteImagenes && tiempoDentroCapaN >= tiempoRotacion) {
    rotarN = true;
    rotarG = false;
    rotarLineas = false;
  } else if (mouseY > 532 && mouseY < 800 && conteoLineas.reduce((a, b) => a + b, 0) >= limiteImagenes && tiempoDentroCapaL >= tiempoRotacion) {
    rotarLineas = true;
    rotarG = false;
    rotarN = false;
  } else if (mouseY > 266 && mouseY < 532 && conteoG.reduce((a, b) => a + b, 0) >= limiteImagenes && tiempoDentroCapaG >= tiempoRotacion) {
    rotarG = true;
    rotarN = false;
    rotarLineas = false;
  } else {
    rotarN = false;
    rotarLineas = false;
    rotarG = false;
  }

  // Rotar imágenes si se ha alcanzado el límite de imágenes y han pasado 2 segundos
  CapamanchaN.clear();
  Capalineas.clear();
  CapamanchaG.clear();

  for (let i = 0; i < posN.length; i++) {
    if (rotarN) {
      anguloN[i] += 0.01;
    }
    CapamanchaN.push();
    CapamanchaN.translate(posN[i].x + posN[i].w / 2, posN[i].y + posN[i].h / 2);
    CapamanchaN.rotate(anguloN[i]);
    CapamanchaN.image(manchaN[i % cant], -posN[i].w / 2, -posN[i].h / 2, posN[i].w, posN[i].h);
    CapamanchaN.pop();
  }

  for (let i = 0; i < posLineas.length; i++) {
    if (rotarLineas) {
      anguloLineas[i] += 0.01;
    }
    Capalineas.push();
    Capalineas.translate(posLineas[i].x + posLineas[i].w / 2, posLineas[i].y + posLineas[i].h / 2);
    Capalineas.rotate(anguloLineas[i]);
    Capalineas.image(lineas[i % cant], -posLineas[i].w / 2, -posLineas[i].h / 2, posLineas[i].w, posLineas[i].h);
    Capalineas.pop();
  }

  for (let i = 0; i < posG.length; i++) {
    if (rotarG) {
      anguloG[i] += 0.01;
    }
    CapamanchaG.push();
    CapamanchaG.translate(posG[i].x + posG[i].w / 2, posG[i].y + posG[i].h / 2);
    CapamanchaG.rotate(anguloG[i]);
    CapamanchaG.image(manchaG[i % cant], -posG[i].w / 2, -posG[i].h / 2, posG[i].w, posG[i].h);
    CapamanchaG.pop();
  }

  image(CapamanchaN, 0, 0);
  image(Capalineas, 0, 0);
  image(CapamanchaG, 0, 0);
}
*/
// Avances hasta 07.06.2024 
// Capas
let CapamanchaG;
let CapamanchaN;
let Capalineas;
// Cantidad
let cant = 5;
// Arreglos
let manchaG = [];
let manchaN = [];
let lineas = [];
// Contadores de...
let conteoG = [];
let conteoN = [];
let conteoLineas = [];
let manchasG = [];
let manchasN = [];
let manchasLineas = [];
let tiempoDentroCapaN = 0;
let tiempoDentroCapaG = 0;
let tiempoDentroCapaL = 0;
let tiempoAnterior = 0;
let tiempoLimite = 1000;
let tiempoRotacion = 2000;
let limiteImagenes = 5;
// Booleans 
let rotarG = false;
let rotarN = false;
let rotarLineas = false;

// Carga de imagenes
function preload() {
  for (let i = 0; i < cant; i++) {
    manchaG[i] = loadImage("data/manchasg" + (i + 1) + ".png");
    conteoG[i] = 0;
    manchaN[i] = loadImage("data/manchasn" + (i + 1) + ".png");
    conteoN[i] = 0;
    lineas[i] = loadImage("data/Linea" + (i + 1) + ".png");
    conteoLineas[i] = 0;
  }
}

function setup() {
  createCanvas(550, 800);
  CapamanchaG = createGraphics(550, 800);
  CapamanchaN = createGraphics(550, 800);
  Capalineas = createGraphics(550, 800);
}

function draw() {
  background(200);
  // Contadores
  let tiempoTranscurrido = millis() - tiempoAnterior;
  tiempoAnterior = millis();
  // Si el mouse....  Activan contadores
  if (mouseY > 0 && mouseY < 266) {
    tiempoDentroCapaN += tiempoTranscurrido;
    tiempoDentroCapaG = 0;
    tiempoDentroCapaL = 0;
  } else if (mouseY > 532 && mouseY < 800) {
    tiempoDentroCapaL += tiempoTranscurrido;
    tiempoDentroCapaG = 0;
    tiempoDentroCapaN = 0;
  } else if (mouseY > 266 && mouseY < 532) {
    tiempoDentroCapaG += tiempoTranscurrido;
    tiempoDentroCapaN = 0;
    tiempoDentroCapaL = 0;
  } else {
    tiempoDentroCapaN = 0;
    tiempoDentroCapaG = 0;
    tiempoDentroCapaL = 0;
  }
  // Si el mouse....
  if (mouseY > 0 && mouseY < 266 && conteoN.reduce((a, b) => a + b, 0) < limiteImagenes) {
    if (tiempoDentroCapaN >= tiempoLimite) {
      let i = floor(random(cant));
      let x = random(width);
      let y = random(height);
      let w = random(150, 250);
      let h = random(150, 250);
      manchasN.push(new ManchaN(manchaN[i], x, y, w, h));
      conteoN[i]++;
      tiempoDentroCapaN = 0;
    }
  } else if (mouseY > 532 && mouseY < 800 && conteoLineas.reduce((a, b) => a + b, 0) < limiteImagenes) {
    if (tiempoDentroCapaL >= tiempoLimite) {
      let i = floor(random(cant));
      let x = random(width);
      let y = random(height);
      let w = random(5, 50);
      let h = random(5, 50);
      manchasLineas.push(new Lineas(lineas[i], x, y, w, h));
      conteoLineas[i]++;
      tiempoDentroCapaL = 0;
    }
  } else if (mouseY > 266 && mouseY < 532 && conteoG.reduce((a, b) => a + b, 0) < limiteImagenes) {
    if (tiempoDentroCapaG >= tiempoLimite) {
      let i = floor(random(cant));
      let x = random(width);
      let y = random(height);
      let w = random(250, 450);
      let h = random(250, 450);
      manchasG.push(new ManchaG(manchaG[i], x, y, w, h));
      conteoG[i]++;
      tiempoDentroCapaG = 0;
    }
  }
  // Condicionales con posicion = booleanas
  if (mouseY > 0 && mouseY < 266 && conteoN.reduce((a, b) => a + b, 0) >= limiteImagenes && tiempoDentroCapaN >= tiempoRotacion) {
    rotarN = true;
    rotarG = false;
    rotarLineas = false;
  } else if (mouseY > 532 && mouseY < 800 && conteoLineas.reduce((a, b) => a + b, 0) >= limiteImagenes && tiempoDentroCapaL >= tiempoRotacion) {
    rotarLineas = true;
    rotarG = false;
    rotarN = false;
  } else if (mouseY > 266 && mouseY < 532 && conteoG.reduce((a, b) => a + b, 0) >= limiteImagenes && tiempoDentroCapaG >= tiempoRotacion) {
    rotarG = true;
    rotarN = false;
    rotarLineas = false;
  } else {
    rotarN = false;
    rotarLineas = false;
    rotarG = false;
  }
  // Hace que se borre el paso de la imagen
  CapamanchaN.clear();
  Capalineas.clear();
  CapamanchaG.clear();

  manchasN.forEach(m => {
    if (rotarN) {
      m.rotar();
    }
    m.dibujar(CapamanchaN);
  });

  manchasLineas.forEach(m => {
    if (rotarLineas) {
      m.rotar();
    }
    m.dibujar(Capalineas);
  });

  manchasG.forEach(m => {
    if (rotarG) {
      m.rotar();
    }
    m.dibujar(CapamanchaG);
  });

  image(CapamanchaN, 0, 0);
  image(Capalineas, 0, 0);
  image(CapamanchaG, 0, 0);
}
