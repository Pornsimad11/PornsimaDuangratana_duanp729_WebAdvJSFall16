//https://codepen.io/mguthrie/pen/oxzYOK

!function(){
  
  var getGiphy = {
    
    url: "https://api.giphy.com/v1/stickers/random?api_key=dc6zaTOxFJmzC&tag=scary",
    
    writeToHTML: function(url, alt) {
      var imgHTML = '<img class="img-responsive" src="';
      imgHTML += url;
      imgHTML += '" alt="'
      imgHTML += alt;
      imgHTML += '">';
      return imgHTML;
    }
    
  }
  
  function callJSON(url) {
    
    $.getJSON(url, function(response){
      var newHTML = getGiphy.writeToHTML(response.data.image_url, response.data.caption);
      $('#view').html(newHTML);
    });
    
  }
  
  function newGiphy(el) {
      if (!el) return
      $(el).css('visibility', 'hidden');
      callJSON(getGiphy.url);
      $(el).css('visibility', 'visible');
      return true;
    }
    
  callJSON(getGiphy.url);
    
  $("#search-button").on('click', function(){
    newGiphy('#video-wrapper');
  });
    
}();



