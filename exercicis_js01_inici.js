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
    if (num > 0) {
        sum += num
        sumNotNegative(sum)
    } else {
        console.log("La suma de los valores introducidos es " + sum)
    }
}

function arrayMin(numArray) {
    return numArray.sort(function(a, b) { return a - b })[0]
}

function arrayMax(numArray) {
    return numArray.sort(function(a, b) { return a - b })[numArray.length - 1]
}

function arraySum(numArray) {
    return numArray.reduce((a, b) => a + b, 0)
}

function arrayAverage(numArray) {
    return arraySum(numArray) / numArray.length
}

// sumStatsNotNegative([])

function sumStatsNotNegative(numArray = []) {
    let num = getNumber("Numeros (<=0 para resultado)")
    if (num > 0) {
        numArray[numArray.length] = (num)
        sumStatsNotNegative(numArray)
    } else if ((num <= 0) && (numArray[0] == undefined)) {
        console.log("Error: Debes introducir almenos un numero.")
    } else {
        console.log("El numero mayor es " + arrayMax(numArray) + ", el numero menor es " + arrayMin(numArray) + ", la media es " + arrayAverage(numArray))
    }
}

// calcFactorial(5)

function factorial(num) {
    if (num <= 1) {
        return 1
    } else {
        return num * factorial(num - 1)
    }
}

function calcFactorial(num) {
    console.log("El producto factorial de " + num + " es " + factorial(num))
}

// sumEven(10)

function sumEven(num) {
    let sum = 0
    for (i = 1; i <= num; i++) {
        if ((i % 2) == 0) {
            sum += i
        }
    }
    console.log("La suma de los " + num + " numeros pares es " + sum)
}

// inputPassword()

function checkPassword(pass) {
    if (pass == "rebeca") {
        return true
    } else {
        return false
    }
}

function attemptPassword(pass, attempt = 1) {
    if (attempt < 3) {
        if (checkPassword(pass)) {
            console.log("Contraseña correcta")

        } else {
            console.log("Intente de nuevo")
            attemptPassword(prompt("Intente de nuevo"), attempt + 1)
        }
    } else {
        console.log("Acceso denegado")
    }
}

function inputPassword() {
    attemptPassword(prompt("Contraseña ==> "))
}

// bombDelay(5)

function bombDelay(time) {
    if (time > 0) {
        console.log(time + "...")
        setTimeout(bombDelay, 1000, time - 1)
    } else {
        console.log("BOOOOOOOOM!")
    }

}