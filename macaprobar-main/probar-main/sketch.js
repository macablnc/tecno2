let CapamanchaG; 
let CapamanchaN; 
let Capalineas; 
let Capafondo;
let fondo; // Variable para la imagen de fondo
let cant = 5;
let manchaG = [];
let manchaN = [];
let lineas = [];
let tiempoDentroCapa = 0;
let tiempoAnterior = 0;
let tiempoRotacion = 2000; // 2 segundos
let capaActual = "";
let limiteImagenes = 5;
let manchasG = [];
let manchasN = [];
let manchasLineas = [];

function preload() {
  fondo = loadImage("data/Lienzo2.png"); // Cargar la imagen de fondo

  for (let i = 0; i < cant; i++) {
    let dmanchaG = "data/manchasg" + (i + 1) + ".png";
    let dmanchaN = "data/manchasn" + (i + 1) + ".png";
    let dlineas = "data/Linea" + (i + 1) + ".png";

    manchaG[i] = loadImage(dmanchaG);
    manchaN[i] = loadImage(dmanchaN);
    lineas[i] = loadImage(dlineas);
  }
}

function setup() {
  createCanvas(550, 800);
  Capafondo = createGraphics(550, 800); // Crear capa para la imagen de fondo
  Capafondo.image(fondo, 0, 0, 550, 800); // Dibujar la imagen de fondo en la capa

  CapamanchaG = createGraphics(550, 800);
  CapamanchaN = createGraphics(550, 800);
  Capalineas = createGraphics(550, 800);
}

function draw() {
  background(200);
  image(Capafondo, 0, 0); // Dibujar la capa de fondo

  let tiempoTranscurrido = millis() - tiempoAnterior;
  tiempoAnterior = millis();

  actualizarCapa(tiempoTranscurrido);

  // Manejar las manchas para cada capa
  if (capaActual === "N") {
    manejarManchas(manchasN, ManchaN, manchaN, 150, 250);
  } else if (capaActual === "L") {
    manejarManchas(manchasLineas, Linea, lineas, 5, 50);
  } else if (capaActual === "G") {
    manejarManchas(manchasG, ManchaG, manchaG, 250, 450);
  }

  // Dibujar las manchas en sus respectivas capas
  dibujarManchas(CapamanchaN, manchasN);
  dibujarManchas(CapamanchaG, manchasG);
  dibujarManchas(Capalineas, manchasLineas);

  // Dibujar las capas en el canvas principal
  image(CapamanchaG, 0, 0);
  image(CapamanchaN, 0, 0);
  image(Capalineas, 0, 0);
}

function actualizarCapa(tiempoTranscurrido) {
  let nuevaCapa = "";

  if (mouseY > 0 && mouseY < 266) {
    nuevaCapa = "N";
  } else if (mouseY > 532 && mouseY < 800) {
    nuevaCapa = "L";
  } else if (mouseY > 266 && mouseY < 532) {
    nuevaCapa = "G";
  }

  if (nuevaCapa !== capaActual) {
    if (capaActual !== "") {
      // Detener la rotación de la mancha en la capa anterior
      detenerRotacionMancha(capaActual);
    }
    capaActual = nuevaCapa;
    tiempoDentroCapa = 0; // Reiniciar el tiempo al cambiar de capa
  } else {
    tiempoDentroCapa += tiempoTranscurrido;
  }
}

function detenerRotacionMancha(capa) {
  if (capa === "N" && manchasN.length > 0) {
    manchasN[manchasN.length - 1].stopRotating();
  } else if (capa === "L" && manchasLineas.length > 0) {
    manchasLineas[manchasLineas.length - 1].stopRotating();
  } else if (capa === "G" && manchasG.length > 0) {
    manchasG[manchasG.length - 1].stopRotating();
  }
}

function manejarManchas(manchas, ClaseMancha, imagenes, minSize, maxSize) {
  if (manchas.length === limiteImagenes) {
    // Desvanecimiento de la mancha más antigua al alcanzar el límite
    manchas[0].desvanecer();
    if (manchas[0].opacidad <= 0) {
      manchas.shift(); // Eliminar la mancha más antigua cuando sea transparente
    }
  }

  if (manchas.length < limiteImagenes) { // Verificar que no haya más de 5 manchas
    if (tiempoDentroCapa >= tiempoRotacion) {
      if (manchas.length > 0) {
        manchas[manchas.length - 1].startRotating();
      }
    }

    if (manchas.length === 0 || tiempoDentroCapa === 0) {
      let i = floor(random(cant));
      let x = random(width);
      let y = random(height);
      let w = random(minSize, maxSize);
      let h = random(minSize, maxSize);
      let velocidad = random(0.01, 0.05); // Velocidad aleatoria
      let nuevaMancha = new ClaseMancha(imagenes[i], x, y, w, h, velocidad);
      manchas.push(nuevaMancha);
    }
  }
}

function dibujarManchas(capa, manchas) {
  capa.clear();
  for (let mancha of manchas) {
    mancha.dibujar(capa);
  }
}
