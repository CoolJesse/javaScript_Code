let johnsGames = [89, 120, 103];
let mikesGames = [116, 94, 123];

let johnsAverage = 0;
for(i =0; i < johnsGames.length; i++){
	johnsAverage += johnsGames[i];
}
johnsAverage /= johnsGames.length;

let mikesAverage = 0;
for(i=0; i < mikesGames.length; i++){
	mikesAverage += mikesGames[i];
}
mikesAverage /= mikesGames.length;


if(johnsAverage > mikesAverage)
	console.log("John wins on average. John: " + johnsAverage + " Mike: " + mikesAverage);

else if(mikesAverage > johnsAverage)
	console.log("Mike wins on average. Mike: " + mikesAverage + " John: " + johnsAverage);

else
	console.log("John and Mike tie on average wins. John: " + johnsAverage + " Mike: " + mikesAverage);

/*************************************************************/
for(i=0; i < johnsGames.length; i++){
	johnsGames[i] = Math.random() * 200;
	mikesGames[i] = Math.random() * 200;
}

johnsAverage = 0;
mikesAverage = 0;

for(i =0; i < johnsGames.length; i++){
	johnsAverage += johnsGames[i];
}
johnsAverage = Math.floor(johnsAverage/johnsGames.length);

for(i=0; i < mikesGames.length; i++){
	mikesAverage += mikesGames[i];
}
mikesAverage = Math.floor(mikesAverage/mikesGames.length);

if(johnsAverage > mikesAverage)
	console.log("John wins on average. John: " + johnsAverage + " Mike: " + mikesAverage);

else if(mikesAverage > johnsAverage)
	console.log("Mike wins on average. Mike: " + mikesAverage + " John: " + johnsAverage);

else
	console.log("John and Mike tie on average wins. John: " + johnsAverage + " Mike: " + mikesAverage);

/**************************************************************************/

let marysGames = [97, 134, 105];

let marysAverage = 0;
for(i =0; i < marysGames.length; i++){
	marysAverage += marysGames[i];
}
marysAverage /= marysGames.length;

for(i=0; i < johnsGames.length; i++){
	johnsGames[i] = Math.random() * 200;
	mikesGames[i] = Math.random() * 200;
}

johnsAverage = 0;
mikesAverage = 0;

for(i =0; i < johnsGames.length; i++){
	johnsAverage += johnsGames[i];
}
johnsAverage = Math.floor(johnsAverage/johnsGames.length);

for(i=0; i < mikesGames.length; i++){
	mikesAverage += mikesGames[i];
}
mikesAverage = Math.floor(mikesAverage/mikesGames.length);


if(johnsAverage > mikesAverage && johnsAverage > marysAverage)
	console.log("John wins on average. John: " + johnsAverage + " Mike: " + mikesAverage
	+ " Mary: " + marysAverage);

else if(marysAverage > johnsAverage && marysAverage > mikesAverage)
	console.log("Mary wins on average. Mary: " + marysAverage + " Mike: " + mikesAverage
	+ " John: " + johnsAverage);

else if(mikesAverage > johnsAverage && mikesAverage > marysAverage)
	console.log("Mike wins on average. Mike: " + mikesAverage + " John: " + johnsAverage
	+ "Mary: " + marysAverage);

else if(johnsAverage === mikesAverage && johnsAverage == marysAverage)
	console.log("All three tied John: " + johnsAverage + " Mike: " + mikesAverage + " Mary: " + marysAverage);	

else
	console.log("Somebody tied. John: " + johnsAverage + " Mike: " + mikesAverage + " Mary: " + marysAverage);