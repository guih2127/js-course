// Aula 3 - Variáveis

var latitude = 40.87663;
var longitude = -8.08373; 
// atribuição de variável

console.log(latitude);
console.log(longitude);
// imprimindo os valores no console

// Aula 4 - Strings
var nome = "João";
var sobrenome = 'Gomes';
var cpf = '111.111.111-11'
var telefone = "998887655";

console.log('Nome completo: ' + nome + ' ' + sobrenome);
// concatenando strings

console.log('Primeira letra do nome: ' + nome[0]);
// podemos acessar um caractere específico da string

console.log('Número de caracteres: ' + telefone.length);
// obtendo o tamanho de uma string com o metódo length

// Aula 5 - Numbers
var num1 = 20;
var num2 = 3;

var soma = num1 + num2;
var subtracao = num1 - num2;
var divisao = num1 / num2;
var multiplicacao = num1 * num2;

var media = (num1 + num2) / 2;
// operações básicas utilizando variáveis numéricas

console.log(Math.pow(num1, num2));
console.log(Math.floor(3.4));
// operações usando o objeto Math e alguns de seus metódos

var increment = 20;
increment = increment + 5;
console.log(increment);

increment += 5;
console.log(increment);

increment++;
console.log(increment);

increment -= 5;
console.log(increment);

increment--;
console.log(increment);
// aumentando o valor de uma mesma variável

var ddd = 21;
var telefone = 998887655;

var ddd_string = ddd.toString();
var tel_string = telefone.toString();
// conversão de uma variável numérica para string

console.log(ddd_string + '-' + tel_string);

// Aula 6 - Booleans
var teste = true;
var teste2 = false;

var teste = 65 < 60;
console.log(teste);
// utilizamos booleans, normalmente, em testes e condições
// neste caso, a var teste será = false

var idade = "60";
var teste = idade == 60;
console.log(teste);
// mais um tipo de teste

var teste = idade === 60;
console.log(teste);

// ao testarmos com ==, testamos apenas o valor e, ao testarmos
// com ===, testamos também o tipo.

var teste = idade != 65;
console.log(teste);
// mais um tipo de teste, testando se o tipo NÃO é igual

var vtype = true;
console.log(typeof vtype);
console.log(typeof vtype == "number");
// obtendo o tipo de uma variável

// Aula 7 - Null e Undefined

var undf;
console.log(undf);
console.log(typeof undf);
// quando não atribuímos nenhum valor a uma variável,
// ela é definida como undefined (undefined também é um tipo)

var temperatura = 35;
console.log(temperatura);

temperatura = null;
console.log(temperatura);
// quando queremos apagar uma variável, podemos atribuí-la
// o valor null

// null e undefined são tratados da mesma maneira, mas é interessante
// ter uma distinção: null para quando uma variável já existiu e queremos
// nos livrar dela e undefined para quando um valor ainda não tiver sido
// atribuído

console.log(temperatura == undefined)
console.log(typeof temperatura == undefined);
// um retorna true e outra retorna false. isso quer dizer que, embora
// os tipos sejam diferentes (null é do tipo object), null e undefined 
//são tratados de maneira semelhante.