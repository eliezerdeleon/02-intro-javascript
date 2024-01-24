const nombre = 'Eliezer';
const apellido = 'De Leon';

//const nombreCompleto = nombre + ' ' +apellido;
const nombreCompleto = 
`${nombre} ${apellido}`;


console.log(nombreCompleto);

function getSaludos(nombre){
    return 'Hola '+ nombre
};

console.log(` Este es un texto: ${getSaludos(nombre)} `);