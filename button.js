var five = require("johnny-five"),
  board, button;

board = new five.Board();

board.on("ready", function() {
  // Create a new `button` hardware instance.
  // This example allows the button module to
  // create a completely default instance
  button = new five.Button(2);

  // Inject the `button` hardware into
  // the Repl instance's context;
  // allows direct command line access
  board.repl.inject({
    button: button
  });

  var yellowLight = new five.Led(13);
  var redLight    = new five.Led(12);
  var blueLight   = new five.Led(11);

  // Button Event API

  // "down" the button is pressed
  button.on("down", function() {
    console.log("down");
    yellowLight.on();
    redLight.off();
  });

  // "hold" the button is pressed for specified time.
  //        defaults to 500ms (1/2 second)
  //        set
  button.on("hold", function() {
    console.log("hold");
    blueLight.strobe(100);
    redLight.off();
    yellowLight.off();
  });

  // "up" the button is released
  button.on("up", function() {
    console.log("up");
    yellowLight.off();
    blueLight.off();
  });
});
