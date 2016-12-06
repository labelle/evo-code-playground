$(document).ready(function() {

  $.get("./src/html/index.html", function(response) {
      html = response;
      $('#box1 pre').text(response);
      $('#box4').html('<div id="stage">'+html+'</div>');

      $.get("./src/css/index.css", function(response) {
        css = response;
        $('#box2 pre').text(response);
        $('#box4 div').append('<style>'+response+'</style>');

        $.get("./src/js/index.txt", function(response) {
          js = response;
          $('#box3 pre').text(response);
          $.getScript("./src/js/index.txt");
        });

      });

  });

  $(document).on('keyup','#box1 pre',function(){
    console.log("edit me edit");
    $(this).parseMe();
  });

  $(document).on('keyup','#box2 pre',function(){
    console.log("edit me edit");
    $(this).parseMe();
  });

  $(document).on('keyup','#box3 pre',function(){
    $(this).parseMe();
    console.log("edit me edit");

  });


$.fn.parseMe = function () {

  var html = $('#box1 pre').html();
  var css = $('#box2 pre').html();
  var js = $('#box3 pre').html();

  $('#box4').html('<div id="stage">'+$(this).decodeEntities(html)+' </div>');
  $('#box4 div').append('<style>'+$(this).decodeEntities(css)+'</style>');
  $(this).runScript(js);
};

$.fn.decodeEntities = function (encodedString) {
    var textArea = document.createElement('textarea');
    textArea.innerHTML = encodedString;
    return textArea.value;
};

$.fn.runScript = function (theInstructions) {
  console.log("called this");
  var F=new Function (theInstructions);
  return(F());
}

$(this).parseMe();

});
