class Algoritmos{
  ejer1(){
    // 1. Grados Celsius a Fahrenheit.
    // Proceso ejer1
    //     Definir celsius como real
    //     Escribir "Ingrese grados Celsius:"
    //     Leer celsius
    //     fahrenheit = (celsius * 9 / 5) + 32
    //     Escribir los grados celcius en grados fahrenheit
    // FinProceso
    let num1 = parseFloat(document.getElementById("num1").value);
    let resp = document.getElementById("resp");
    let fahrenheit = (num1 * 9/5) + 32;
    resp.textContent = `${num1} grados celsius a grados fahrenheit son: ${fahrenheit}`;
  }
  
  ejer2(){
    // 2. Un número entero, obtener y presentar el doble y el triple del número.
    // Proceso ejer2    
    //     Definir num, doble, triple como enteros
    //     Escribir "Ingrese un numero entero:"
    //     Leer num
    //     doble = num * 2
    //     triple = num * 3
    //     Escribir "El doble de ", num, " es ", doble, "."
    //     Escribir "El triple de ", num, " es ", triple, "."
    // FinProceso
    let num = parseInt(document.getElementById("num1").value);
    let resp = document.getElementById("resp");
    let doble = num * 2;
    let triple = num * 3;
    resp.textContent = `El doble de ${num} es ${doble} y el triple de ${num} es ${triple}`;
  }
  
  ejer3(){
    // 3. Lee 4 variables y calcula e imprime su producto, su suma y su media aritmética.    
    // Proceso ejer3
    //     Definir v1, v2, v3, v4, producto, suma, media como reales
    //     Escribir "Ingrese la variable 1:"
    //     Leer v1
    //     Escribir "Ingrese la variable 2:"
    //     Leer v2
    //     Escribir "Ingrese la variable 3:"
    //     Leer v3
    //     Escribir "Ingrese la variable 4:"
    //     Leer v4
    //     producto = v1 * v2 * v3 * v4
    //     suma = v1 + v2 + v3 + v4
    //     media = suma / 4
    //     Escribir "El producto es de: ", producto
    //     Escribir "La suma es de: ", suma
    //     Escribir "El media es de: ", media
    // FinProceso
    let v1 = parseInt(document.getElementById("num1").value);
    let v2 = parseInt(document.getElementById("num2").value);
    let v3 = parseInt(document.getElementById("num3").value);
    let v4 = parseInt(document.getElementById("num4").value);
    let resp = document.getElementById("resp");
    let producto = v1*v2*v3*v4;
    let suma = v1+v2+v3+v4
    let media = suma/4;
    resp.innerHTML = `El producto es de: ${producto} <br> La suma es de: ${suma} <br> El media es de: ${media}`;
  }
  
  ejer4(){
    // Lee el peso de un hombre en libras y devuelve el peso en kilogramos y gramos.
    // Proceso ejer4
    //     Definir pesoLibras, kilogramos, gramos como reales
    //     Escribir "Ingrese su peso en libras:"
    //     Leer pesoLibras
    //     kilogramos = pesoLibras * 0.453592
    //     gramos = pesoLibras * 453.592
    //     Escribir "El peso en kilogramos es: ", kilogramos
    //     Escribir "El peso en gramos es: ", gramos
    // FinProceso
    let pesoLibras = document.getElementById('num1').value;
    let resp = document.getElementById("resp");
    let kilogramos = pesoLibras * 0.453592; 
    let gramos = pesoLibras * 453.592;
    resp.innerHTML = (`El peso en kilogramos es: ${kilogramos} <br> El peso en gramos es: ${gramos}`);
  }
  
  ejer5(){
    // Resuelve x=((sen(a)+cos(b))*(trunc(a) mod 2))+(raiz(a^3)/(a*b+c))
    //     Proceso ejer5
    //     Definir a,b,c,x como reales
    //     Escribir "Ingrese el valor de a:"
    //     Leer a
    //     Escribir "Ingrese el valor de b:"
    //     Leer b
    //     Escribir "Ingrese el valor de c:"
    //     Leer c
    //     x = ((sen(a) + cos(b)) * (trunc(a) mod 2)) + (raiz(a^3) / (a * b + c))
    //     Escribir "El valor de x es: ", x
    // FinProceso
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    let c = document.getElementById("num3").value;
    let resp = document.getElementById("resp");
    let x = ((Math.sin(a) + Math.cos(b)) * (Math.trunc(a) % 2)) + (Math.sqrt(Math.pow(a, 3)) / (a * b + c));
    resp.textContent = `El valor de x es: ${x}`;
  }
  
  ejer6(){
    // Un empleado trabaja 40 horas en jornada normal en la semana a razón $5 la hora.
    // Si trabaja más de 40 horas, estas serán considerados horas de sobretiempo que se pagan al doble de la hora de la jornada normal.
    // El porcentaje del seguro social(iess) es del 10% del ingreso total. Se desea saber cuál es el valor del sueldo,
    // sobretiempo, ingreso total, seguro social y el neto a recibir.
    // Proceso ejer6
    //     Definir horasNormales, horasTrabajadas como enteros
    //     Definir tarifaHora, sueldoNormal, sueldoExtra, ingresoTotal, seguroSocial, netoRecibir, netoRecibir como reales
    //     horasNormales = 40
    //     tarifaHora = 5
    //     Escribir "Ingrese las horas trabajadas en la semana:"
    //     Leer horasTrabajadas
    //     sueldoNormal = 0
    //     sueldoExtra = 0
    //     ingresoTotal = 0
    //     seguroSocial = 0
    //     netoRecibir = 0
    //     Si horasTrabajadas <= horasNormales Entonces
    //         sueldoNormal = horasTrabajadas * tarifaHora
    //     Sino
    //         sueldoNormal = horasNormales * tarifaHora
    //         sueldoExtra = (horasTrabajadas - horasNormales) * tarifaHora * 2
    //     FinSi
    //     ingresoTotal = sueldoNormal + sueldoExtra
    //     seguroSocial = ingresoTotal * 0.10
    //     netoRecibir = ingresoTotal - seguroSocial
    //     Escribir "Sueldo normal: ", sueldoNormal
    //     Escribir "Sueldo extra: ", sueldoExtra
    //     Escribir "Ingreso total: ", ingresoTotal
    //     Escribir "Seguro social: ", seguroSocial
    //     Escribir "Neto recibir: ", netoRecibir
    // FinProceso
    let horasNormales = 40;
    let horasTrabajadas = document.getElementById("num1").value;
    let resp = document.getElementById("resp");
    let tarifaHora = 5;
    let sueldoNormal = 0;
    let sueldoExtra = 0;
    let ingresoTotal = 0;
    let seguroSocial = 0;
    let netoRecibir = 0;
    if (horasTrabajadas <= horasNormales) {
        sueldoNormal = horasTrabajadas * tarifaHora;
    } else {
        sueldoNormal = horasNormales * tarifaHora;
        sueldoExtra = (horasTrabajadas - horasNormales) * tarifaHora * 2;
    }
    ingresoTotal = sueldoNormal + sueldoExtra;
    seguroSocial = ingresoTotal * 0.10;
    netoRecibir = ingresoTotal - seguroSocial;
    resp.innerHTML = `
    Sueldo normal: ${sueldoNormal} <br>
    Sueldo extra: ${sueldoExtra} <br>
    Ingreso total: ${ingresoTotal} <br>
    Seguro social: ${seguroSocial} <br>
    Neto recibir: ${netoRecibir}
    `;
  }
  
  ejer7(){
    // Lee dos números y presenta el mayor de los dos siempre y cuando el primero sea par y el segundo impar.
    // Proceso ejer7
    //     Definir num1, num2 como enteros
    //     Escribir "Ingrese un número:"
    //     Leer num1
    //     Escribir "Ingrese otro número:"
    //     Leer num2
    //     Si num1 % 2 = 0 Y num2 % 2 = 1 Entonces
    //         Si num1 > num2 Entonces
    //             Escribir num1, " es mayor que ", num2
    //         Sino
    //             Escribir num2, " es mayor que ", num1
    //         FinSi
    //     Sino
    //         Escribir "Los números ingresados no cumplen con lo requerido."
    //     FinSi
    // FinProceso
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let resp = document.getElementById("resp")
    if (num1 % 2 == 0 && num2 % 2 == 1) {
      if (num1 > num2) {
        resp.textContent = `${num1} es mayor que ${num2}`;
      } else {
        resp.textContent = `${num2} es mayor que ${num1}`;
      }
    } else {
        resp.textContent = "Los números ingresados no cumplen con lo requerido.";
    }
  }
  
  ejer8(){
    // Lee un carácter y deduce si está o no comprendido entre las letras a y z ambas inclusive y sino
    // verificar si es un signo de puntuacion  , . ; :  y si no presentar solo el carácter.
    // Proceso ejer8
    //     Definir caracter como caracter
    //     Escribir "Ingrese un caracter:"
    //     Leer caracter
    //     Si caracter >= 'a' Y caracter <= 'z' Entonces
    //         Escribir caracter, " está comprendido entre las letras a y z."
    //     Sino
    //         Si caracter = ',' O caracter = ';' O caracter = '.' O caracter = ':' Entonces
    //             Escribir caracter, " es un signo de puntuación."
    //         Sino
    //             Escribir "El caracter es ", caracter
    //         FinSi
    //     FinSi
    // FinProceso
    let caracter = prompt('Ingrese un caracter: ');
  
    if(caracter >= 'a' && caracter <= 'z'){
        console.log(`${caracter} está comprendido entre las letras a y z.`);
    } else if(caracter == ',' || caracter == ';' || caracter == '.' || caracter == ':'){
        console.log(`${caracter} es un signo de puntuación.`);
    } else{
        console.log(`El caracter es ${caracter}`);
    }
  }
  
  ejer9(){
    // Determina cuánto se debe pagar por x cantidad de colas, considerando que si son menos de 12 colas, el costo
    // por unidad es de $0,25 caso contrario el precio será 10% menos.
    // Proceso ejer9
    //     Definir cola como entero
    //     Definir precio, descuento como reales
    //     Escribir "Ingrese la cantidad de colas que va a llevar:"
    //     Leer cola
    //     precio = cola * 0.25
    //     Si cola > 12 Entonces
    //         descuento = precio * 0.10
    //         precio = precio - descuento
    //     FinSi
    //     Escribir "El precio total a pagar es de ", precio
    // FinProceso
    let cola = parseInt(prompt("Ingrese la cantidad de colas que va a llevar: "));
    precio = cola * 0.25;
    if (cola > 12){
    descuento = precio * 0.10;
    precio = precio - descuento; 
    }
    console.log(`El precio total a pagar es de ${precio}`);
  }
  
  ejer10(){
    // El almacén “AlgoritmoX” tiene una promoción: a todos los trajes que tienen un precio superior a 200,
    // se les aplicará un descuento del 10% y al resto tendrán un descuento de solo $10 dólares.
    // Presenta el valor de cada traje con su respectivo valor, descuento y pago considerando el iva del 15%.
    // Proceso ejer10
    //     Definir precioTraje, descuento, iva, precioFinal, descuentoNuevo, pago como reales
    //     Escribir "Ingrese el precio de su traje:"
    //     Leer precioTraje
    //     descuento = 0
    //     iva = 0.15
    //     precioFinal = 0
    //     descuentoNuevo = 0
    //     pago = 0
    //     Si precioTraje > 200 Entonces
    //         descuento = 0.10
    //         descuentoNuevo = precioTraje * descuento
    //         precioFinal = precioTraje - descuentoNuevo
    //     Sino
    //         descuentoNuevo = 10
    //         precioFinal = precioTraje - descuentoNuevo
    //     FinSi
    //     pago = precioFinal + (precioFinal * iva)
    //     Escribir "El precio original del traje es de: ", precioTraje
    //     Escribir "El descuento nuevo es de: ", descuentoNuevo
    //     Escribir "El precio con descuento es de: ", precioFinal
    //     Escribir "El pago final con IVA es: ", pago
    // FinProceso
    let precioTraje = parseFloat(prompt('Ingrese el precio de su traje: '));
    let descuento = 0;
    let iva = 0.15;
    let precioFinal = 0;
    let descuentoNuevo = 0;
    let pago = 0;
    if (precioTraje > 200){
        descuento = 0.10;
        descuentoNuevo = precioTraje * descuento;
        precioFinal = precioTraje - descuentoNuevo;
    } else{
        descuentoNuevo = 10;
        precioFinal = precioTraje - descuentoNuevo;
    }
    pago = precioFinal + (precioFinal * iva);
    console.log(`El precio original del traje es de: ${precioTraje}`);
    console.log(`El descuento nuevo es de: ${descuentoNuevo}`);
    console.log(`El precio con descuento es de: ${precioFinal}`);
    console.log(`El pago final con IVA es: ${pago}`);
  }
  
  ejer11(){
    // Dado un día en número, presentar el nombre de ese día. Solución con arreglos.
    // Proceso ejer11
    //     Definir dias como caracter
    //     dias[1] = "lunes"
    //     dias[2] = "martes"
    //     dias[3] = "miércoles"
    //     dias[4] = "jueves"
    //     dias[5] = "viernes"
    //     dias[6] = "sábado"
    //     dias[7] = "domingo"
    //     Definir dia como entero
    //     Escribir "Ingrese un número del día de la semana del 1 al 7:"
    //     Leer dia
    //     Si dia < 1 O dia > 7 Entonces
    //         Escribir "El número ingresado no es válido. Por favor, ingrese un número entre 1 y 7."
    //     Sino
    //         Definir nombreDia como caracter
    //         nombreDia = dias[dia]
    //         Escribir "El número que ha seleccionado corresponde a: ", nombreDia
    //     FinSi
    // FinProceso
    let dias = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];
    let dia = parseInt(prompt("Ingrese un número del día de la semana del 1 al 7: "));
    if (dia < 1 || dia > 7){
        console.log("El número ingresado no es válido. Por favor, ingrese un número entre 1 y 7.");
    } else {
        let nombreDia = dias[dia - 1];
        console.log(`El número que ha seleccionado corresponde a: ${nombreDia}`);
    }
  }
  
  ejer12(){
    // Dado un mes en número, presentar el nombre de ese mes. Solución con arreglos.
    // Proceso ejer12
    //     Definir meses como caracter
    //     meses[1] = "enero"
    //     meses[2] = "febrero"
    //     meses[3] = "marzo"
    //     meses[4] = "abril"
    //     meses[5] = "mayo"
    //     meses[6] = "junio"
    //     meses[7] = "julio"
    //     meses[8] = "agosto"
    //     meses[9] = "septiembre"
    //     meses[10] = "octubre"
    //     meses[11] = "noviembre"
    //     meses[12] = "diciembre"
    //     Definir mes como entero
    //     Escribir "Ingrese un número del mes del 1 al 12:"
    //     Leer mes
    //     Si mes < 1 O mes > 12 Entonces
    //         Escribir "El número ingresado no es válido. Por favor, ingrese un número entre 1 y 12."
    //     Sino
    //         Definir nombreMes como caracter
    //         nombreMes = meses[mes]
    //         Escribir "El número que ha seleccionado corresponde a: ", nombreMes
    //     FinSi
    // FinProceso
    let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    let mes = parseInt(prompt("Ingrese un número del mes del 1 al 12: "));
  
    if (mes < 1 || mes > 12){
        console.log("El número ingresado no es válido. Por favor, ingrese un número entre 1 y 12.");
    } else {
        let nombreMes = meses[mes - 1];
        console.log(`El número que ha seleccionado corresponde a: ${nombreMes}`);
    }
  }
  
  ejer13(){
    // Dado 5 nombres, almacenarlos en un arreglo y luego presentar cada nombre del arreglo desde el último al primero sin usar ciclos.
    // Proceso ejer13
    //     Definir nombre como caracter
    //     Definir n1,n2,n3,n4,n5 Como Caracteres
    //     Escribir "Ingrese un nombre:"
    //     Leer n1
    //     Escribir "Ingrese otro nombre:"
    //     Leer n2
    //     Escribir "Ingrese otro nombre:"
    //     Leer n3
    //     Escribir "Ingrese otro nombre:"
    //     Leer n4
    //     Escribir "Ingrese otro nombre:"
    //     Leer n5
    //     nombre = [n5, n4, n3, n2, n1]
    //     Escribir "Los nombres ingresados son: ", nombre
    // FinProceso
    let nombre= [];
    let n1 = prompt("Ingrese un nombre: ");
    let n2 = prompt("Ingrese otro nombre: ");
    let n3 = prompt("Ingrese otro nombre: ");
    let n4 = prompt("Ingrese otro nombre: ");
    let n5 = prompt("Ingrese otro nombre: ");
    nombre.push(n5,n4,n3,n2,n1);
    console.log(`Los nombres ingresados son: ${nombre}`);
  }
  
  ejer14(){
    // Dado una dirección cualquiera presentar la dirección, el primer carácter, el del medio y el último de dicha dirección.
    // Proceso ejer14
    //     Definir direccion como caracter
    //     Escribir "Ingrese una dirección:"
    //     Leer direccion
    //     Definir primerCar como caracter
    //     Definir carEnmedio como entero
    //     Definir ultimoCar como caracter
    //     Definir caracterEnMedio como caracter
    //     primerCar = direccion[1]
    //     carEnmedio = Redondear(Longitud(direccion) / 2)
    //     ultimoCar = direccion[Longitud(direccion)]
    //     caracterEnMedio = direccion[carEnmedio]
    //     Escribir "El primer caracter es: ", primerCar
    //     Escribir "El caracter del medio es: ", caracterEnMedio
    //     Escribir "El ultimo caracter es: ", ultimoCar
    // FinProceso
    let direccion = prompt('Ingrese una dirección: ')
    let primerCar = direccion[0];
    let carEnmedio = Math.floor(direccion.length / 2);
    let ultimoCar = direccion[direccion.length - 1];
    let caracterEnMedio = direccion[carEnmedio];
    console.log(`El primer caracter es: ${primerCar}`);
    console.log(`El caracter del medio es: ${caracterEnMedio}`);
    console.log(`El ultimo caracter es: ${ultimoCar}`);
  }
  
  ejer15(){
    // Almacena 5 valores aleatorios en un arreglo e imprimir el primero valor si es par positivo y el ultimo si es impar negativo.
    // Proceso ejer15
    //     Definir valores Como Arreglo de Enteros
    //     Para i = 1 Hasta 5 Con Paso 1 Hacer
    //         valores[i] = EnteroAleatorioEntre(0, 100)
    //     FinPara
    //     Si valores[1] Mod 2 = 0 Y valores[1] > 0 Entonces
    //         Escribir "El número ", valores[1], " es par y positivo"
    //     FinSi
    //     Si valores[5] Mod 2 = 1 O valores[5] Mod 2 = -1 Y valores[5] < 0 Entonces
    //         Escribir "El número ", valores[5], " es impar y negativo"
    //     FinSi
    // FinProceso
    let valores = [];
    for (let i = 0; i < 5 ; i++){
        let valor = parseInt(Math.random()*100);
        valores.push(valor);
    }
    if (valores[0] % 2 == 0 && valores[0] > 0){
        console.log(`El número ${valores[0]} es par y positivo`);
    }
    if (valores[4] % 2 == 1 || valores[4] % 2 == -1 && valores[4] < 0){
        console.log(`El número ${valores[4]} es impar y negativo`);
    }
  }
  
  ejer16(){
    // Dado un arreglo vacío, añadir 3 nombres y presentar el primer y el último carácter de cada nombre desde el arreglo.
    // Proceso ejer16
    //     Definir nombres como caracter
    //     nombres = []
    //     Escribir "Ingrese nombre 1:"
    //     Leer n1
    //     Escribir "Ingrese nombre 2:"
    //     Leer n2
    //     Escribir "Ingrese nombre 3:"
    //     Leer n3
    //     nombres.push(n1, n2, n3)
    //     Para i = 1 Hasta Longitud(nombres) Con Paso 1 Hacer
    //         Definir nombre como caracter
    //         nombre = nombres[i]
    //         Si Longitud(nombre) > 0 Entonces
    //             Definir primerCaracter, ultimoCaracter como caracteres
    //             primerCaracter = nombre[1]
    //             ultimoCaracter = nombre[Longitud(nombre)]
    //             Escribir "Nombre: ", nombre, ", primer carácter: ", primerCaracter, ", último carácter: ", ultimoCaracter
    //         FinSi
    //     FinPara
    // FinProceso
    let nombres = [];
    let n1 = prompt('Ingrese nombre 1: ');
    let n2 = prompt('Ingrese nombre 2: ');
    let n3 = prompt('Ingrese nombre 3: ');
    nombres.push(n1, n2, n3);
    for (let i = 0; i < nombres.length; i++) {
        let nombre = nombres[i];
        if (nombre.length > 0) {
            let primerCaracter = nombre[0];
            let ultimoCaracter = nombre[nombre.length - 1];
            console.log(`Nombre: ${nombre}, primer carácter: ${primerCaracter}, último carácter: ${ultimoCaracter}`);
        }
    }
  }
  
  ejer17(){
    // Dada una cadena presentar el primer carácter siempre y cuando sea un dígito.
    // Proceso ejer17
    //     Definir cadena como caracter
    //     Escribir "Ingrese una cadena:"
    //     Leer cadena
    //     Definir primerCaracter como caracter
    //     primerCaracter = cadena[1]
    //     Si NoEsNumero(primerCaracter) Entonces
    //         Escribir "El primer carácter de la cadena no es un dígito."
    //     Sino
    //         Escribir "El primer carácter de la cadena es un dígito: ", primerCaracter
    //     FinSi
    // FinProceso
    let cadena = prompt("Ingrese una cadena:");
    let primerCaracter = cadena[0];
    if (!isNaN(primerCaracter)){
        console.log(`El primer caracter de la cadena es un digito: ${primerCaracter}`);
    } else {
        console.log(`El primer carácter de la cadena no es un dígito.`);
    }
  }
  
  ejer18(){
    // Dada una cadena presentar el último carácter siempre y cuando sea una letra.
    // Proceso ejer18
    //     Definir cadena como caracter
    //     Escribir "Ingrese una cadena:"
    //     Leer cadena
    //     Definir ultimoCaracter como caracter
    //     ultimoCaracter = cadena[Longitud(cadena)]
    //     Si (ultimoCaracter >= 'a' Y ultimoCaracter <= 'z') O (ultimoCaracter >= 'A' Y ultimoCaracter <= 'Z') Entonces
    //         Escribir "El último carácter de la cadena es una letra: ", ultimoCaracter
    //     Sino
    //         Escribir "El último carácter de la cadena no es una letra."
    //     FinSi
    // FinProceso
    let cadena = prompt("Ingrese una cadena:");
    let ultimoCaracter = cadena[cadena.length - 1];
    if ((ultimoCaracter >= 'a' && ultimoCaracter <= 'z') || (ultimoCaracter >= 'A' && ultimoCaracter <= 'Z')) {
        console.log(`El último carácter de la cadena es una letra: ${ultimoCaracter}`);
    } else {
        console.log(`El último carácter de la cadena no es una letra.`);
    }
  }
  
  ejer19(){
    // Dada una cadena presentar el primer carácter siempre y cuando sea una vocal.
    // Proceso ejer19
    //     Definir caracter como caracter
    //     Escribir "Ingrese una palabra:"
    //     Leer caracter
    //     Definir n como caracter
    //     n = caracter[1]
    //     Si n == "a" O n == "A" O n == "e" O n == "E" O n == "i" O n == "I" O n == "o" O n == "O" O n == "u" O n =="U" Entonces
    //         Escribir "La palabra ", caracter, " tiene la vocal ", n, " al inicio"
    //     Sino
    //         Escribir "La palabra ", caracter, " no tiene vocal"
    //     FinSi
    // FinProceso
    let caracter = prompt("ingrese una palabra: ");
    n = caracter[0];
    if (n == "a" || n == "A" || n == "e" || n == "E" || n == "i" || n == "I" || n == "o" || n == "O" || n == "u" || N =="U"){
        console.log(`La palabra ${caracter} tiene la vocal ${n} al inicio`);
    }else{
        console.log(`La palabra ${caracter} no tiene vocal`);
    }
  }
  
  ejer20(){
    // Dada una cadena presentar el carácter de en medio, siempre y cuando sea un carácter de puntuación: ; : . ,
    // Proceso ejer20
    //     Definir cadena como caracter
    //     Escribir "Ingrese una cadena:"
    //     Leer cadena
    //     Definir indiceMedio Como Entero
    //     Definir caracterMedio como caracter
    //     indiceMedio = RedondeoAbajo(Longitud(cadena) / 2)
    //     caracterMedio = cadena[indiceMedio]
    //     Si caracterMedio == ';' O caracterMedio == ':' O caracterMedio == '.' O caracterMedio == ',' Entonces
    //         Escribir "El carácter de en medio es un carácter de puntuación: ", caracterMedio
    //     Sino
    //         Escribir "El carácter de en medio no es un carácter de puntuación."
    //     FinSi
    // FinProceso
    let cadena = prompt("Ingrese una cadena: ");
    let indiceMedio = Math.floor(cadena.length / 2);
    let caracterMedio = cadena[indiceMedio];
    if (caracterMedio === ';' || caracterMedio === ':' || caracterMedio === '.' || caracterMedio === ',') {
        console.log(`El carácter de en medio es un carácter de puntuación: ${caracterMedio}`);
    } else {
        console.log(`El carácter de en medio no es un carácter de puntuación.`);
    }
  }
  
  ejer21(){
    // Dado dos caracteres indicar si son iguales o si el primero es menor que el segundo o mayor que el segundo.
    // Proceso ejer21
    //     Definir car1, car2 como caracteres
    //     Escribir "Ingrese una palabra:"
    //     Leer car1
    //     Escribir "Ingrese otra palabra:"
    //     Leer car2
    //     Si car1 == car2 Entonces
    //         Escribir "La palabra ", car1, " se repite."
    //     Sino
    //         Si car1 > car2 Entonces
    //             Escribir "La palabra ", car1, " es mayor que ", car2
    //         Sino
    //             Escribir "La palabra ", car2, " es mayor que ", car1
    //         FinSi
    //     FinSi
    // FinProceso
    let car1 = prompt("Ingrese una palabra: ");
    let car2 = prompt("Ingrese otra palabra: ");
    if(car1 == car2){
        console.log(`La palabra ${car1} se repite.`);
    }else{
        if(car1 > car2){
            console.log(`La palabra ${car1} es mayor que ${car2}`);
        }else{
            console.log(`La palabra ${car2} es mayor que ${car1}`);
        }
    }
  }
  
  ejer22(){
    // Dado dos nombres indicar si son iguales o si el primero es menor que el segundo o mayor que el segundo.
    // Proceso ejer22
    //     Definir nombre1 y nombre2 como caracteres
    //     Escribir "Ingrese el primer nombre:"
    //     Leer nombre1
    //     Escribir "Ingrese el segundo nombre:"
    //     Leer nombre2
    //     Si nombre1 == nombre2 Entonces
    //         Escribir "Los nombres son iguales."
    //     SinoSi nombre1 < nombre2 Entonces
    //         Escribir "El primer nombre es menor que el segundo nombre."
    //     Sino
    //         Escribir "El primer nombre es mayor que el segundo nombre."
    //     FinSi
    // FinProceso
    let nombre1 = prompt("Ingrese el primer nombre: ");
    let nombre2 = prompt("Ingrese el segundo nombre: ");
    
    if (nombre1 == nombre2) {
        console.log(`Los nombres son iguales.`);
    } else if (nombre1 < nombre2) {
        console.log(`El primer nombre es menor que el segundo nombre.`);
    } else {
        console.log(`El primer nombre es mayor que el segundo nombre.`);
    }
  }
  
  ejer23(){
    // Dado una cadena indicar cuántos elementos tiene, sin usar ciclos.
    // Proceso ejer23
    //     Definir cadena como caracter
    //     cadena = Leer("Ingrese algo:")
    //     Escribir "La cantidad de elementos que tiene es de ", Longitud(cadena)
    // FinProceso
    let cadena = [];
    cadena = prompt("Ingrese algo: ");
    console.log(`La cantidad de elementos que tiene es de ${cadena.length}`);
  }
  
  ejer24(){
    // Dado un arreglo indicar cuántos elementos tiene, sin usar ciclos.
    // Proceso ejer24
    //     Definir un arreglo
    //     arreglo = [1, 2, 3, 4, 5]
    //     Escribir "El arreglo tiene ", Longitud(arreglo), " elementos."
    // FinProceso
    let arreglo = [1, 2, 3, 4, 5];
    console.log(`El arreglo tiene ${arreglo.length} elementos.`);
  }
}

const algoritmos = new Algoritmos();

function limpiarR() {
  document.getElementById("resp");
  resp.textContent = "resultado";
}