

let huesped = [ "Daniel", "Carlos", "Maria", "Samuel"]

function hospedados(nombre){
    if(nombre != ""){
        huesped.push(nombre);
        alert('Bienvenido, su reserva a sido confirmada a nombre de ' + nombre);
    }else alert('Ingrese un nombre');
}

hospedados(prompt('Ingrese su nombre para reservar una habitación'));


for(let huespedes=0; huespedes<huesped.length; huespedes){
    console.log(huesped);
    break
}



let numerohabitación = 0

function nhabitacion(nh){
    numerohabitación = nh
    alert('Su número de habitación reservada es N° ' + numerohabitación);
}

nhabitacion(prompt('Ingrese el número de Habitación que desea reservar'));



const valor = 25000

const valorhabitacion = function(cantidaddias){
    console.log('El precio de la reserva es de ' + cantidaddias*valor);
}

valorhabitacion(prompt('ingrese la cantidad de dias a reservar'));

let confirmar = confirm('¿Esta de acuerdo con la operación realizada?');