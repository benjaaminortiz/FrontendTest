// ESCALA FIBONACCI

// la funcion fibonacciNumber devuelve el numero de la
// escala fibonacci que se encuentra en la posicion 'n'
const fibonacciNumber = (n) => {
  const f = [0, 1];
  for (let i = 2; i <= n; i++) {
    f[i] = f[i - 2] + f[i - 1];
  }
  return f[i];
};

// la funcion fibonacciScale imprime en consola
// todos los numeros de la escala fibonacci desde el primero hasta la posicion 'n'
function fibonacciScale(n) {
  for (let i = 2; i <= n; i++) {
    console.log(fibonacciNumber(i));
  }
}



// FIZBUZZ

// La funcion ejecuta un loop que se detiene en 100 y reemplaza los divisibles
//por 3, 5 y 15 ( 5 y 3 a la vez) por las palabras solicitadas.
function fizzBuzzer() {
  for (let i = 1; i <= 100; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
  }
}



//STRING SEPARATOR

//La funcion ejecuta un metodo .split() que utiliza una expresion regular
// para dividir las palabras por espacios o signos de puntuacion.
// Cada resultado del split es comparado con el objeto existente,
// de no existir guarda el valor 1 para registrar su primer resultado, de existir
// aumenta su valor en 1+

function WordsSplitter(str) {
  var obj = {};
  str.split(/(\w+|[,?!])/g).forEach(function (word) {
    obj[word] = obj[word] ? ++obj[word] : 1;
  });

  return obj;
}
