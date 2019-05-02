//code by Julien Drochon
//www.julien-drochon.net
//for Soft Machine Lesson at ESA Pyrenees : www.esapyrenees.fr
// License Creative Commons BY-NC
window.onload = function() {
  var vid01 = document.getElementById("video1");
  var vid02 = document.getElementById("video2");
  var vid03 = document.getElementById("video3");

  vid01.play();

  vid01.onended = function() {
    vid02.play();
  };

  vid02.onended = function() {
    vid03.play();
  };

  vid03.onended = function() {
    vid01.play();
  };

}
