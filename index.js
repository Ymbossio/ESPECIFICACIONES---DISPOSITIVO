const os = require('node:os');


console.log('Información del sistema operativo');
console.log('--------------------------------------------------------------------------------------------------------------------------------------');

console.log('Nombre del sistema operativo: ', os.platform()); 
console.log('Versión del sistema operativo: ', os.release());
console.log('Arquitectura: ', os.arch());
console.log('CPUS: ', os.cpus());
console.log('Memoria libre: ', os.freemem());
console.log('Memoria Total: ', os.totalmem());

console.log('--------------------------------------------------------------------------------------------------------------------------------------');