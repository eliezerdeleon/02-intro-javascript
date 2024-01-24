//Funciones en JS (funcion tradicional)
const saludar = function(nombre){
    return `Hola, ${nombre}`;
}


//console.log(saludar('Goku'));

console.log(saludar);




//Funcion de flecha
const saludar2 = (nombre) =>{
    return `Hola, ${nombre}`;
}

console.log(saludar2('Vegeta'));


//Funcion de flecha simplificada
const saludar3 = (nombre) => `Hola, ${nombre}`;

console.log(saludar3('Bulma'));

//Funcion que no recibe ningun argumento
const saludar4 = () => `Hola Mundo`;

console.log(saludar4());


//Otro ejemplo:
const getUser = () => ({
    uid:'ABC123',
    username: 'El_papi1502'
})



const user = getUser();
console.log(getUser());


//Tarea
//1. Transformen a una funcion de Flecha
//2. Tiene que retornar un objeto implicito
//3. Pruebas

function getUsuarioActivo2(nombre) {
    return {
        uid: 'ABC567',
        username: nombre
    }
};

const usuarioActivo2 = getUsuarioActivo2('Fernando');
console.log(usuarioActivo2);


//Realizacion
const getUsuarioActivo = (nombre) => ({ uid: 'ABC567', username: nombre });

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);