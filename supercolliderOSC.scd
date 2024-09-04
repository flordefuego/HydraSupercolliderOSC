//Taken from Eli Fieldsteel example

~n1 = NetAddr.new("127.0.0.1",12000);

(
{
var sig;
	sig = SinOsc.ar(exprand(300,3000)!2);
	sig = sig * XLine.kr(0.5,0.001,1,doneAction:2)
}.play;

~colors = {rrand(0,2)}!3;

~n1.sendMsg(
	'/test', ~colors[0],~colors[1],~colors[2]
);

~colors;

);
