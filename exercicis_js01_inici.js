// numeros(1, 2)

function numeros(a, b) {
    console.log(a, b)
}

// calcula(2, 3)

function calcula(a, b) {
    let s = a + b
    let r = a - b
    let p = a * b
    let d = a / b
    console.log("Resultados:\n" + a + " + " + b + " = " + s + "\n" + a + " - " + b + " = " + r + "\n" + a + " * " + b + " = " + p + "\n" + a + " / " + b + " = " + d)
}

// xx(40, 60)

function xx(chicos, chicas) {
    percentGirls = chicas / (chicos + chicas) * 100
    console.log("El porcentaje de chicas es " + percentGirls + "%")
}

// compara(2, 3)
// compara(4, 3)
// compara(3, 3)

function compara(a, b) {
    if (a > b) {
        console.log("El numero mayor es " + a)
    } else if (a < b) {
        console.log("El numero mayor es " + b)
    } else {
        console.log("Ambos numeros son iguales")
    }
}

// mayor(1, 2, 3)
// mayor(1, 3, 2)
// mayor(3, 1, 2)

function mayor(a, b, c) {
    if (a > b && a > c) {
        console.log("El numero mayor es " + a)
    } else if (b > a && b > c) {
        console.log("El numero mayor es " + b)
    } else {
        console.log("El numero mayor es " + c)
    }
}

// operacion(3, 4, "s")
// operacion(5, 2, "m")
// operacion(5, 2, "masd")

function operacion(a, b, op) {
    if (op == "s") {
        console.log("La suma es " + (a + b))
    } else if (op == "m") {
        console.log("El producto es " + (a * b))
    } else {
        console.log("Operacion desconocida")
    }
}

// anyo(2020)
// anyo(2021)

function anyo(year) {
    if ((year % 4) == 0 && (year % 100) != 0 || (year % 400) == 0) {
        console.log("El año " + year + " es bisiesto.")
    } else {
        console.log("El año " + year + " NO es bisiesto.")
    }
}

//getNumber_1_10()

function getNumber_1_10() {
    let num = parseInt(prompt("Entre un numero entre 1 y 10 ==>"))
    while ((num > 10) || (num < 1)) {
        num = parseInt(prompt("Numero incorrecto, entrar de nuevo ==>"))
    }
    console.log("El cuadrado de " + num + " es " + (num * num))
}

function getNumber(msg) {
    return parseInt(prompt(msg + " ==>"))
}


// sumNotNegative()

function sumNotNegative(sum = 0) {
    let num = getNumber("Numero a sumar (<=0 para resultado)")
    console.log(num)
    if (num > 0) {
        sum += num
        sumNotNegative(sum)
    } else {
        console.log("La suma de los valores introducidos es " + sum)
    }
}

function sumStatsNotNegative(numArray) {
    let num = getNumber("Numero a sumar (<=0 para resultado)")
    console.log(num)
    if ((num > 0) && (sum != 0)) {
        sum += num
        sumNotNegative(sum)
    } else if (sum <= 0) {
        console.log("Error: Debes introducir almenos un numero.")
    } else {
        console.log("La suma de los valores introducidos es " + sum)
    }
}