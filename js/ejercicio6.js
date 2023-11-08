function perimetro(lado1, lado2){
   return(2*(lado1+lado2)); 
}

const lado1=parseInt (prompt("Ingrese lado1 de un rectángulo: "));
const lado2=parseInt (prompt("Ingrese lado2 de un rectángulo: "));

document.write("El perímetro del rectángulo es: ",perimetro(lado1, lado2));
