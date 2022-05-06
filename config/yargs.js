const { demandOption } = require('yargs');

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Valor para tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('m', {
        alias: 'multi',
        type: 'num',
        describe: 'Multiplicador de la operacion',
        demandOption: true
    })
    .check( (argv, options) => {
        if ( isNaN (argv.b, argv.m) ){
            throw 'La base tiene que ser un numero';
        }
        return true;
    })
    .argv;

module.exports = argv;
