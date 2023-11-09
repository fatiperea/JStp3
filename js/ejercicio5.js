function tieneMayusc(cadena){
    let aux = cadena.toUpperCase();
    document.write(aux);
    /*if(cadena === aux)
         document.write("Esta en mayúsculas");
    else
         document.write("Esta en minúsculas");*/
    //if(cadena === cadena.toLowercase()) document.write("Esta en minúsculas");

}
let texto=prompt("Ingrese texto: ");

//document.write(texto.toUpperCase());

tieneMayusc(texto);

