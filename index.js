// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.
function parOimpar(numero){
  if(numero % 2 === 0){
    console.log(numero +" Es par")
  }else{
    console.log(numero +" No es par")
  }
}
parOimpar(4)
parOimpar(5)
parOimpar(22)
parOimpar(55)

// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.


function mayorOmenor(num1, num2){
  if(num1 > num2){
    console.log(num1 + " Es mayor que " + num2)
  }else if(num1 < num2){
    console.log(num1 + " Es menor que " + num2)
  }else{
    console.log(num1 + " y " + num2 + " Son iguales")
  }
}


mayorOmenor(1, 2)
mayorOmenor(5, 2)
mayorOmenor(10, 10)

// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

function multiploDeN(multiplo){
  if(multiplo %5 === 0){
    console.log(multiplo + " Es multiplo de 5")
  }else{
    console.log(multiplo + " No es multiplo de 5")
  }
}

multiploDeN(40)
multiploDeN(1)



// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

function cadenaNumeros(n){
  for(let i = 0; i <= n; i++){
    console.log(i)
  }
}

cadenaNumeros(10)


// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

function palabraYnumero(p, n){
  for(let i = 0; i < n; i++){
    console.log(p)
  }
}


palabraYnumero("Messi", 10)

// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
let miArray = ["Santino", "Rossi", "Nucba", "JS"] 
    
function recorrerArray(santino){
  for(let i = 0; i < santino.length; i++){
    console.log(santino[i])
}
}
recorrerArray(miArray)



//7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".


function recorrerArray2(numeros){
  for(i = 0; i < numeros.length; i++){
    if(i !== 4){
      console.log(numeros[i])
    }    
  }
}
let miArray2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

recorrerArray2(miArray2)

// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

function arrayNumeros(a, n){
  for(let i = 0; i < a.length; i++){
    const resultado = a[i] * n;
    console.log(resultado)
  }
}


let arrayMultiplicar = [2, 4, 5, 4, 6, 7]
arrayNumeros(arrayMultiplicar, 2)