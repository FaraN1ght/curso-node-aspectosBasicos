const fs = require('fs');
const colors = require('colors');

// const crearArchivo = (num) => {
    

//     const promesa = new Promise( (resolve, reject) => {
        
//         let salida = '';

//         for(let i=0; i<10; i++){
//             salida += (`${num} x ${i+1} = ${num*(i+1)}\n`);
//         }

//         const path = `${__dirname}/tabla-${num}.txt`;
        
//         fs.writeFile(path, salida, (err) => {
//             if (err){
//                 reject(`Problemas al crear archivo.`);
//             }else{
//                 console.log(salida);
//                 resolve(`tabla-${num}.txt`);
//             }  
//         });
        
//     });

//     return promesa;

// }

// const crearArchivo = async(num) => {
      
//     let salida = '';

//     for(let i=0; i<10; i++){
//         salida += (`${num} x ${i+1} = ${num*(i+1)}\n`);
//     }

//     const path = `${__dirname}/tabla-${num}.txt`;
    
//     fs.writeFile(path, salida, (err) => {
//         if (err){
//             throw err
//         }else{
//             console.log(salida);
//             return(`tabla-${num}.txt`);
//         }  
//     });

// }

const crearArchivo = async(num, multi, mostrar) => {
      
    try{
        let salida = '';
        let consola = '';
        const path = `${__dirname}/../salida/tabla-${num}.txt`;

        for(let i=0; i<multi; i++){
            salida += (`${num} x ${i+1} = ${num*(i+1)}\n`);
            consola += (`${colors.gray.underline(num)} ${colors.red('x')} ${i+1} ${colors.blue('=')} ${num*(i+1)}\n`);
        }

        fs.writeFileSync(path, salida);
        
        if( mostrar ){
            console.log(colors.green(consola));
        }else{
            console.log('Mostrar es falso.');
        }
        
        return(`tabla-${num}.txt`);

    }catch(err){
        throw err;
    }

}

module.exports = {
    crearArchivo
}