var app = app || {};


app.main = (function(){

  console.log('Loading app.');


  var attachEvents = function(){

    console.log('Attaching events.');

    
    $('#search-button').off('click').on('click', function(){
      loadData($('#search-box').val());
      console.log("scarythings:" +$('#search-box').val());
    });

    $('#search-box').keypress(function(e) {
      if (e.keyCode == 13) {
        loadData($('#search-box').val());
      }
    });
  };

 
  var loadData = function(query){
    console.log('Searching for ' + query + '...');

    var giphyUrl="http://api.giphy.com/v1/stickers/search?q="+query+"&api_key=dc6zaTOxFJmzC"; //wants to make it random but when put in random endpoint it won't work
  
      $.ajax({
          url: giphyUrl,
          data:{
            q:query,
            limit:1

          },
          success: function (response) {
         
        console.log("response is:"+response.data);

       
        // console.log('Found ' + results.length + ' results.');

        appendData(response.data);
          }
      });

  };


  var appendData = function(data){
    console.log('Appending data.');
    console.log(data);

   
    $('#view').empty();


    $('html, body').animate({
            scrollTop: $('#view').offset().top + 'px'
        }, 'slow');

    // 3.
    for(var i = 0; i < data.length; i++){
      $('#view').append('<img src="' + data[i].images.downsized.url + '" class="gallery-item"/>');
    }
  };

  // 1.
  var init = function(){
    console.log('Initializing app.');
    attachEvents();
  };

  return {
    init: init
  };
})();

window.addEventListener('DOMContentLoaded', app.main.init);
