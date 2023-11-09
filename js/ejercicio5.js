function tieneMayusc(cadena) {
  
  if (cadena === cadena.toUpperCase())
    document.write("El texto esta en mayúsculas");
  else if (cadena === cadena.toLowerCase())
    document.write("El texto esta en minúsculas");
  else 
   document.write("El texto contiene mayúsculas y minúsculas");
  
}
let texto = prompt("Ingrese texto: ");

tieneMayusc(texto);
