var app = app || {};

app.main = (function() {
  console.log('Your code starts here!');

  // Initialize variables
  var username;
  var connected = false;
  var socket = io();



  // All socket listeners go here
  var socketSetup = function(callback){
    // Socket events
    // Whenever the server emits 'login', log the login message
    socket.on('login', function (data) {
      connected = true;
      // Display the welcome message
      addParticipantsMessage(data);
    });

    // Call attachEvents
    callback();
  };

  // Log a message
  var log = function(message) {
    var $el = $('<li>').addClass('log').text(message);
    $('.messages').append($el);
  }

  var addParticipantsMessage = function(data) {
    log(username);
  }

  // Keyboard events
  var attachEvents = function(){
    $('.usernameInput').keypress(function(e) {
      if (e.keyCode == 13) {
        setUsername();
      }
    });

  };

  // Sets the client's username
  var setUsername = function() {
    username = $('.usernameInput').val();

    // If the username is valid
    if (username) {
      $('.login.page').fadeOut();
      $('.chat.page').show();
      // Tell the server your username
      socket.emit('add user', username);
    }
  }


  var init = function(){
    console.log('Initializing app.');
    socketSetup(attachEvents);  // Sending attachEvents as a callback
  };

  return {
    init: init
  };

})();

window.addEventListener('DOMContentLoaded', app.main.init);

// Additional reading: https://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions/