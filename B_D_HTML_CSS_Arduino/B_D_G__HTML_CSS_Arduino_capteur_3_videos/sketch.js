var serial; // déclraration de variable pour le port serie de la carte arduino
var valeurArduino = "waiting for data";  // on déclare une variable pour récupérer la valeur du capteur de la carte arduino
var vid01, vid02, vid03; // déclaration des variables pour identifier les videos dans la page html

window.onload = function() { // à la fin du chargement de la page…
  vid01 = document.getElementById("video1"); // vid01 correspond à l'élement html qui à l'id 'video1'
  vid02 = document.getElementById("video2"); // vid02 correspond à l'élement html qui à l'id 'video2'
  vid03 = document.getElementById("video3"); // vid03 correspond à l'élement html qui à l'id 'video3'

  vid01.loop = true; // ma vid01 sera jouée en boucle
  vid02.style.display = 'none'; // je masque l'id video2 (le css est commandé par le javascript : display:none;)
  vid03.style.display = 'none'; // je masque l'id video3 (le css est commandé par le javascript : display:none;)

  vid02.onended = finDeVideo02; // à la fin de la vidéo 02, je lance la fonction finDeVideo02. Voir lignes 49 et suivantes
  vid03.onended = finDeVideo03; // à la fin de la vidéo 03, je lance la fonction finDeVideo03. Voir lignes 49 et suivantes

  // ------------------------------------------------ //
  // Différentes fonctions pour faire communiquer
  // le port série de l'arduino avec le navigateur
  // ------------------------------------------------ //

  serial = new p5.SerialPort();
  // Assuming our Arduino is connected, let's open the connection to it
  // Change this to the name of your arduino's serial port
  serial.open("/dev/cu.usbmodemFA131");
  // Here are the callbacks that you can register
  // When we connect to the underlying server
  serial.on('connected', serverConnected);
  // When we some data from the serial port
  serial.on('data', gotData);
  // When our serial port is opened and ready for read/write
  serial.on('open', gotOpen);
}


function draw() { // fonction draw de p5js. Voir :

  if(valeurArduino < 500 && vid01.paused == false){ // si la valeur de mon capteur est inférieur à 500 et si la vidéo01 est en pause
    vid01.removeAttribute("controls"); // je masque les controles de la video avec l'id video1
    // vid01.pause(); // je mets la video1 en pause
    // vid01.style.display = 'none'; // je masque l'id video1 (le css est commandé par le javascript : display:none;)
    // vid02.style.display = 'block'; // j'affiche l'id video2 (le css est commandé par le javascript : display:block;)
    // vid02.play(); // je lance la lecture de la vidéo02
    vid01.setAttribute("src", "assets/b.mp4");
    vid01.play();
  }
}

// ------------------------------------------------ //
// Fonctions personnalisées
// ------------------------------------------------ //
// ---------- Fonctions qui s'executent à la fin de la lecture des différentes vidéos
function finDeVideo01() {
  vid01.style.display = 'none'; // je masque l'id video1 (le css est commandé par le javascript : display:none;)
  vid02.style.display = 'block'; // j'affiche l'id video2 (le css est commandé par le javascript : display:block;)
  vid03.style.display = 'none'; // je masque l'id video3 (le css est commandé par le javascript : display:none;)
  vid02.play(); // je joue la video avec l'id video2
}

function finDeVideo02() {
  vid01.style.display = 'none'; // je masque l'id video1 (le css est commandé par le javascript : display:none;)
  vid02.style.display = 'none'; // je masque l'id video2 (le css est commandé par le javascript : display:none;)
  vid03.style.display = 'block'; // j'affiche l'id video3 (le css est commandé par le javascript : display:block;)
  vid03.play(); // je joue la video avec l'id video3
}

function finDeVideo03() {
  vid01.style.display = 'block'; // j'affiche l'id video1 (le css est commandé par le javascript : display:block;)
  vid02.style.display = 'none';  // je masque l'id video2 (le css est commandé par le javascript : display:none;)
  vid03.style.display = 'none';  // je masque l'id video3 (le css est commandé par le javascript : display:none;)
  vid01.play(); // je joue la video avec l'id video1
  vid01.loop() = true;
}

// We are connected and ready to go
function serverConnected() {
  println("Connected to Server");
}

// Connected to our serial device
function gotOpen() {
  println("Serial Port is Open");
}

// There is data available to work with from the serial port
function gotData() {
  var currentString = serial.readLine();  // read the incoming string
  trim(currentString);                    // remove any trailing whitespace
  if (!currentString) return;             // if the string is empty, do no more

  valeurArduino = currentString;            // save it for the draw method
  console.log(valeurArduino);             // println the string
}
