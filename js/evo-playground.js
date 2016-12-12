$(document).ready(function() {

  var htmlSrc = '#code-block-html';
  var cssSrc = '#code-block-css';
  var jsSrc = '#code-block-js';

  // 1. initial load of html assets
  $.get("./src/html/index.html", function(response) {
      html = response;
      $(htmlSrc).html(response);
      $('#box4').html('<div id="stage">' + html + '</div>');

      // 2. css asset load load
      $.get("./src/css/index.css", function(response) {
        css = response;
        $(cssSrc).html(response);
        $('#box4 div').append('<style>'+response+'</style>');

        // 3. js asset load: note we have to use .txt extension
        $.get("./src/js/index.txt", function(response) {
          js = response;
          $(jsSrc).text(response);
          $.getScript("./src/js/index.txt");
        });

      });

  });

  $(document).on('keyup', htmlSrc,function(){
    $(this).parseMe();
  });

  $(document).on('keyup', cssSrc,function(){
    $(this).parseMe();
  });

  $(document).on('keyup', jsSrc,function(){
    $(this).parseMe();
  });

$.fn.parseMe = function () {

  var html = $(htmlSrc).val();
  var css = $(cssSrc).val();
  var js = $(jsSrc).val();

  $('#box4').html('<div id="stage">'+ html +' </div>');
  $('#box4 div').append('<style>'+ css +'</style>');
  $(this).runScript(js);
};

$.fn.runScript = function (theInstructions) {
  console.log("called this");
  var F=new Function (theInstructions);
  return(F());
}

$(this).parseMe();

});
