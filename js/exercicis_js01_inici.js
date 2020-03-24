const numeros = function(a, b) {
    console.log(a, b)
}

const numerosArr = (a, b) => console.log(a, b)

// numeros(1, 2)
// numerosArr(1, 2)

const calcula = function(a, b) {
    let s = a + b
    let r = a - b
    let p = a * b
    let d = a / b
    console.log("Resultados:\n" + a + " + " + b + " = " + s + "\n" + a + " - " + b + " = " + r + "\n" + a + " * " + b + " = " + p + "\n" + a + " / " + b + " = " + d)
}

const calculaArr = (a, b) => console.log(`Resultados:
${a} + ${b} = ${a+b}
${a} - ${b} = ${a-b}
${a} * ${b} = ${a*b}
${a} / ${b} = ${a/b}`)

// calcula(2, 3)
// calculaArr(2, 3)

const percent = function(chicas, chicos) {
    percentGirls = chicas / (chicos + chicas) * 100
    console.log("El porcentaje de chicas es " + percentGirls + "%")
}

const percentArr = (a, b) => console.log(`El porcentaje de chicas es ${a/(a+b)*100}%`)

// percent(60, 40)
// percentArr(60, 40)

const compara = function(a, b) {
    if (a > b) {
        console.log("El numero mayor es " + a)
    } else if (a < b) {
        console.log("El numero mayor es " + b)
    } else {
        console.log("Ambos numeros son iguales")
    }
}

const comparaArr = (a, b) => (a > b) ? console.log(`El numero mayor es ${a}`) : ((b > a) ? console.log(`El numero mayor es ${b}`) : console.log(`Ambos numeros son iguales`))

// compara(2, 3)
// compara(4, 3)
// compara(3, 3)
// comparaArr(2, 3)
// comparaArr(4, 3)
// comparaArr(3, 3)


const mayor = function(a, b, c) {
    if (a > b && a > c) {
        console.log("El numero mayor es " + a)
    } else if (b > a && b > c) {
        console.log("El numero mayor es " + b)
    } else {
        console.log("El numero mayor es " + c)
    }
}

const mayorArr = (a, b, c) => (a > b && a > c) ? console.log(`El numero mayor es ${a}`) : ((b > a && b > c) ? console.log(`"El numero mayor es ${b}`) : console.log(`El numero mayor es ${c}`))

// mayor(1, 2, 3)
// mayor(1, 4, 2)
// mayor(5, 1, 2)
// mayorArr(1, 2, 3)
// mayorArr(1, 4, 2)
// mayorArr(5, 1, 2)

const operacion = function(a, b, op) {
    if (op == "s") {
        console.log("La suma es " + (a + b))
    } else if (op == "m") {
        console.log("El producto es " + (a * b))
    } else {
        console.log("Operacion desconocida")
    }
}

const operacionArr = (a, b, op) => (op == "s") ? console.log(`La suma es ${a+b}`) : ((op == "m") ? console.log(`El producto es ${a*b}`) : console.log(`Operacion desconocida`))

// operacion(3, 4, "s")
// operacion(5, 2, "m")
// operacion(5, 2, "masd")
// operacionArr(3, 4, "s")
// operacionArr(5, 2, "m")
// operacionArr(5, 2, "masd")

const anyo = function(year) {
    if ((year % 4) == 0 && (year % 100) != 0 || (year % 400) == 0) {
        console.log("El año " + year + " es bisiesto.")
    } else {
        console.log("El año " + year + " NO es bisiesto.")
    }
}

const anyoArr = year => ((year % 4) == 0 && (year % 100) != 0 || (year % 400) == 0) ? console.log(`El año ${year} es bisiesto.`) : console.log(`El año ${year} NO es bisiesto.`)

// anyo(2020)
// anyo(2021)
// anyoArr(2020)
// anyoArr(2021)

const getNumber_1_10 = function() {
    let num = getNumber("Entre un numero entre 1 y 10")
    while ((num > 10) || (num < 1)) {
        num = getNumber("Numero incorrecto, entrar de nuevo")
    }
    console.log("El cuadrado de " + num + " es " + (num * num))
}

const getNumber = function(msg) {
    return +(prompt(msg + " ==>"))
}

const getNumberArr = msg => +prompt(`${msg} =>`)

const getNumber_1_10Arr = () => {
    let num = null
    do {
        (num == null) ? (num = +prompt("Entre un numero entre 1 y 10")) : (num = +prompt("Numero incorrecto, entrar de nuevo"))
    } while ((num > 10) || (num < 1))
}

//getNumber_1_10()
// getNumber_1_10Arr()

const sumNotNegative = function(sum = 0) {
    let num = getNumber("Numero a sumar (<=0 para resultado)")
    if (num > 0) {
        sum += num
        sumNotNegative(sum)
    } else {
        console.log("La suma de los valores introducidos es " + sum)
    }
}

const sumNotNegativeArr = (sum = 0, num = +prompt("Numero a sumar (<=0 para resultado)")) => (num > 0) ? sumNotNegative(sum += num) : console.log(`La suma de los valores introducidos es ${sum}`)

// sumNotNegative()
//sumNotNegativeArr()

const arrayMin = function(numArray) {
    return numArray.sort(function(a, b) { return a - b })[0]
}

// const arrayMinArr = numArray => numArray.sort((a, b) => a - b)[0]

// console.log(arrayMinArr([2, 3, 4, 1, 3, 5, 2]))

const arrayMax = function(numArray) {
    return numArray.sort(function(a, b) { return a - b })[numArray.length - 1]
}

// const arrayMaxArr = numArray => numArray.sort((a, b) => a - b)[numArray.length - 1]

// console.log(arrayMaxArr([2, 3, 4, 1, 3, 5, 2]))

const arraySum = function(numArray) {
    return numArray.reduce((a, b) => a + b, 0)
}

// const arraySumArr = numArray => numArray.reduce((a, b) => a + b, 0)

// console.log(arraySumArr([2, 3, 4, 1, 3, 5, 2]))

const arrayAverage = function(numArray) {
    return arraySum(numArray) / numArray.length
}

// const arrayAverageArr = numArray => (arraySum(numArray) / numArray.length)

// console.log(arrayAverageArr([2, 3, 4, 1, 3, 5, 2]))



const arrayMinArr = numArray => numArray.sort((a, b) => a - b)[0]

const arrayMaxArr = numArray => numArray.sort((a, b) => a - b)[numArray.length - 1]

const arraySumArr = numArray => numArray.reduce((a, b) => a + b, 0)

const arrayAverageArr = numArray => (arraySumArr(numArray) / numArray.length)

const sumStatsNotNegative = function(numArray = []) {
        let num = +prompt("Numeros (<=0 para resultado) ==>")
        if (num > 0) {
            numArray[numArray.length] = (num)
            sumStatsNotNegative(numArray)
        } else if ((num <= 0) && (numArray[0] == undefined)) {
            console.log("Error: Debes introducir almenos un numero.")
        } else {
            console.log(`El numero mayor es ${arrayMaxArr(numArray)}, el numero menor es ${arrayMinArr(numArray)}, la media es ${arrayAverageArr(numArray)}`)
        }
    }
    //////////////////////////NO FUNCIONA!/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// MILLORA APPEND??????//////
const sumStatsNotNegativeArr = (numArray = [], num = +prompt("Introducir numero (<=0 para resultado)")) => (num > 0) ? sumStatsNotNegativeArr(numArray[numArray.length] = (num)) : (((num <= 0) && (numArray[0] == undefined)) ? console.log("Error: Debes introducir almenos un numero.") : console.log(`El numero mayor es ${arrayMaxArr(numArray)}, el numero menor es ${arrayMinArr(numArray)}, la media es ${arrayAverageArr(numArray)}`))

// sumStatsNotNegative([])
// sumStatsNotNegativeArr()

const factorial = function(num) {
    if (num <= 1) {
        return 1
    } else {
        return num * factorial(num - 1)
    }
}

const showFactorial = function(num) {
    console.log("El producto factorial de " + num + " es " + factorial(num))
}

const factorialArr = num => (num <= 1) ? 1 : console.log(num * factorialArr(num - 1))

// showFactorial(5)
// factorialArr(5)



const sumEven = function(num) {
    let sum = 0
    for (i = 1; i <= num; i++) {
        if ((i % 2) == 0) {
            sum += i
        }
    }
    console.log("La suma de los " + num + " numeros pares es " + sum)
}

const sumEvenArr = (num, sum = 0) => {
    for (i = 1; i <= num; i++) {
        ((i % 2) == 0) ? sum += i: null
    }
    console.log(`La suma de los ${num} numeros pares es ${sum}`)
}

// sumEven(10)
// sumEvenArr(10)

// inputPassword()

const checkPassword = function(pass) {
    if (pass == "rebeca") {
        return true
    } else {
        return false
    }
}

const attemptPassword = function(pass, attempt = 1) {
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

const inputPassword = function() {
    attemptPassword(prompt("Contraseña ==> "))
}



const bombDelay = function(time = +prompt("Time ==>")) {
    if (time > 0) {
        console.log(time + "...")
        setTimeout(bombDelay, 1000, time - 1)
    } else {
        console.log("BOOOOOOOOM!")
    }
}

// bombDelay()

const bombDelayArr = (time = +prompt("Time ==>")) => (time > 0) ? (console.log(time + "..."), setTimeout(bombDelayArr, 1000, time - 1)) : console.log("BOOOOOOOOM!")

// bombDelayArr()