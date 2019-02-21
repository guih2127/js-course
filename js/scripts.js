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

// Aula 10 - Trabalhando com a DOM
// ao carregar uma página, o browser monta o document object model (DOM),
// e com ele podemos manipular diversos elementos da página, utilizando
// javascript. o DOM consiste em uma arvore de objetos que possuem diversos
// metodos que nos permitem a manipulação da página

/* var conteudo_caixa = document.getElementById("caixa_azul").innerHTML;
console.log(conteudo_caixa);
// obtemos um elemento a partir do id

document.getElementById("caixa_amarela").innerHTML = conteudo_caixa;
// alteração do conteúdo de um elemento da dom

document.getElementById("caixa_amarela").innerHTML = '<h1>' + 'Caixa amarela' + '</h1>';
// podemos colocar propriedades html com javascript na nossa página

var conteudo = document.getElementById("caixa_azul").innerHTML;
document.getElementById("caixa_azul").innerHTML = '<h1>' + conteudo + '</h1>'; */

// Aula 11 - Funções

function soma_numeros() {
    var x = 5;
    var y = 2;
    var soma = x + y;
    console.log(soma);
}
// criação de uma função com javascript

soma_numeros();
// invocação de uma função

function soma_args(num1, num2) {
    var soma = num1 + num2;
    return soma;
}
console.log(soma_args(20, 35));
// é interessante utilizar o comando return em uma função
// para podermos atribuir o valor dela a uma variável ou fazer o que quisermos
/* 
var peso = document.getElementById("peso").innerHTML;
var altura = document.getElementById("altura").innerHTML; */

/* function calc_imc(peso, altura) {
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}

document.getElementById("imc").innerHTML = calc_imc(peso, altura); */

// Aula 12 - Arrays

var alunos = ["João", "Maria", "José"];
var num_primos = [ 2, 3, 5, 7, 11, 13];
// criação de arrays, que, assim como string, também são sequências de caracteres

console.log(alunos.length);
console.log(num_primos[2]);

var grupos = [ 
    [ "João" , "Maria" ],
    [ "Pedro" , "Joana", "André", "Júlio" ],
    [ "Carolina" , "Helena", "Marcelo" ]
];
// criação de uma array multidimensional

console.log(grupos.length);
console.log(grupos[1]);
console.log(grupos[1][1]);
// podemos acessar elementos dentro de arrays dimensionais dessa forma

var cursos = [ "HTML", "Python", "PHP" ];
cursos.push("Javascript");
console.log(cursos);  // O console mostrará [ "HTML", "Python", "PHP", "Javascript" ]
cursos.unshift("Bootstrap");
console.log(cursos);  // O console mostrará [ "Bootstrap", "HTML", "Python", "PHP", "Javascript" ]
cursos.pop();
console.log(cursos);  // O console mostrará [ "Bootstrap", "HTML", "Python", "PHP" ]
cursos.shift();
console.log(cursos);  // O console mostrará [ "HTML", "Python", "PHP" ]

// push -> adiciona um elemento ao final da array
// pop -> retira o ultimo elemento da array
// shift -> remove um elemento ao início da array
// unshift -> adiciona o primeiro elemento da array

console.log(alunos.slice(0,3));
console.log(alunos.slice(-2,));
// obtendo de um numero x a um numero y de elementos da array

// Aula 13 - Objetos

var funcionario = {
    'nome': 'Pedro Souza Gomes',
    'ano_nasc': 1972,
    'cpf': '111.111.111.11',
    'cargo': 'Analista de Sistemas'
}

console.log(funcionario.nome);
console.log(funcionario.ano_nasc);
// criação de um objeto e acesso as suas propriedades

funcionario.cargo = 'Desenvolvedor Web';
console.log(funcionario.cargo);

funcionario.cnh = "12781782917";
console.log(funcionario.cnh);
// modificação e criação de uma propriedade de um objeto

var cursos = [
    {
        'titulo': 'Aprenda programação em Python 3 com facilidade do zero',
        'avaliacoes': 680,
        'alunos': 2300,
        'categorias': ['programacao', 'tecnologia']
    },

    {
        'titulo': 'Aprenda PHP e faça sites dinâmicos',
        'avaliacoes': 180,
        'alunos': 350,
        'categorias': ['desenvolvimento web', 'programacao']
    },

    {
        'titulo': 'Excel do Zero ao Avançado',
        'avaliacoes': 420,
        'alunos': 1800,
        'categorias': ['produtividade', 'gestão']
    }
    
];
// criação de uma array que possui 3 objetos, cada um deles com 4 propriedades

console.log(cursos[1].categorias[0]);
// acesso à categoria desenvolvimento web do curso de php

// Aula 14 - Metódos dos Objetos

var aluno = {
    'nome': 'Maria',
    'sobrenome': 'Pereira',
    'ano_nasc': 1992,
    'nome_completo': function() {
        var nomeCompleto = this.nome + ' ' + this.sobrenome;
        return nomeCompleto;
    },
    'ver_idade': function() {
        var idade = 2019 - this.ano_nasc;
        return idade;
    }
}

console.log(aluno.nome_completo());
console.log("A idade é: " + aluno.ver_idade());

// metódos são ações que podem ser aplicadas à objetos, nesse caso
// criamos a propriedade nome_completo, que é, na verdade, uma função
// obs: para referenciar o próprio objeto, utilizamos a keyword this,
// fazemos isso para acessar uma propriedade do objeto

console.log(console);
// o próprio console.log que utilizamos sempre no curso, envolve um objeto e
// um metódo, no caso, console e log, respectivamente
// acima, obtemos todas as propriedades e metódos de console

// console.log(typeof document.getElementById("tudo_obj"));
// o document também é um objeto que contém metódos e propriedades, como dito
// anteriormente. o metódo getElementById obtém um elemento através do id, 
// elemento esse que também é um objeto e, por sua vez, também possui metódos
// e propriedades

// Aula 16 - Eventos

// eventos acontecem em determinadas ações feitas pelo usuário, e 
// servem para deixar a página mais interativa, alguns dele sendo onClick,
// onChange, etc
/* document.getElementById("click-me").onclick = function () {
    alert("Você clicou no botão");
};

// ao atribuirmos uma função para essa propriedade, o javascript monitora
// o elemento e, ao detectar um evento onclick, roda o código da função
// que escrevemos

document.getElementById("hover-me").onmouseover = function () {
    alert("Você passou com o cursor no botão");
};

document.getElementById("leave-me").onmouseout = function () {
    alert("Você saiu com o cursor do botão");
}; */

/* document.onkeydown = function() {
    alert('Você apertou a tecla ' + event.keyCode);
} */
// o keydown pode ser atribuído à um elemento específico e também ao document,
// ao ser aplicado ao document, sempre que o usuário teclar algo, a função definida
// aqui será executada

// os elementos criados pela dom possuem os metodos de evento por padrão, mas inicialmente
// eles são null. somente ao atribuirmos uma função para eles, como fizemos nos exemplos acima,
// é que conseguimos fazer as interações que desejamos

function button_clicked() {
    alert("Você clicou no botão HEHEHE.");
}

// Aula 17 - Manipulação do CSS

/* document.getElementById("botao_cor").onclick = function() {
    document.getElementById("botao_cor").style.height = "100px";
}
// os objetos gerados pela dom possuem propriedades e, dentre elas, propriedades css,
// que estão contidas na propriedade style. no exemplo acima trocamos a height do 
// elemento quando ele for clicado

// nem todas as propriedades css respeitam as regras dos identificadores javascript,
// então as vezes pode ser necessário obtê-la de outra maneira
document.getElementById("botao_cor").onclick = function() {
    this.style["background-color"] = "red";
    this.style.transform = "translateX(100px)";
} */

// Aula 18 - Outros metódos getElement
// podemos obter todos os elementos de uma classe, utilizando getElementByClassName
/* var exemplo = document.getElementsByClassName("exemplo");

// o getElementbyClassname nos retorna uma array com vários elementos, por isso precisamos
// selecionar um deles

exemplo[0].innerHTML = "teste1";

console.log(exemplo); */
/* 
var exemplo = document.getElementsByTagName("p");
// podemos também obter todos os elementos que possuem uma certa tag com o 
// getElementsByTagName. aqui obtemos todos os elementos <p>
console.log(exemplo);
 */

// Aula 19 - Loops For e For/In
// Com os loops podemos alterar varios indices de uma array de forma mais simples
 
for (var a = 0; a < 5; a++) {
    console.log(a);
}

var alunos = ['Pedro', 'Maria', 'José', 'João', 'Carlos'];

for (var b = 0; b < alunos.length; b++) {
    console.log(alunos[b]);
}

// podemos utilizar o loop for in para percorrer objetos, ja que as propriedades
// de um objeto nao sao ordenadas e não podemos acessá-las a partir de um index

var carro = {
    'Ano': 2018,
    'Modelo': 'Fox',
    'Cilindradas': '1.8',
    'Combustível': 'Gasolina'
}

for (var prop in carro) {
    console.log( prop + ': ' + carro[prop] );
}

// então, podemos utilizar um loop para alterar todos os elementos
// presentes na variável abaixo, que possui os elementos com a classe "exemplo" 
var elementos = document.getElementsByClassName("exemplo");
console.log(elementos);   

for (var a = 0; a < elementos.length ; a++) {
    elementos[a].style.color = "orange";
    elementos[a].style['font-weight'] = "bold";
}

// Aula 20 - Loops While e Do/While

var count = 0;

while (count < 5) {
    console.log(count);
    count++;
}
// exemplo de um loop while

var count2 = 10;

do {
    console.log(count2);
    count++;
} while (count < 5);
// a diferença quando fazemos um loop do/while é que o comando
// será executado ao menos uma vez

// Aula 21 - Condicionais (if, else if, else)

var idade = 17;

if (idade < 18) {
    console.log("Menor de idade");
}
else if(idade == 18) {
    console.log("Tem 18 anos");
}
else {
    console.log("Maior de idade");
}

var nota = 8;
var faltas = 4;

if (nota >= 7 && faltas <= 4) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}
// exemplos de condicionais com o javascript

var nome = "Ivan";

if (nome) {
    console.log("Nome: "+ nome);
} else {
    console.log("Nome não informado");
}
// todos os valores tem associados à eles verdadeiro ou falso,
// por isso podemos fazer uma condicional como essa, elementos do tipo undefined,
// null, 0, NaN ou "" retornam false. 

// Aula 22 - Alinhamento de loops e condicionais (nesting)
var socio = false;
var idade = 25;

if (socio == true || idade >= 65) {
    console.log('O ingresso é grátis');
} else {
    if (idade < 18) {
        console.log('O ingresso custa: R$ 6,00');
    } else {
        console.log('O ingresso custa: R$ 12,00');
    }
}

var funcionarios = [  
    {
        'nome': 'Carlos Henrique da Silva',
        'idade': 45,
        'filhos': ['Mariana Alves da Silva', 'Fernanda Alves da Silva']
    },

    {
        'nome': 'Maria Helena Pereira',
        'idade': 32,
        'filhos': ['João Pedro Pereira de Souza']
    },

    {
        'nome': 'José Feliciano Maia',
        'idade': 39,
        'filhos': ['Felipe Ferreira Maia', 'Fábio Ferreira Maia', 'João Ferreira Maia']
    }
];
    
var list_element = document.getElementById("filhos");

for (var a = 0 ; a < funcionarios.length ; a++) {
    if (funcionarios[a].filhos) {
        var lista_filhos = funcionarios[a].filhos;
        
        for (var b = 0 ; b < lista_filhos.length ; b++) {
            list_element.innerHTML += '<li>' + lista_filhos[b] + ' - Filho(a) de ' + funcionarios[a].nome + '</li>';
        }
    }
}
// alinhamento de loops para percorrer os arrays e soltar uma lista com
// os dados dos filhos na tela