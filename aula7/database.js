/**
*	Este módulo representa um pseudo-banco-de-dados
*	utilizando pela aplicação de exemplo
*/


/**
	Array de operadoras a ser retornado pelo serviço
*/
var operadoras = [
	{nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
	{nome: "Vivo", codigo: 14, categoria: "Celular", preco: 1},
	{nome: "Tim", codigo: 41, categoria: "Celular", preco: 3}
];

/**
	Array de contatos a ser retornado pelo serviço
*/
var contatos = [
	{id: 1, nome: "Bruno", telefone: "9999-2222", data: new Date(), operadora: operadoras[0]},
	{id: 1, nome: "Sandra", telefone: "9999-3333", data: new Date(), operadora: operadoras[1]},
	{id: 1, nome: "Mariana", telefone: "9999-9999", data: new Date(), operadora: operadoras[2]}
];

module.exports = {
	operadoras: operadoras,
	contatos: contatos
};