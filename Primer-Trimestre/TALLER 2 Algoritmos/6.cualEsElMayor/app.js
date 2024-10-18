// Escriba un programa para encontrar cual es el número mayor entre tres números ingresados 
// por el usuario.

let num1 = prompt("digitar numero")
let num2 = prompt("digitar numero")
let num3 = prompt("digitar numero")

if(num1>num2&&num1>num3){
    alert("numero"+num1+"es mayor que el"+num2+"y"+num3)
} else if(num2>num1&&num2>num3) {
    alert("numero"+num2+"es mayor que el"+num1+"y"+num3)
} else if (num3>num2&&num3>num1) {
   alert("numero"+num3+"es mayor que el"+num1+"y"+num2)

}