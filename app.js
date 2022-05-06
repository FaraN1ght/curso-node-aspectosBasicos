const { crearArchivo } = require(`${__dirname}/helpers/multiplicar.js`);
const argv = require(`${__dirname}/config/yargs.js`);

console.clear();

console.log('yargs:', argv.base, argv.m, argv.l);

const num = argv.base;
const multi = argv.multi;
const mostrar = argv.listar;

crearArchivo(num, multi, mostrar)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));