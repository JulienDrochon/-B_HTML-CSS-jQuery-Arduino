//code by Julien Drochon
//www.julien-drochon.net
//for Soft Machine Lesson at ESA Pyrenees : www.esapyrenees.fr
// License Creative Commons BY-NC

window.onload = function() {
setInterval( connectToArduino, 15);

function connectToArduino() {
initConnection();
var transformedData = mapData(dataFromArduino[0], 0, 1023, 0.01, 0.99);
$("#monImage").css("opacity", transformedData);
}
}
