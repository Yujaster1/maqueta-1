function mostrarCalculadora() {
    var seleccion = document.getElementById("seleccion").value;
    var display = document.getElementById("calculadora");

    switch (seleccion) {
        case "suma":
            display.innerHTML = `
                <label for="numero1">Número 1:</label>
                <input type="number" id="numero1"><br><br>
                <label for="numero2">Número 2:</label>
                <input type="number" id="numero2"><br><br>
                <button onclick="sumar()">Sumar</button>
                <p id="resultado"></p>
            `;
            break;
        case "resta":
            display.innerHTML = `
                <label for="numero1">Número 1:</label>
                <input type="number" id="numero1"><br><br>
                <label for="numero2">Número 2:</label>
                <input type="number" id="numero2"><br><br>
                <button onclick="restar()">Restar</button>
                <p id="resultado"></p>
            `;
            break;
        case "multiplicacion":
            display.innerHTML = `
                <label for="numero1">Número 1:</label>
                <input type="number" id="numero1"><br><br>
                <label for="numero2">Número 2:</label>
                <input type="number" id="numero2"><br><br>
                <button onclick="multiplicar()">Multiplicar</button>
                <p id="resultado"></p>
            `;
            break;
        case "division":
            display.innerHTML = `
                <label for="numero1">Número 1:</label>
                <input type="number" id="numero1"><br><br>
                <label for="numero2">Número 2:</label>
                <input type="number" id="numero2"><br><br>
                <button onclick="dividir()">Dividir</button>
                <p id="resultado"></p>
            `;
            break;
        case "potencia":
            display.innerHTML = `
                <label for="base">Base:</label>
                <input type="number" id="base"><br><br>
                <label for="exponente">Exponente:</label>
                <input type="number" id="exponente"><br><br>
                <button onclick="potencia()">Calcular Potencia</button>
                <p id="resultado"></p>
            `;
            break;
        case "factorial":
            display.innerHTML = `
                <label for="numero">Número:</label>
                <input type="number" id="numero"><br><br>
                <button onclick="factorial()">Calcular Factorial</button>
                <p id="resultado"></p>
            `;
            break;
        case "capicua": 
            display.innerHTML = ` 
                <label for="numeroCapicua">Número:</label> 
                <input type="number" id="numeroCapicua"><br><br> 
                <button onclick="verificarCapicua()">Verificar Capicúa</button> 
                <p id="resultado"></p>
            `;
            break;
        case "primo":
            display.innerHTML = `
                <label for="numeroPrimo">Número:</label>
                <input type="number" id="numeroPrimo"><br><br>
                <button onclick="verificarPrimo()">Verificar Primo</button>
                <p id="resultado"></p>
            `;
            break;
        case "fibonacci":
            display.innerHTML = `
                <label for="limiteFibonacci">Hasta el número:</label>
                <input type="number" id="limiteFibonacci"><br><br>
                <button onclick="generarFibonacci()">Generar Fibonacci</button>
                <p id="resultado"></p>
            `;
            break;
        case "romanos":
            display.innerHTML = `
                <label for="numeroRomano">Número:</label>
                <input type="number" id="numeroRomano"><br><br>
                <button onclick="convertirARomanos()">Convertir a Romanos</button>
                <p id="resultado"></p>
            `;
            break;
        case "pascal":
            display.innerHTML = `
                <label for="filasPascal">Número de Filas:</label>
                <input type="number" id="filasPascal"><br><br>
                <button onclick="generarMatrizPascal()">Generar Matriz de Pascal</button>
                <p id="resultado"></p>
            `;
            break;
        case "exponencial":
            display.innerHTML = `
                <label for="numeroExponencial">Número:</label>
                <input type="number" id="numeroExponencial"><br><br>
                <button onclick="generarSerieExponencial()">Generar Serie Exponencial</button>
                <p id="resultado"></p>
            `;
            break;
        case "generarPrimos":
            display.innerHTML = `
                <label for="numeroPrimos">Número:</label>
                <input type="number" id="numeroPrimos"><br><br>
                <button onclick="generarNumerosPrimos()">Generar Números Primos</button>
                <p id="resultado"></p>
            `;
            break;
        case "palindromo":
            display.innerHTML = `
                <label for="palabra">Palabra:</label>
                <input type="text" id="palabra"><br><br>
                <button onclick="verificarPalindromo()">Verificar Palíndromo</button>
                <p id="resultado"></p>
            `;
            break;
        case "invertirCadena":
            display.innerHTML = `
                <label for="cadena">Cadena:</label>
                <input type="text" id="cadena"><br><br>
                <button onclick="invertirCadena()">Invertir Cadena</button>
                <p id="resultado"></p>
            `;
            break;
        case "binarios":
            display.innerHTML = `
                <label for="numeroBinarios">Número:</label>
                <input type="number" id="numeroBinarios"><br><br>
                <button onclick="generarNumerosBinarios()">Generar Números Binarios</button>
                <p id="resultado"></p>
            `;
            break;
        case "rotarDerecha":
            display.innerHTML = `
                <label for="numeroRotarDerecha">Número:</label>
                <input type="number" id="numeroRotarDerecha"><br><br>
                <button onclick="rotarDerecha()">Rotar Derecha</button>
                <p id="resultado"></p>
            `;
            break;
        case "rotarIzquierda":
            display.innerHTML = `
                <label for="numeroRotarIzquierda">Número:</label>
                <input type="number" id="numeroRotarIzquierda"><br><br>
                <button onclick="rotarIzquierda()">Rotar Izquierda</button>
                <p id="resultado"></p>
            `;
            break;
        case "factoriales":
            display.innerHTML = `
                <label for="numeroFactoriales">Número:</label>
                <input type="number" id="numeroFactoriales"><br><br>
                <button onclick="generarFactorialesYSumar()">Generar Factoriales y Sumar</button>
                <p id="resultado"></p>
            `;
            break;
        case "digitosRepetidos":
            display.innerHTML = `
                <label for="numeroRepetidos">Número:</label>
                <input type="number" id="numeroRepetidos"><br><br>
                <button onclick="mostrarDigitosRepetidos()">Mostrar Dígitos Repetidos</button>
                <p id="resultado"></p>
            `;
            break;
        case "rotarParesDerecha":
            display.innerHTML = `
                <label for="numeroParesDerecha">Número:</label>
                <input type="number" id="numeroParesDerecha"><br><br>
                <button onclick="rotarParesDerecha()">Rotar Pares a la Derecha</button>
                <p id="resultado"></p>
            `;
            break;
        default:
            display.innerHTML = "";
            break;
    }
}


    
function sumar() {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var suma = num1 + num2;
    document.getElementById("resultado").innerHTML = "La suma es: " + suma;
}
function restar() {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var resta = num1 - num2;
    document.getElementById("resultado").innerHTML = "La resta es: " + resta;
}
function multiplicar() {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var multiplicacion = num1 * num2;
    document.getElementById("resultado").innerHTML = "La multiplicación es: " + multiplicacion;
}
function dividir() {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    if (num2 === 0) {
        document.getElementById("resultado").innerHTML = "Error: División por cero.";
    } else {
        var division = num1 / num2;
        document.getElementById("resultado").innerHTML = "La división es: " + division;
    }
}
function potencia() {
    var base = parseFloat(document.getElementById("base").value);
    var exponente = parseFloat(document.getElementById("exponente").value);
    var resultado = Math.pow(base, exponente);
    document.getElementById("resultado").innerHTML = "La potencia es: " + resultado;
}
function factorial() {
    var num = parseInt(document.getElementById("numero").value);
    if (num < 0) {
        document.getElementById("resultado").innerHTML = "Error: Factorial de un número negativo.";
    } else {
        var resultado = 1;
        for (var i = 1; i <= num; i++) {
            resultado *= i;
        }
        document.getElementById("resultado").innerHTML = "El factorial es: " + resultado;
    }
}
function verificarCapicua() { 
    var num = document.getElementById("numeroCapicua").value; 
    var esCapicua = num === num.split("").reverse().join(""); 
    if (esCapicua) { document.getElementById("resultado").innerHTML = "El número " + num + " es capicúa."
        ; } else { document.getElementById("resultado").innerHTML = "El número " + num + " no es capicúa."; 
    } 
}
function verificarPrimo() {
    var numero = parseInt(document.getElementById("numeroPrimo").value);
    var resultado = document.getElementById("resultado");

    if (esPrimo(numero)) {
        resultado.innerText = numero + " es un número primo.";
    } else {
        resultado.innerText = numero + " no es un número primo.";
    }
}

function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }

    for (var i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

function generarFibonacci() {
    var limite = parseInt(document.getElementById("limiteFibonacci").value);
    var resultado = document.getElementById("resultado");

    var fibonacci = [0, 1];
    for (var i = 2; i <= limite; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }

    resultado.innerText = "Serie Fibonacci hasta " + limite + ": " + fibonacci.join(", ");
}
function convertirARomanos() {
    var numero = parseInt(document.getElementById("numeroRomano").value);
    var resultado = document.getElementById("resultado");
    var romanos = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    var valores = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romano = "";

    for (var i = 0; i < valores.length; i++) {
        while (numero >= valores[i]) {
            romano += romanos[i];
            numero -= valores[i];
        }
    }
    resultado.innerText = "Número en Romanos: " + romano;
}

function generarMatrizPascal() {
    var filas = parseInt(document.getElementById("filasPascal").value);
    var resultado = document.getElementById("resultado");
    var pascal = [];

    for (var i = 0; i < filas; i++) {
        pascal[i] = new Array(i + 1);
        for (var j = 0; j < i + 1; j++) {
            if (j === 0 || j === i) {
                pascal[i][j] = 1;
            } else {
                pascal[i][j] = pascal[i - 1][j - 1] + pascal[i - 1][j];
            }
        }
    }
    resultado.innerText = "Matriz de Pascal:\n" + pascal.map(row => row.join(" ")).join("\n");
}

function generarSerieExponencial() {
    var numero = parseInt(document.getElementById("numeroExponencial").value);
    var resultado = document.getElementById("resultado");
    var serie = [];
    var suma = 0;

    for (var i = 0; i <= numero; i++) {
        var factorial = 1;
        for (var j = 1; j <= i; j++) {
            factorial *= j;
        }
        suma += 1 / factorial;
        serie.push(suma.toFixed(5));
    }
    resultado.innerText = "Serie Exponencial: " + serie.join(", ");
}
function generarNumerosPrimos() {
    var numero = parseInt(document.getElementById("numeroPrimos").value);
    var resultado = document.getElementById("resultado");
    var primos = [];

    for (var i = 2; i <= numero; i++) {
        if (esPrimo(i)) {
            primos.push(i);
        }
    }

    resultado.innerText = "Números primos hasta " + numero + ": " + primos.join(", ");
}

function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }

    for (var i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

function verificarPalindromo() {
    var palabra = document.getElementById("palabra").value;
    var resultado = document.getElementById("resultado");
    var esPalindromo = palabra === palabra.split("").reverse().join("");

    if (esPalindromo) {
        resultado.innerText = "La palabra " + palabra + " es un palíndromo.";
    } else {
        resultado.innerText = "La palabra " + palabra + " no es un palíndromo.";
    }
}

function invertirCadena() {
    var cadena = document.getElementById("cadena").value;
    var resultado = document.getElementById("resultado");
    var cadenaInvertida = cadena.split("").reverse().join("");

    resultado.innerText = "Cadena invertida: " + cadenaInvertida;
}
function generarNumerosBinarios() {
    var numero = parseInt(document.getElementById("numeroBinarios").value);
    var resultado = document.getElementById("resultado");
    var binarios = [];

    for (var i = 0; i <= numero; i++) {
        binarios.push(i.toString(2));
    }

    resultado.innerText = "Números binarios hasta " + numero + ": " + binarios.join(", ");
}

function rotarDerecha() {
    var numero = document.getElementById("numeroRotarDerecha").value;
    var resultado = document.getElementById("resultado");

    if (numero.length > 1) {
        var rotado = numero.charAt(numero.length - 1) + numero.substring(0, numero.length - 1);
        resultado.innerText = "Número rotado a la derecha: " + rotado;
    } else {
        resultado.innerText = "Número rotado a la derecha: " + numero;
    }
}

function rotarIzquierda() {
    var numero = document.getElementById("numeroRotarIzquierda").value;
    var resultado = document.getElementById("resultado");

    if (numero.length > 1) {
        var rotado = numero.substring(1) + numero.charAt(0);
        resultado.innerText = "Número rotado a la izquierda: " + rotado;
    } else {
        resultado.innerText = "Número rotado a la izquierda: " + numero;
    }
}

function generarFactorialesYSumar() {
    var numero = parseInt(document.getElementById("numeroFactoriales").value);
    var resultado = document.getElementById("resultado");
    var factoriales = [];
    var suma = 0;

    for (var i = 1; i <= numero; i++) {
        var factorial = 1;
        for (var j = 1; j <= i; j++) {
            factorial *= j;
        }
        factoriales.push(factorial);
        suma += factorial;
    }

    resultado.innerText = "Factoriales hasta " + numero + ": " + factoriales.join(", ") + ". Suma: " + suma;
}
function mostrarDigitosRepetidos() {
    var numero = document.getElementById("numeroRepetidos").value;
    var resultado = document.getElementById("resultado");

    if (numero <= 100) {
        resultado.innerText = "El número debe ser mayor a 100.";
        return;
    }

    var digitos = {};
    var repetidos = [];

    for (var i = 0; i < numero.length; i++) {
        var digito = numero.charAt(i);
        if (digitos[digito]) {
            digitos[digito]++;
            if (digitos[digito] === 2) {
                repetidos.push(digito);
            }
        } else {
            digitos[digito] = 1;
        }
    }

    if (repetidos.length > 0) {
        resultado.innerText = "Dígitos repetidos: " + repetidos.join(", ");
    } else {
        resultado.innerText = "No hay dígitos repetidos.";
    }
}

function rotarParesDerecha() {
    var numero = document.getElementById("numeroParesDerecha").value;
    var resultado = document.getElementById("resultado");

    if (numero.length < 6) {
        resultado.innerText = "El número debe tener al menos 6 dígitos.";
        return;
    }

    var pares = [];
    var noPares = [];

    for (var i = 0; i < numero.length; i++) {
        var digito = numero.charAt(i);
        if (parseInt(digito) % 2 === 0) {
            pares.push(digito);
        } else {
            noPares.push(digito);
        }
    }

    if (pares.length > 0) {
        var rotado = pares.pop() + pares.join("");
        resultado.innerText = "Número rotado a la derecha (dígitos pares): " + noPares.join("") + rotado;
    } else {
        resultado.innerText = "No hay dígitos pares para rotar.";
    }
}



