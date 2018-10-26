<!-- //code by Julien Drochon
//www.julien-drochon.net
//for Soft Machine Lesson at ESA Pyrenees : www.esapyrenees.fr
// License Creative Commons BY-NC -->

jQuery(document).ready(function($) {
  $( "#bouton" ).click(function() {
    $( "#maVideo" )[0].currentTime = 7;
    $( "#maVideo" )[0].play()
  });
});
