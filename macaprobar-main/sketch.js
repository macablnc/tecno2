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
let capaActual = "";
let limiteImagenes = 5;
let manchasG = [];
let manchasN = [];
let manchasLineas = [];
let estado = "";

// Configuración de volumen y audio
let amp_min = 0.01;
let amp_max = 0.2;
let audioContext;
let mic;
let pitch;
let amp;
let haySonido = false;
let antesHabiaSonido = false;
let empezoElSonido = false;
let gestorAmp;
let amortiguacion = 0.9;

let tiempoInicioSonido = 0; // Variable para registrar el inicio del sonido
let duracionSonido = 0; // Variable para registrar la duración del sonido

function preload() {
  fondo = loadImage("data/Lienzo2.png"); // Cargar la imagen de fondo

  // Cargar imágenes de manchas y líneas
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
  let canvas = createCanvas(300, 550);
  canvas.parent('sketch-container'); // Attach canvas to div

  // Inicializar capas gráficas para p5.Graphics
  Capafondo = createGraphics(300, 550);
  Capafondo.image(fondo, 0, 0, 300, 550);

  CapamanchaG = createGraphics(300, 550);
  CapamanchaN = createGraphics(300, 550);
  Capalineas = createGraphics(300, 550);

  // Attach click event listener to canvas
  canvas.mouseClicked(startAudio);
}

function startAudio() {
  audioContext = getAudioContext();
  audioContext.resume().then(() => {
    mic = new p5.AudioIn();
    mic.start(startPitch);
  });
}

function startPitch() {
  pitch = ml5.pitchDetection('./model/', audioContext, mic.stream, modelLoaded);
}

function modelLoaded() {
  getPitch();
}

function draw() {
  background(200);

  image(Capafondo, 0, 0);

  let tiempoTranscurrido = millis() - tiempoAnterior;
  tiempoAnterior = millis();

  actualizarCapa(tiempoTranscurrido);

  // Manejar las manchas para cada capa
  if (capaActual === "N") {
    manejarManchas(manchasN, ManchaN, manchaN, 150, 250);
  } else if (capaActual === "L") {
    manejarManchas(manchasLineas, Linea, lineas, 50, 100);
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

  // Mostrar la duración del sonido
  fill(0);
  textSize(16);
  text('Duración del sonido: ' + duracionSonido.toFixed(2) + ' segundos', 10, height - 10);

  antesHabiaSonido = haySonido; // Guardar estado del fotograma anterior
}

function actualizarCapa(tiempoTranscurrido) {
  let nuevaCapa = "";

  if (pitch) {
    pitch.getPitch(function(err, frequency) {
      if (frequency > 90 && frequency < 220) {
        nuevaCapa = "N";
      } else if (frequency > 350) {
        nuevaCapa = "L";
      } else if (frequency > 222 && frequency < 320) {
        nuevaCapa = "G";
      }

      if (nuevaCapa !== capaActual) {
        capaActual = nuevaCapa;
        tiempoDentroCapa = 0; // Resetear el tiempo al cambiar de capa
      } else {
        tiempoDentroCapa += tiempoTranscurrido;
      }
    });
  }
}

function manejarManchas(manchas, ClaseMancha, imagenes, minSize, maxSize) {
  if (manchas.length === limiteImagenes) {
    manchas[0].desvanecer();
    if (manchas[0].opacidad <= 0) {
      manchas.shift();
    }
  }

  if (manchas.length < limiteImagenes) {
    if (manchas.length === 0 || tiempoDentroCapa === 0) {
      let i = floor(random(cant));
      let w = random(minSize, maxSize);
      let h = random(minSize, maxSize);
      let x = random(0, width - 10 - w);
      let y = random(0, height - 10 - h);
      let velocidad = random(0.01, 0.05);
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

// Función para manejar el resultado del clasificador de sonido
function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  label = results[0].label;
}

// Esta función se llama cuando se redimensiona la ventana del navegador
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function getPitch() {
  pitch.getPitch(function(err, frequency) {
    if (err) {
      console.error(err);
    } else {
      // Actualizar haySonido según la frecuencia detectada
      haySonido = (frequency > 0);
      
      if (haySonido && !antesHabiaSonido) {
        tiempoInicioSonido = millis(); // Registrar el tiempo cuando el sonido empieza
      }

      if (haySonido) {
        duracionSonido = (millis() - tiempoInicioSonido) / 1000; // Actualizar duración del sonido en segundos
      } else {
        duracionSonido = 0;
      }
    }
    // Llamar a getPitch de nuevo para mantener la detección continua
    getPitch();
  });
}