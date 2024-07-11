let CapamanchaG, CapamanchaN, Capalineas, Capafondo;
let fondo; // Variable para la imagen de fondo
let cant = 5;
let manchaG = [], manchaN = [], lineas = [];
let tiempoDentroCapa = 0;
let tiempoAnterior = 0;
let capaActual = "";
let limiteImagenes = 5; // Limitar a 4 imágenes para pruebas
let manchasG = [], manchasN = [], manchasLineas = [];
let estado = "";
let tiempoRotacion = 500; // milisegundos o segundos
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
let distanciaMinima = 65; // Distancia mínima entre manchas

// Arrays para llevar registro de las imágenes utilizadas
let manchaGUsadas = [], manchaNUsadas = [], lineasUsadas = [];

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
  let canvas = createCanvas(450, 650);
  canvas.parent('sketch-container'); // Attach canvas to div

  // Inicializar capas gráficas para p5.Graphics
  Capafondo = createGraphics(450, 650);
  Capafondo.image(fondo, 0, 0, 450, 650);

  CapamanchaG = createGraphics(450, 650);
  CapamanchaN = createGraphics(450, 650);
  Capalineas = createGraphics(450, 650);

  // Inicializar manchasG en posiciones aleatorias
  inicializarManchasG();

  // Attach click event listener to canvas
  canvas.mouseClicked(startAudio);
}

function inicializarManchasG() {
  for (let i = 0; i < limiteImagenes; i++) {
    agregarManchaG();
  }
}

function agregarManchaG() {
  let idx = seleccionarImagenNoUsada(manchaGUsadas, cant);
  let w = random(250, 350); // Ancho entre 250 y 350
  let h = random(250, 350); // Alto entre 250 y 350
  let x, y;
  let validPosition = false;

  while (!validPosition) {
    x = random(0, width - w); // Ajustar para que x esté dentro del ancho del canvas
    y = random(0, height - h); // Ajustar para que y esté dentro del alto del canvas
    validPosition = true;

    for (let mancha of manchasG) {
      if (dist(x, y, mancha.x, mancha.y) < distanciaMinima) {
        validPosition = false;
        break;
      }
    }
  }

  let velocidad = 0; // Sin rotación
  let nuevaMancha = new ManchaG(manchaG[idx], x, y, w, h, velocidad);
  nuevaMancha.opacidad = 255; // Aparecer con opacidad completa
  nuevaMancha.apareciendo = false; // No aparecer progresivamente
  manchasG.push(nuevaMancha);

  // Marcar la imagen como usada
  manchaGUsadas.push(idx);

  // Dibujar la mancha en CapamanchaG
  nuevaMancha.dibujar(CapamanchaG);
}

function seleccionarImagenNoUsada(usedArray, total) {
  if (usedArray.length >= total) {
    usedArray.length = 0; // Resetear el array si todas las imágenes ya fueron usadas
  }
  
  let idx;
  do {
    idx = floor(random(total));
  } while (usedArray.includes(idx));
  
  return idx;
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
  background(200); // Establecer el color de fondo del canvas principal
  image(Capafondo, 0, 0); // Dibujar la capa de fondo en el canvas principal

  let tiempoTranscurrido = millis() - tiempoAnterior; // Calcular el tiempo transcurrido desde la última actualización
  tiempoAnterior = millis(); // Actualizar el tiempo anterior

  actualizarCapa(tiempoTranscurrido); // Actualizar la capa actual en función de la posición del mouse y el tiempo transcurrido

  // Manejar las manchas para cada capa
  if (capaActual === "N") {
    manejarAparicionManchas(manchasN, ManchaN, manchaN, 150, 350, manchaNUsadas); // Manejar la aparición de manchas negras
    manejarRotacionManchas(manchasN); // Manejar la rotación de manchas negras
  } else if (capaActual === "L") {
    manejarAparicionManchas(manchasLineas, Linea, lineas, 170, 200, lineasUsadas); // Manejar la aparición de líneas
    manejarRotacionManchas(manchasLineas); // Manejar la rotación de líneas
  } else if (capaActual === "G") {
    manejarAparicionManchas(manchasG, ManchaG, manchaG, 250, 450, manchaGUsadas); // Manejar la aparición de manchas grandes
    manejarRotacionManchas(manchasG); // Manejar la rotación de manchas grandes
  }

  dibujarManchas(CapamanchaN, manchasN); // Dibujar las manchas negras
  dibujarManchas(CapamanchaG, manchasG); // Dibujar las manchas grandes
  dibujarManchas(Capalineas, manchasLineas); // Dibujar las líneas

  image(CapamanchaG, 0, 0); // Dibujar la capa de manchas grandes en el canvas principal
  image(CapamanchaN, 0, 0); // Dibujar la capa de manchas negras en el canvas principal
  image(Capalineas, 0, 0); // Dibujar la capa de líneas en el canvas principal

  fill(255, 50, 200);
  textSize(16);
  text('Duración del sonido: ' + duracionSonido.toFixed(2) + ' segundos', 10, height - 10);

  antesHabiaSonido = haySonido; // Guardar estado del fotograma anterior
}

function actualizarCapa(tiempoTranscurrido) {
  let nuevaCapa = "";

  if (pitch) {
    pitch.getPitch(function (err, frequency) {
      if (frequency > 150 && frequency < 399) {
        nuevaCapa = "N";
      } else if (frequency >400) {
        nuevaCapa = "L";
      }
      if (nuevaCapa !== capaActual) {
        if (capaActual) {
          detenerRotacionManchas(capaActual); // Detener la rotación de las manchas al cambiar de capa
        }
        capaActual = nuevaCapa;
        tiempoDentroCapa = 0; // Resetear el tiempo al cambiar de capa
      } else {
        tiempoDentroCapa += tiempoTranscurrido;
        if (manchasG.length >= limiteImagenes || manchasN.length >= limiteImagenes || manchasLineas.length >= limiteImagenes) {
          iniciarRotacionManchas(capaActual); // Iniciar la rotación de las manchas si se alcanzó el límite
        }
      }
    });
  }
}

function manejarAparicionManchas(manchas, ClaseMancha, imagenes, minSize, maxSize, usadasArray) {
  if (haySonido && !antesHabiaSonido && manchas.length < limiteImagenes) {
    let idx = seleccionarImagenNoUsada(usadasArray, cant);
    let w = random(minSize, maxSize);
    let h = random(minSize, maxSize);
    let x, y;
    let validPosition = false;

    while (!validPosition) {
      x = random(0, width - w); // Ajustar para que x esté dentro del ancho del canvas
      y = random(0, height - h); // Ajustar para que y esté dentro del alto del canvas
      validPosition = true;

      for (let mancha of manchas) {
        if (dist(x, y, mancha.x, mancha.y) < 150) {
          validPosition = false;
          break;
        }
      }
    }

    let velocidad = random(0.05, 0.25); // Velocidades
    let nuevaMancha = new ClaseMancha(imagenes[idx], x, y, w, h, velocidad);
    nuevaMancha.rotacionInicial = random(TWO_PI); // Rotación inicial aleatoria
    nuevaMancha.apareciendo = true; // Marcar como apareciendo
    nuevaMancha.opacidad = 0; // Empezar con opacidad 0
    nuevaMancha.tiempoCreacion = millis(); // Registrar el tiempo de creación
    manchas.push(nuevaMancha);

    // Marcar la imagen como usada
    usadasArray.push(idx);
  }
}

function manejarRotacionManchas(manchas) {
  if (manchas.length >= limiteImagenes && tiempoDentroCapa >= tiempoRotacion) {
    for (let mancha of manchas) {
      if (!mancha.rotando) {
        mancha.velocidad = random(0.02, 0.7); // Velocidades más lentas
        mancha.startRotating();
      }
    }
  }
}

function dibujarManchas(capa, manchas) {
  capa.clear(); // Limpiar la capa antes de dibujar
  for (let mancha of manchas) {
    mancha.dibujar(capa); // Dibujar cada mancha en la capa correspondiente
  }
}

function detenerRotacionManchas(capa) {
  let manchas = obtenerManchasPorCapa(capa); // Obtener las manchas de la capa correspondiente
  if (manchas) {
    for (let mancha of manchas) {
      mancha.stopRotating(); // Detener la rotación de cada mancha
    }
  }
}

function iniciarRotacionManchas(capa) {
  let manchas = obtenerManchasPorCapa(capa); // Obtener las manchas de la capa correspondiente
  if (manchas && manchas.length >= limiteImagenes && tiempoDentroCapa >= tiempoRotacion) {
    for (let mancha of manchas) {
      if (!mancha.rotando) {
        mancha.startRotating(); // Iniciar la rotación de cada mancha si no está rotando
      }
    }
  }
}

function obtenerManchasPorCapa(capa) {
  if (capa === "N") return manchasN;
  if (capa === "L") return manchasLineas;
  if (capa === "G") return manchasG;
  return null; // Devolver las manchas correspondientes a la capa
}

// Función para manejar el resultado del clasificador de sonido
function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  label = results[0].label;
}

function getPitch() {
  pitch.getPitch(function (err, frequency) {
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