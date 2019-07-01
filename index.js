const dateTMCUP = new Date(2020, 5, 13, 18);
let dateAjd = new Date(Date.now());
let tempsRestant = dateTMCUP - dateAjd;
console.log(tempsRestant);

var seconds = Math.floor( (tempsRestant/1000) % 60 );
var minutes = Math.floor( (tempsRestant/1000/60) % 60 );
var hours = Math.floor( (tempsRestant/(1000*60*60)) % 24 );
var days = Math.floor( tempsRestant/(1000*60*60*24) );

  console.log(days);
  console.log(hours);
  console.log(minutes);
  console.log(seconds);