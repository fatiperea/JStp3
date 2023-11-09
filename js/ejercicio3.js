let dado1, dado2;

const apariciones = [];

for (j = 2; j <= 12; j++) {
  apariciones[j] = 0;
}
document.write("Tiradas:<br>");
for (let i = 1; i <= 50; i++) {
  dado1 = Math.floor(Math.random() * 6 + 1);
  dado2 = Math.floor(Math.random() * 6 + 1);

  document.write(dado1 + dado2 + "<br>");
  switch (dado1 + dado2) {
    case 2:
      apariciones[2]++;

      break;

    case 3:
      apariciones[3]++;

      break;
    case 4:
      apariciones[4]++;

      break;
    case 5:
      apariciones[5]++;

      break;
    case 6:
      apariciones[6]++;
      break;
    case 7:
      apariciones[7]++;
      break;
    case 8:
      apariciones[8]++;
      break;
    case 9:
      apariciones[9]++;
      break;
    case 10:
      apariciones[10]++;
      break;
    case 11:
      apariciones[11]++;
      break;
    case 12:
      apariciones[12]++;
      break;
  }
}

document.write(`<table><thead>
<th>Suma</th><th>Apariciones</th>
</thead>`);
document.write(`<tbody>`);
for (let f = 2; f <= 12; f++) {
  document.write(` <tr>`);
  document.write(`<td>${f}</td>`);
  for (let c = 0; c < 1; c++) {
    document.write(`<td>${apariciones[f]}</td>`);
  }
  document.write(`</tr>`);
}
document.write(`    
</tbody>
</table>`);
