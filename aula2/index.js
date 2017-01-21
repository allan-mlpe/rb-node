var serialGeneratorDefault = require("./serialGenerator.js"); //o comando require não só importa o arquivo, como também executa-o
var serialGeneratorFactory = require("./SerialGeneratorFactory.js");
var SerialGenerator = require("./SerialGeneratorObject.js");
var serialGeneratorArray = require("./SerialGeneratorArray.js")

console.log(serialGeneratorDefault.generate() + " -> módulo simples");
console.log(serialGeneratorFactory.generate() + " -> módulo com factory pattern");
console.log(new SerialGenerator().generate() + " -> módulo como objeto");
console.log(serialGeneratorArray.generate() + " -> módulo como array associativo");