//Para usar o escopo global do node podemos utilizar as seguintes declarações
//todas são similares

/* As 2 opções abaixo estão deprecated
root.max = 10000;
GLOBAL.max = 10000;
*/
//global.max = 10000;

var serialGenerator = require("./serialGenerator");
console.log(serialGenerator.generate());