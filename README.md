# Función para sumar horas y minutos incluidos negativos.

Dado un array de horas en formato string:

```
const arrayHoras = [
  "05:48",
  "04:20",
  "06:44",
  "06:53",
  "-22:00",
  "-01:46",
  "10:30",
];
```

Importamos la función y la usamos de este modo:

```
const sumarHoras = require("./suma");

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
```

Esto nos retorna:

```
10:29
```
