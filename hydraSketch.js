//modified from the original example in Hydra documentation here
// https://github.com/hydra-synth/hydra-examples/blob/master/8-osc.js

// to try this example, run the processing sketch in the folder processing.
// clicking on the sketch window sends the mouse x and y position to hydra via osc
// set port to listen to osc messages. default port is 57101
msg.setPort(12000);

// do something when a message is received at address '/test'
msg.on('/test', (args) => {
// log osc results to console
 log(args)
})

// uses argument as variables in hydra
window.red = 0;
window.green = 0;
window.blue = 0;
msg.on('/test', (args) => {
 red = args[0]
 green = args[1]
 blue = args[2]
})

osc(3,0.1,()=>red).color(()=>red,()=>green,()=>blue)
.out()
