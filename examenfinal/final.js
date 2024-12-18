function mostrarCalculadora() {
    var seleccion = document.getElementById("seleccion").value;
    var display = document.getElementById("calculadora");

    switch (seleccion) {
        case "factorialesPares": display.innerHTML = ` 
            <label for="numeroFactoriales">Número:</label> 
            <input type="number" id="numeroFactoriales"><br><br> 
            <button onclick="generarFactorialesPares()">Generar Factoriales Pares</button> 
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
        case "rotarParesDerecha":
            display.innerHTML = `
                <label for="numeroParesDerecha">Número:</label>
                <input type="number" id="numeroParesDerecha"><br><br>
                <button onclick="rotarParesDerecha()">Rotar Pares a la Derecha</button>
                <p id="resultado"></p>
            `;
            break;
        case "numerosPrimos": 
            display.innerHTML = ` 
                <label for="indicePrimo">Índice del Número Primo:</label> 
                <input type="number" id="indicePrimo"><br><br> 
                <button onclick="generarNumerosPrimos()">Generar Número Primo</button> 
                <p id="resultado"></p> 
                `; 
            break;
        case "factorialess": 
            display.innerHTML = ` 
                <label for="numeroFactoriales">Generar factoriales hasta:</label> 
                <input type="number" id="numeroFactoriales"><br><br> 
                <button onclick="generarTablaFactoriales()">Generar Tabla de Factoriales</button> 
                <div id="tablaFactoriales"></div> 
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
        default:
            display.innerHTML = "";
            break;
    }
}

function generarFactorialesPares() { 
    var numero = parseInt(document.getElementById("numeroFactoriales").value); 
    var resultado = document.getElementById("resultado"); 
    var factoriales = []; var suma = 0; 
    for (var i = 0; i <= numero; i += 2) { 
        var factorial = 1; for (var j = 1; j <= i; j++) { factorial *= j; } factoriales.push(i + "!"); suma += factorial; } 
        resultado.innerText = "Factoriales pares hasta " + numero + ": " + factoriales.join(", ") + ". Suma: " + suma; 
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
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        var result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}

function generarNumerosPrimos() {
    var indice = parseInt(document.getElementById("indicePrimo").value);
    var resultado = document.getElementById("resultado");
    var primos = [];
    var num = 2;

    while (primos.length < indice) {
        if (esPrimo(num)) {
            primos.push(num);
        }
        num++;
    }

    var primosAnteriores = primos.slice(0, indice).map((primo, index) => `Primo(${index + 1}) = ${primo}`);
    resultado.innerText = primosAnteriores.join("\n");
}

function esPrimo(num) {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}

function generarTablaFactoriales() {
    var numero = parseInt(document.getElementById("numeroFactoriales").value);
    var tabla = "<table border='1'><tr>";
    var resultados = "<tr>";

    for (var i = 0; i <= numero; i += 1) {
        tabla += "<th>" + i + "!</th>";
        resultados += "<td>" + calcularFactorial(i) + "</td>";
    }

    tabla += "</tr>" + resultados + "</tr></table>";
    document.getElementById("tablaFactoriales").innerHTML = tabla;
}

function calcularFactorial(num) {
    if (num === 0) return 1;
    var factorial = 1;
    for (var i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
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




