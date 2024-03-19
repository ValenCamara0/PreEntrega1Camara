//Dar bienvenida y pedir datos al usuario.
alert("Hola, Bienvenido a TopCut Store!");
let sino = prompt("¿Desea crear un usuario?\n Le servira para obtener distintos beneficios y descuentos!");
let registrado = crearUsuario(sino);

//Ofrecer los productos y preguntar si quiere comprarlo.
let prenda = parseInt(prompt("¿Que prenda de ropa desea comprar?\n 1. Remerones\n 2. Pantalones.\n 3. Camisas.\n 4. Bermudas.\n 5. Medias.\n0. Salir de la tienda."));
let comprar;
let total = 0;
const IVA = 0.21;
const descuento = 0.10;
const descuentoUsuario = 0.05;
const recargo = 0.04;
while (prenda != 0) {
    switch (prenda) {
        case 1: //remerones
            comprar = prompt("Este articulo vale $200\nComprar si/no");
            if (comprar == "si" || comprar == "Si") {
                total += 200;
                alert("Se agrego la remera a tu carrito. " + "Total de compra $" + total)
            }
            break;
        case 2: //pantalones
            comprar = prompt("Este articulo vale $250\nComprar si/no");
            if (comprar == "si" || comprar == "Si") {
                total += 250;
                alert("Se agrego el pantalon a tu carrito. " + "Total de compra $" + total)
            }
            break;
        case 3: //camisas
            comprar = prompt("Este articulo vale $230\nComprar si/no");
            if (comprar == "si" || comprar == "Si") {
                total += 230;
                alert("Se agrego la camisa a tu carrito. " + "Total de compra $" + total)
            }
            break;
        case 4: //bermudas
            comprar = prompt("Este articulo vale $210\nComprar si/no");
            if (comprar == "si" || comprar == "Si") {
                total += 210;
                alert("Se agrego la bermuda a tu carrito. " + "Total de compra $" + total)
            }
            break;
        case 5: //medias
            comprar = prompt("Este articulo vale $100\nComprar si/no");
            if (comprar == "si" || comprar == "Si") {
                total += 100;
                alert("Se agrego el par de medias a tu carrito. " + "Total de compra $" + total)
            }
            break;
        default: //ninguno de los anteriores
            alert("Ingrese un nº de prenda valido.");
            break;
    }
    prenda = parseInt(prompt("¿Que prenda de ropa desea comprar?\n 1. Remerones\n 2. Pantalones.\n 3. Camisas.\n 4. Bermudas.\n 5. Medias.\n0. Salir de la tienda."));
}

//Preguntar metodo de pago
let cont = 0;
if (total != 0) {
    cont = 1;
    let metodoPago = parseInt(prompt("Monto total de tu carrito $" + total + ". ¿Que metodo de pago elige?🤑\n1. Efectivo.\n2. Credito.\n3. Debito.\n4. Mercado Pago."));
    if (registrado == false && metodoPago < 5) {
        sino = prompt("Ofrecemos un 5% de descuento a nuestros usuarios!\nNo te pierdas esta oportunidad y crea el tuyo!\nEscribe si, o en caso de perdertelo, no.");
        registrado = crearUsuario(sino);
    }
    switch (metodoPago) {
        case 1: alert("Con efectivo tiene un 10% de desceunto.");
                if (registrado == true) {
                    alert("Precio final $" + agregarImpuestosYDescuentos(IVA, descuento, descuentoUsuario));
                } else {
                    alert("Precio final $" + agregarImpuestosYDescuentos(IVA, descuento, 0));
        }
            break;
        case 2: alert("Con Credito tiene un 4% de recargo.");
                if (registrado == true) {
                    alert("Precio final $" + agregarImpuestosYDescuentos(IVA + recargo, 0, descuentoUsuario));
                } else {
                    alert("Precio final $" + agregarImpuestosYDescuentos(IVA + recargo, 0, 0));
        }
            break;
        case 3: if (registrado == true) {
                    alert("Precio final $" + agregarImpuestosYDescuentos(IVA, 0, descuentoUsuario));
                } else {
                    alert("Precio final $" + agregarImpuestosYDescuentos(IVA, 0, 0));
        }
            break;
        case 4: if (registrado == true) {
                    alert("Precio final $" + agregarImpuestosYDescuentos(IVA, 0, descuentoUsuario));
                } else {
                    alert("Precio final $" + agregarImpuestosYDescuentos(IVA, 0, 0));
        }
            break;
        default: alert("No eligio un metodo de pago.")
            break;
    }
}
 
if(cont != 0 ){
    alert("Muchas gracias por su compra, esperemos que vuelva pronto!!");
} else {
    alert("Hasta luego, lo esperamos con muchas ganas de venderle!!");
}

//Funcion para crear usuario.
function crearUsuario(crearlo) {
    if (crearlo == "si" || crearlo == "Si") {
        let nombre = prompt("Ingrese su nombre: ");
        let apellido = prompt("Ingrese su apellido: ");
        let email = prompt("Ingrese su email: ");
        alert("Bienvenido " + nombre + " " + apellido + "!");
        alert("Tienes un 5% de descuento en tu compra 🤩.");
        return true;
    } else {
        return false;
    }
}

//Funcion para aplicar Impuestos y Descuentos.
function agregarImpuestosYDescuentos(imp, desc, descUsu){
    let agregoImpuesto = total * (1 + imp);
    let agregoImpuestoYDescuentos;
    if(descUsu != 0){
        if(desc != 0){
            agregoImpuestoYDescuentos = agregoImpuesto - (agregoImpuesto * (desc + descUsu));
        } else{
            agregoImpuestoYDescuentos = agregoImpuesto - (agregoImpuesto * descUsu);
        }
    } else if(desc != 0){
        agregoImpuestoYDescuentos = agregoImpuesto * (1 - desc);
        } else {
            agregoImpuestoYDescuentos = agregoImpuesto;
    }
    return agregoImpuestoYDescuentos;
}



