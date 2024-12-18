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
