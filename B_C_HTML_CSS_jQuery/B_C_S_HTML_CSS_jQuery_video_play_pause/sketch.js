<!-- //code by Julien Drochon
//www.julien-drochon.net
//for Soft Machine Lesson at ESA Pyrenees : www.esapyrenees.fr
// License Creative Commons BY-NC -->

jQuery(document).ready(function($) {
  $( "#bouton" ).click(function() {
    if ($("#maVideo").get(0).paused) {
      $("#maVideo").get(0).play();
      $( "#bouton" ).html("Pause");
    } else {
      $("#maVideo").get(0).pause();
      $( "#bouton" ).html("Play");
    }
  });
});
