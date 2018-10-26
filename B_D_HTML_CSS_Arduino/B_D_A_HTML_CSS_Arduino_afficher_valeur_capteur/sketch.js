//code by Julien Drochon
//www.julien-drochon.net
//for Soft Machine Lesson at ESA Pyrenees : www.esapyrenees.fr
// License Creative Commons BY-NC

window.onload = function() {
setInterval( connectToArduino, 15);

function connectToArduino() {
initConnection();
$("#capteur1").html("valeur capteur 1 : "+ dataFromArduino[0]);
$("#capteur2").html("valeur capteur 2 : "+ dataFromArduino[1]);
$("#capteur3").html("valeur capteur 3 : "+ dataFromArduino[2]);
//$("#map").html("map Data from sensor 1: "+ mapData(dataFromArduino[0], 0, 1023, 0, 255));
}
}
