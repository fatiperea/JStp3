const meses = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

document.write("<h3>" + "Lista de meses" + "</h3>");

document.write(`<ul>`);
for (let i = 0; i < meses.length; i++) {
  document.write(`<li>${meses[i]}</li>`);
}
document.write(`</ul>`);
