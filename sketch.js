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



//CONFIG VOLUMEN
let amp_min = 0.01;
let amp_max=0.2;
//MICROFONO
let mic;
//AMPLITUD (volumen)
let amp;
//variable de sonido
let haySonido = false;
let antesHabiaSonido= false; //memoria de estado haySonido un fotograma atras

// Declare empezoElSonido as a global variable
let empezoElSonido = false;

// Gestor

let gestorAmp;
let amortiguacion = 0.9;

let imprimir = true;

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
  mic = new p5.AudioIn();
  mic.start();
  Capafondo = createGraphics(550, 800); // Crear capa para la imagen de fondo
  Capafondo.image(fondo, 0, 0, 550, 800); // Dibujar la imagen de fondo en la capa

  // GESTOR 
  gestorAmp= new GestorSenial (amp_min, amp_max); // gestor con umbral mininmo y maximo

  gestorAmp.f = amortiguacion;
  CapamanchaG = createGraphics(550, 800);
  CapamanchaN = createGraphics(550, 800);
  Capalineas = createGraphics(550, 800);
}

function draw() {
  background(200);

  gestorAmp.actualizar(mic.getLevel());
  amp= gestorAmp.filtrada;

  haySonido = amp > amp_min;
  empezoElSonido = haySonido && !antesHabiaSonido; // Update the global variable
  // GESTOR
 

  
  
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

  // Update antesHabiaSonido at the end of draw
  antesHabiaSonido = haySonido; //guardo estado del fotograma anterior
}

function actualizarCapa(tiempoTranscurrido) {
  let nuevaCapa = "";

  if (empezoElSonido) {
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
    tiempoDentroCapa = 0; // Resetear el tiempo al cambiar de capa
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
    // Iniciar el desvanecimiento de la mancha más antigua al alcanzar el límite
    manchas[0].desvanecer();
    if (manchas[0].opacidad <= 0) {
      manchas.shift(); // Elimina la mancha más antigua cuando sea completamente transparente
    }
  }

  if (manchas.length < limiteImagenes) { // Verificar que no haya mas de 5 manchas
    if (tiempoDentroCapa >= tiempoRotacion) {
      if (manchas.length > 0) {
        manchas[manchas.length - 1].startRotating();
      }
    }

    if (manchas.length === 0 || tiempoDentroCapa === 0) {
      let i = floor(random(cant));
      let w = random(minSize, maxSize);
      let h = random(minSize, maxSize);
      let x = random(0, width - 10 - w); // Evitar que se corte la imagen en el borde derecho
      let y = random(0, height - 10 - h); // Evitar que se corte la imagen en el borde de abajo
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

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function printData(){

  gestorAmp.dibujar(100, 500);
}