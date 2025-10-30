function calcular() {
  const formulario = document.getElementById("calculoMinutos");
  let total = 0;

  // Minutos
  const minutos = Number(formulario.minutos.value);
  total += minutos * 1;

  // Plan
  const plan = formulario.plan.value;
  if (plan === "tel") total += 200;
  else if (plan === "internet") total += 450;
  else if (plan === "tv") total += 850;

  // Otros servicios
  const servicios = formulario.querySelectorAll('input[name="servicio"]:checked');
  servicios.forEach(s => total += Number(s.value));

  // Paquete (porcentaje)
  const paquete = Number(formulario.paquete.value);
  total += total * (paquete / 100);

  // Resultado
  formulario.resultado.value = total.toFixed(2);
  alert("Total a pagar: $" + total.toFixed(2));
}