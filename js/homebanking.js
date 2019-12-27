

//Declaración de variables.

var nombreUsuario = "Agustin Soria";
var saldoCuenta= 8000;
var limiteExtraccion = 3500;
var nuevoSaldo;
var precioAgua = 350;
var precioTelefono = 425;
var precioLuz = 210;
var precioInternet = 570;
var servicio;
var cuentaAmiga;
var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;
var codigoDeSeguridad = 1212;


//Funcion Ejecutar al inicio




//Funciones basicas que seran reutilizadas.
``
function sumarDinero (montoIngresado){
    console.log("Saldo cuenta: " + saldoCuenta);
    nuevoSaldo = (montoIngresado + saldoCuenta);
    return (saldoCuenta = nuevoSaldo);
}

function restarDinero (montoIngresado){
    console.log("Saldo cuenta: " + saldoCuenta);
    nuevoSaldo = saldoCuenta - montoIngresado;
    return (saldoCuenta = nuevoSaldo);
}




//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    iniciarSesion();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar.
function cambiarLimiteDeExtraccion() {
    var stringLimiteDeExtraccion = prompt("Ingrese su nuevo limite de extracción por favor:\n                                Muchas Gracias.");
    var montoIngresado = parseInt(stringLimiteDeExtraccion);
    
    var limiteAnterior = limiteExtraccion;
    var nuevoLimite = montoIngresado;
    console.log("Limite anterior: " + limiteExtraccion);
    alert("Su limite anterior era= $ " + limiteAnterior + "." + "\n" + "Su nuevo Límite: $ " + nuevoLimite + ".");
    nuevoLimite = montoIngresado;
    limiteExtraccion = nuevoLimite;
    console.log("Nuevo Límite de extracción: " + limiteExtraccion);
    actualizarLimiteEnPantalla(limiteExtraccion);
    
}

function extraerDinero() {
    var stringExtraccion = prompt("Ingrese cantidad de dinero a extraer por favor:\n                                Muchas gracias.");
    var montoIngresado = parseInt(stringExtraccion);
    if (montoIngresado === null) {
        return;
    }
    if (isNaN(montoIngresado)) {
        alert("Por favor ingrese un número válido");
        return;
    }
    if (montoIngresado <= 0) {
        alert("por favor ingrese un número válido");
        return;
    }
    var saldoAnterior = saldoCuenta;

    if (montoIngresado<=saldoAnterior && montoIngresado <= limiteExtraccion && montoIngresado % 100 == 0){
    var nuevoSaldo = restarDinero(montoIngresado);
    console.log("Monto Extraido:" + montoIngresado);
    console.log("Saldo Nuevo :$ " + nuevoSaldo);
    alert("Saldo anterior = $ " + saldoAnterior + "." + "\n" + "Monto Extraído = $ " + montoIngresado + "." + "\n" + "Saldo Actual: $ " + nuevoSaldo + ".");
    actualizarSaldoEnPantalla(saldoCuenta);}
    else if (montoIngresado>saldoAnterior) { 
        alert("Usted no posee saldo suficiente para realizar esa extracción,  por favor reingrese otro monto a extraer.\nMuchas gracias.");
    }
    else if (montoIngresado>limiteExtraccion) {
        alert("Su limite de extraccion es menor al monto que desea extraer, por favor ingrese otro monto a extraer.\nMuchas gracias.")
    }
    else if (montoIngresado % 100 != 0) {
        alert("Este cajero solo entrega billetes de 100, por favor reingresa un monto multiplo de 100.\nMuchas gracias. ")
    }

}

function depositarDinero(montoIngresado) {
    var stringDeposito = prompt("Ingrese cantidad de dinero a depositar por favor:\n                                Muchas Gracias.");
    var montoIngresado = parseInt(stringDeposito);
    if (montoIngresado === null) {
        return;
    }
    if (isNaN(montoIngresado)) {
        alert("Por favor ingrese un número válido");
        return;
    }
    if (montoIngresado <= 0) {
        alert("por favor ingrese un número válido");
        return;
    }
    var saldoAnterior = saldoCuenta;
    var nuevoSaldo = sumarDinero(montoIngresado);
    console.log("Monto Depositado:" + montoIngresado);
    console.log("Saldo Nuevo :$ " + nuevoSaldo);
    alert("Saldo anterior = $ " + saldoAnterior + "." + "\n" + "Monto depositado = $ " + montoIngresado + "." + "\n" + "Saldo Actual: $ " + nuevoSaldo + ".");
    actualizarSaldoEnPantalla(saldoCuenta);
    
   
    

}

function pagarServicio(servicio) {
    servicio = parseInt (prompt("Hola: " + nombreUsuario + "¿Qué servicio deseas pagar?" + "\nPara seleccionar el servicio, ingresa solamente el número correspondiente.\n1. Agua.           $" + precioAgua + "\n2. Luz.              $" + precioLuz + "\n3. Internet.       $" + precioInternet + "\n4. Telefono.      $" + precioTelefono ) );
    var stringFaltadeFondos = "Usted no posee fondos suficientes para realizar ese pago.";
    switch (servicio) {
    case 1:
        if (precioAgua<saldoCuenta){
            saldoAnterior = saldoCuenta;
            saldoCuenta = saldoAnterior - precioAgua;
            alert("Se debitaron : $" + precioAgua + " de su cuenta para pagar el servicio Agua. \nSu saldo anterior era de: $" + saldoAnterior + "\nSu nuevo saldo es de: $" + saldoCuenta);
            actualizarSaldoEnPantalla();
        }
        else {
            alert (stringFaltadeFondos);
        }
    break;
    case 2:
            if (precioLuz < saldoCuenta) {
                saldoAnterior = saldoCuenta;
                saldoCuenta = saldoAnterior - precioLuz;
                alert("Se debitaron : $" + precioLuz + " de su cuenta para pagar el servicio de Luz. \nSu saldo anterior era de: $" + saldoAnterior + "\nSu nuevo saldo es de: $" + saldoCuenta);
                actualizarSaldoEnPantalla();
            }
            else {
                alert(stringFaltadeFondos);
            }
    break;
    case 3:
            if (precioInternet < saldoCuenta) {
                saldoAnterior = saldoCuenta;
                saldoCuenta = saldoAnterior - precioInternet;
                alert("Se debitaron : $" + precioInternet + " de su cuenta para pagar el servicio de Internet. \nSu saldo anterior era de: $" + saldoAnterior + "\nSu nuevo saldo es de: $" + saldoCuenta);
                actualizarSaldoEnPantalla();
            }
            else {
                alert(stringFaltadeFondos);
            }

    break;
    case 4:
            if (precioInternet < saldoCuenta) {
                saldoAnterior = saldoCuenta;
                saldoCuenta = saldoAnterior - precioTelefono;
                alert("Se debitaron : $" + precioTelefono + " de su cuenta para pagar el servicio de Telefono. \nSu saldo anterior era de: $" + saldoAnterior + "\nSu nuevo saldo es de: $" + saldoCuenta);
                actualizarSaldoEnPantalla();
            }
            else {
                alert(stringFaltadeFondos);
            }
    break;
    default:
        alert("Eso no es un servicio válido, por favor elija un servicio que se encuentre en el listado.")
}

}

function transferirDinero(montoIngresado) {


    montoIngresado = parseInt(prompt("Hola " + nombreUsuario + ", Por favor, ingresa el monto que deseas transferir"));
    if (montoIngresado === null) {
        return;
    }
    if (isNaN(montoIngresado)) {
        alert("Por favor ingrese un número válido");
        return;
    }
    if (montoIngresado <= 0) {
        alert("por favor ingrese un número válido");
        return;
    }
    var stringCuentaErronea = "No se ha podido realizar la transferencia\nRecuerde que solo puede realizar transferencias a cuentas amigas.";
    if (montoIngresado <= saldoCuenta){
        
        var cuentaAmiga = parseInt(prompt("Por favor ingrese los 7 dígitos de la cuenta amiga a la cual quiere transefir dinero.\nRecuerde que se transferiran: $" + montoIngresado));
        
        if (cuentaAmiga == cuentaAmiga1) {
            cuentaAmiga = cuentaAmiga1;
            saldoAnterior = saldoCuenta;
            saldoCuenta = saldoAnterior - montoIngresado;
            alert("Se debitaron : $" + montoIngresado + " de su cuenta.\nLa cuenta destino es: " + cuentaAmiga + "\nSu saldo anterior era: $ " + saldoAnterior + "\nSu nuevo saldo es: $" + saldoCuenta);
            actualizarSaldoEnPantalla();
        }
       
        else if (cuentaAmiga == cuentaAmiga2) { 
            cuentaAmiga = cuentaAmiga2;
            saldoAnterior = saldoCuenta;
            saldoCuenta = saldoAnterior - montoIngresado;
            alert("Se debitaron : $" + montoIngresado + " de su cuenta.\nLa cuenta destino es: " + cuentaAmiga + "\nSu saldo anterior era: $ " + saldoAnterior + "\nSu nuevo saldo es: $" + saldoCuenta);
            actualizarSaldoEnPantalla();
        }
        else {
            alert(stringCuentaErronea);
        }
    }
    else {
        alert("Usted no posee los fondos suficientes para realizar esta operación");
    }
}



function iniciarSesion() {
    
    var pass = parseInt(prompt("Bienvenido " + nombreUsuario + "\nPara acceder, por favor ingrese su código de seguridad de 4 dígitos"));

    if (pass === codigoDeSeguridad){
        
        alert("Bienvenido " + nombreUsuario + ".\nPodes comenzar a realizar tus operaciones.");
    } else {
        alert("El código de seguridad no es el correcto.\nPor razones de seguridad, retendremos tu dinero.\nPor favor comunicate al 0800-245-9876 para que podamos ayudarte.");
        saldoAnterior = saldoCuenta;
        saldoCuenta = 0;
                console.log("Saldo en cuenta: $" + saldoCuenta);
    }
    actualizarSaldoEnPantalla();
}

//Funciones que actualizan el valor de las variables en el HTML.
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}

