// Declare a "SerialPort" object
var serial;
var valeurArduino = "waiting for data";  // you'll use this to write incoming data to the canvas
var lebodydemonhtml;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Instantiate our SerialPort object
  serial = new p5.SerialPort();
  // Get a list the ports available
  // You should have a callback defined to see the results
  serial.list();
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

  lebodydemonhtml = select("#idBody"); // je selectionne l'element HTML qui a l'id "idBody"

}

function draw() {
  // background(255,255,255);
  // fill(0,0,0);
  // text(valeurArduino, 10, 10);
  lebodydemonhtml.style('background', color(map(valeurArduino, 500, 700, 0, 255),0,0));
}

//------- functions -------- //

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
  console.log(currentString);             // println the string
  valeurArduino = currentString;            // save it for the draw method
}
