
//Dar bienvenida y pedir datos al usuario.
alert("Hola, Bienvenido a TopCut Store!");
let sino = prompt("¿Desea crear un usuario?\n Le servira para obtener distintos beneficios y descuentos!");
let registrado = crearUsuario(sino);

//Variables de compra.
let mostrarPrenda = [];
let carrito = [];
let total = 0; 

//Variables impuestos y descuentos.
const IVA = 0.21;
const descuento = 0.10;
const descuentoUsuario = 0.05;
const recargo = 0.04;

//Ofrecer los productos y preguntar si quiere comprarlo.
let prenda = parseInt(prompt("¿Que prenda de ropa deseas comprar?\n 1. Remeras\n 2. Pantalones.\n 3. Camisas.\n 4. Bermudas.\n 5. Medias.\n6. ¿Desea buscar algun color de prenda?\n0. Salir de la tienda."));
while (prenda != 0) {
    switch (prenda) {
        case 1: //remeras
            /* mostrarPrenda = buscarPrenda("Remeras");
            let comprar = prompt(`Seccion ${mostrarPrenda.tema} \nNombre: ${mostrarPrenda.nombre} \nColor: ${mostrarPrenda.color} \nTalle: ${mostrarPrenda.talle} \nPrecio: $${mostrarPrenda.precio} \n¿Desea comprar este articulo?`);
            if (comprar.toLocaleLowerCase() == "si") {
                alert("Se agrego " + mostrarPrenda.nombre + " a tu carrito.");
            }
            carrito = agregarACarrito();
            console.log(carrito); */
            buscarPrenda("Remeras");
            break;
        case 2: //pantalones
            /* mostrarPrenda = buscarPrenda("Pantalones");
            comprar = prompt(`Seccion ${mostrarPrenda.tema} \nNombre: ${mostrarPrenda.nombre} \nColor: ${mostrarPrenda.color} \nTalle: ${mostrarPrenda.talle} \nPrecio: $${mostrarPrenda.precio} \n¿Desea comprar este articulo?`);
            if (comprar.toLocaleLowerCase() == "si") {
                total += 250;
                alert("Se agrego el pantalon a tu carrito. " + "Total de compra $" + total)
            } */
            buscarPrenda("Pantalones");
            break;
        case 3: //camisas
            /* mostrarPrenda = buscarPrenda("Camisas");
            comprar = prompt(`Seccion ${mostrarPrenda.tema} \nNombre: ${mostrarPrenda.nombre} \nColor: ${mostrarPrenda.color} \nTalle: ${mostrarPrenda.talle} \nPrecio: $${mostrarPrenda.precio} \n¿Desea comprar este articulo?`);
            if (comprar.toLocaleLowerCase() == "si") {
                total += 200;
                alert("Se agrego la camisa a tu carrito. " + "Total de compra $" + total)
            } */
            buscarPrenda("Camisas");
            break;
        case 4: //bermudas
            /* mostrarPrenda = buscarPrenda("Bermudas");
            comprar = prompt(`Seccion ${mostrarPrenda.tema} \nNombre: ${mostrarPrenda.nombre} \nColor: ${mostrarPrenda.color} \nTalle: ${mostrarPrenda.talle} \nPrecio: $${mostrarPrenda.precio} \n¿Desea comprar este articulo?`);
            if (comprar.toLocaleLowerCase() == "si") {
                total += 100;
                alert("Se agrego la bermuda a tu carrito. " + "Total de compra $" + total)
            } */
            buscarPrenda("Bermudas");
            break;
        case 5: //medias
            /* mostrarPrenda = buscarPrenda("Medias");
            comprar = prompt(`Seccion ${mostrarPrenda.tema} \nNombre: ${mostrarPrenda.nombre} \nColor: ${mostrarPrenda.color} \nTalle: ${mostrarPrenda.talle} \nPrecio: $${mostrarPrenda.precio} \n¿Desea comprar este articulo?`);
            if (comprar.toLocaleLowerCase() == "si") {
                total += 50;
                alert("Se agrego el par de medias a tu carrito. " + "Total de compra $" + total)
            } */
            buscarPrenda("Medias");
            break;
        case 6: //Buscar algun color de prenda
            let colorPrenda = prompt("¿Que color de prenda quieres buscar?");
            const filtrarColor = prendas.filter((el) => el.color.toLocaleLowerCase() == colorPrenda.toLocaleLowerCase())
            if(filtrarColor != undefined){
                alert("Prendas encontradas color "+colorPrenda);
                for(const buscar of filtrarColor){
                    alert(`Nombre: ${buscar.nombre}\nColor: ${buscar.color}\nTalle: ${buscar.talle}\nPrecio: ${buscar.precio}`);
                }
            }
            break;
        case 0: //salir
            if(total!=0){
                alert("Saliste de la tienda, estas yendo a la seccion de pago.")
            } else{
                alert("Adios, muchas gracias por visitarnos!");
            }
        default: //ninguno de los anteriores
            alert("Ingrese un numero de prenda valido.");
            break;
    }
    prenda = parseInt(prompt("¿Que prenda de ropa desea comprar?\n 1. Remerones\n 2. Pantalones.\n 3. Camisas.\n 4. Bermudas.\n 5. Medias.\n6. ¿Desea buscar algun color de prenda?\n0. Salir de la tienda."));
}

//Mostrar carrito.
if(total !=0 ){
    alert("Productos que tiene en su carrito.");
    let cont = 0;
    for(const prenda of carrito){
        cont++;
        alert(`Producto numero ${cont}\nNombre: ${prenda.nombre}\nColor: ${prenda.color}\nTalle: ${prenda.talle}\nPrecio: ${prenda.precio}`);
    }
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

if (cont != 0) {
    alert("Muchas gracias por su compra, esperemos que vuelva pronto!!");
} else {
    alert("Hasta luego, lo esperamos con muchas ganas de venderle!!");
}

//Crear usuario.
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

//Aplicar Impuestos y Descuentos.
function agregarImpuestosYDescuentos(imp, desc, descUsu) {
    let agregoImpuesto = total * (1 + imp);
    let agregoImpuestoYDescuentos;
    if (descUsu != 0) {
        if (desc != 0) {
            agregoImpuestoYDescuentos = agregoImpuesto - (agregoImpuesto * (desc + descUsu));
        } else {
            agregoImpuestoYDescuentos = agregoImpuesto - (agregoImpuesto * descUsu);
        }
    } else if (desc != 0) {
        agregoImpuestoYDescuentos = agregoImpuesto * (1 - desc);
    } else {
        agregoImpuestoYDescuentos = agregoImpuesto;
    }
    return agregoImpuestoYDescuentos;
}

//Filtrado de prendas
function buscarPrenda(Tema) {
    let filtrarPrenda = prendas.find((el) => el.tema == Tema);
    if (filtrarPrenda != undefined) {
        let comprar = prompt(`Seccion ${filtrarPrenda.tema} \nNombre: ${filtrarPrenda.nombre} \nColor: ${filtrarPrenda.color} \nTalle: ${filtrarPrenda.talle} \nPrecio: $${filtrarPrenda.precio} \n¿Desea comprar este articulo?`);
        if (comprar.toLocaleLowerCase() == "si") {
           /*  alert("Se agrego " + filtrarPrenda.nombre + " a tu carrito."); */
           carrito.push(filtrarPrenda);
           total = carrito.reduce((acumulador, prenda) => acumulador + prenda.precio, 0);
           alert("Se agrego " + filtrarPrenda.nombre + " a tu carrito. " + "Total de compra $" + total); 
        }
    } else {
        alert("Error en la busqueda.");
    }
}
