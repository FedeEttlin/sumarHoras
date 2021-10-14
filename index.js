const sumarHoras = require("./suma");

// Estas son las horas y minutos que quiero sumar. (Pueden ser negativos)
const arrayHoras = [
  "05:48",
  "04:20",
  "06:44",
  "06:53",
  "-22:00",
  "-01:46",
  "10:30",
];

console.log(sumarHoras(arrayHoras));
