(function (externalContext) {
  var helloSpeaker = {};
  var speakWord = "Hello";

  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  }

  externalContext.helloSpeaker = helloSpeaker;
})(window);

