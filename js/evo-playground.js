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
          $.getScript("./src/js/index.txt");
          $('#box3 pre').text(response);
        });

      });

  });

  $(document).on('keyup','#box1 pre',function(){
    console.log("edit me edit");

    // delay
    $(this).parseMe();

  });

$.fn.parseMe = function () {

  var html = $('#box1 pre').html();
  var css = $('#box2 pre').html();
  var js = $('#box3 pre').val();

  $('#box4').html('<div id="stage">'+decodeEntities(html)+' </div>');
  $('#box4 div').append('<style>'+decodeEntities(css)+'</style>');
  //$.getScript(js);

};

function decodeEntities(encodedString) {
    var textArea = document.createElement('textarea');
    textArea.innerHTML = encodedString;
    return textArea.value;
}

$(this).parseMe();

});
