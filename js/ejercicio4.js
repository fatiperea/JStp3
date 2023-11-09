function paridad (numero){
    if(numero % 2 === 0) document.write("El numero ingresado es par");
    else document.write("El numero ingresado es impar");
}

const number= parseInt (prompt("Ingrese un numero: "));

paridad(number);
