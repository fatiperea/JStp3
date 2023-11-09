function tablaMultiplicar (num){
    document.write("Tabla de multiplicar de ", num+"<br>");
    for(let i=1; i<=10; i++)
    {
        document.write(num+" * "+i+" = "+num * i+"<br>");
    }

}

const numero= parseInt(prompt("Ingrese un numero: "));

if(isNaN(numero)) document.write("No ingreso numero");
else
    tablaMultiplicar(numero);