const sumarHoras = (horas) => {
  let acumuladorMinutos = 0;

  horas.forEach((horaActual) => {
    const [hora, minutos] = horaActual.split(":");

    if (hora.includes("-")) {
      acumuladorMinutos += parseInt(hora) * 60; // La hora ya es negativa por lo tanto se suma.
      acumuladorMinutos -= parseInt(minutos); // Los minutos son positivos por lo tanto se restan.
    } else {
      acumuladorMinutos += parseInt(hora) * 60;
      acumuladorMinutos += parseInt(minutos);
    }
  });

  let negativo = false;

  // Si el acumulador es negativo lo paso a positivo para hacer las cuentas.
  if (acumuladorMinutos < 0) {
    acumuladorMinutos *= -1;
    negativo = true;
  }

  let totalHoras = Math.trunc(acumuladorMinutos / 60); // Me quedo solo con la parte entera.
  let totalMinutos = acumuladorMinutos - totalHoras * 60;

  totalHoras = totalHoras.toString().padStart(2, 0);
  totalMinutos = totalMinutos.toString().padStart(2, 0);

  const total = `${totalHoras}:${totalMinutos}`;

  return negativo ? `-${total}` : `${total}`;
};

module.exports = sumarHoras;
