let i = 0,
  j = 0;
const ciudades = [];
do {
  ciudades[i++] = prompt("Ingrese ciudades: ");
} while (confirm("Seguir ingresando?"));

if (ciudades.length < 1) {
  document.write(
    "El arreglo ciudades tiene ",
    ciudades.length + " elementos" + "<br>"
  );
  document.write("Primer elemento: ", ciudades[0] + "<br>");
  document.write("Tercer elemento: ", ciudades[2] + "<br>");
  document.write("Ultimo elemento: ", ciudades[ciudades.length - 1] + "<br>");

  ciudades.push("Paris");

  document.write(
    "Agrego elemento al final: ",
    ciudades[ciudades.length - 1] + "<br>"
  );

  document.write("Segundo elemento: ", ciudades[1] + "<br>");

  ciudades.splice(1, 1, "Barcelona");

  document.write("Sustituyo segundo elemento: ", ciudades[1] + "<br>");

  document.write("<h4>Ciudades:<h4>");
  for (j = 0; j < ciudades.length; j++) document.write(ciudades[j] + "<br>");
} else document.write("No ingreso ciudades");
