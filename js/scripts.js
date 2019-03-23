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
    
/* var list_element = document.getElementById("filhos");

for (var a = 0 ; a < funcionarios.length ; a++) {
    if (funcionarios[a].filhos) {
        var lista_filhos = funcionarios[a].filhos;
        
        for (var b = 0 ; b < lista_filhos.length ; b++) {
            list_element.innerHTML += '<li>' + lista_filhos[b] + ' - Filho(a) de ' + funcionarios[a].nome + '</li>';
        }
    }
} */
// alinhamento de loops para percorrer os arrays e soltar uma lista com
// os dados dos filhos na tela

// Aula 24 - BOM

/* window.onmousemove = function (e) {
    console.log('Eixo Y: ' + e.pageY);
    console.log('Eixo X: ' + e.pageX);
}; */
// o BOM (browser object model) nos permite acesso à alguns metódos e propriedades
// relativos ao browser. nesse caso, utilizamos o metodo onmousemove que recebe um evento
// e sempre que movimentarmos o mouse a mensagem descrita irá aparecer
// o evento passado também possui propriedades, por exemplo, obtemos a distancia do mouse
// do eixo X e do eixo Y

/* window.onmousemove = function (e) {
    if (e.pageY < 5) {
        alert("Não perca os descontos exclusivos na seção de promoções!");
    }
}; */

// exemplo pratico de utilização do pageY

// Aula 26 - Local Storage
// O Local Storage é uma propriedade do objeto window que pode armazenar dados no computador
// do usuário. servem para lembrar informações sempre que ele visitar o site. informações
// como e-mail, preferências, histórico e etc. é importante lembrar de nunca guardar
// password e informações sensíveis em localStorage

// window.localStorage.setItem("nome", "João");
// console.log(localStorage["nome"]);
// criação e acesso de um par de chave e valor no localStorage
// mesmo apagando a linha que definimos o nome, a informação continua
// guardada no browser, e continuará mesmo que o fechemos

// window.localStorage.removeItem("nome");
// remoção de um par de chave e valor do localStorage
console.log(localStorage["nome"]);

// utilização prática
/* var caixa = document.getElementById("nome-usuario");

document.getElementById("enviar-nome").onclick = function() {
    window.localStorage.setItem("nome", caixa.value);
}

if (localStorage["nome"] != undefined) {
    caixa.value = localStorage["nome"];
}

// Aula 26 - Data e Hora

var data_hoje = new Date(2016, 0, 10, 17, 45, 10);
console.log(data_hoje); */

// podemos passar alguns argumentos para Date(), por exemplo
// obs: os meses vao de 0 a 11
// o date também tem vários metódos, como getFullYear, getSeconds, etc

// Aula 27 - Metódos de Tempo

/* window.setTimeout(function() {
    console.log("Mensagem");
}, 3000); */
// com o metódo setTimeout, podemos executar uma função após um certo
// numero de tempo. no caso, aqui, 3000 ms (3 segundos)
// esse método recebe dois argumentos: uma função e um tempo

/* document.getElementById("mostrar-loader").onclick = function() {
    document.getElementById("spinner-loader").style.display = "initial";
    window.setTimeout(function() {
        document.getElementById("spinner-loader").style.display = "none";
    }, 5000)
}; */
// exemplo prático com o loader

/* var count = 0;

var inter = window.setInterval(function () {
    console.log(count);
    count++;

    if (count > 10) {
        window.clearInterval(inter);
    }
},1000);
// com o setInterval podemos chamar a mesma função durante intervalos de tempo
// determinados. aqui fazemos um contador, printando count na tela a cada segunda
// e aumentando ele
// atribuindo essa função a uma variável e utilizando o clearInterval, podemos
// parar a função em um tempo determinado

var date = new Date ();
var segundos = date.getSeconds();
var minutos = date.getMinutes();
var horas = date.getHours();

var relogio = document.getElementById("relogio");

window.setInterval(function () {
    segundos++
    if (segundos == 60) {
        minutos++;
        segundos = 0;
    } 
    if (minutos == 60) {
        horas++;
        minutos = 0;
    }
    if (horas == 24) {
        horas = 0;
    }
    segundos = ("0" + segundos).slice(-2);
    minutos = ("0" + minutos).slice(-2);
    horas = ("0" + horas).slice(-2);
    relogio.innerHTML = (horas + ":" + minutos + ":" + segundos);
}, 1000);
 */

// Aula 28 - Switch

function valor_pedagio (categoria) {
    switch(categoria) {
        case '1':
            return 11.22;
            break;
        case '2':
            return 22.45;
            break;
        case '3':
            return 16.88;
            break;
        case '4':
            return 36.65;
            break;
        default:
            return 'Categoria não encontrada';
    }
}

var categoria_veiculo = "3";
console.log(valor_pedagio(categoria_veiculo));
// sintaxe switch/case, um pouco mais limpa que o if/else
// é uma boa opção para trabalhar com apenas uma variável

// Aula 29 - Break e Continue

/* var x = 0;

while (x < 10) {
    console.log(x);
    x++;

    if (x == 5) {
        break;
    }
} */

// podemos utilizar o break para interromper um loop

var lista = [1, 5, 9, 33, 56, 89, 100, 122, 145, 189, 190, 199, 205, 290]

for (a = 0; a < lista.length; a++) {
    if (lista[a] == 33) {
        console.log("Valor encontrado");
        break;
    }
    console.log("Tentativa: " + a);
}
// exemplo mais prático da utilização do break

/* var num = 0;

while (num < 20) {
    if (num == 3) {
        num++;
        continue;
    }
    console.log(num);
    num++;
}
// exemplo mais prático da utilização do continue

var num = 0;

while (num < 20) {
    if (num % 2 == 0) {
        num++;
        continue;
    }
    console.log(num);
    num++;
} */

// Aula 30 - Formulários

// Select Box
/* document.getElementById("mostrar_opcao").onclick = function () { */
/*     var campo_select = document.getElementById("options");
    var indice_selecionado = campo_select.options.selectedIndex;
    var valor_selecionado = campo_select.options[indice_selecionado].innerHTML;
    
    document.getElementById("opcao_selecionada").innerHTML = valor_selecionado; */

/*     var valor_selecionado = document.getElementById("options").value;
    document.getElementById("opcao_selecionada").innerHTML = valor_selecionado
}; */
// função que obtém a opção selecionada pelo usuário, a partir do clique no botão
// podemos obter o numero do index, o value, o texto em si, dentre outras propriedades
// que nos ajudam a trabalhar com formulários

// Radio Button
/* document.getElementById("mostrar_radio").onclick = function () {

    var radio = document.getElementsByName("genero");
    var radio_selected;
    
    for (var a = 0;  a < radio.length; a++) {
        if (radio[a].checked) {
            radio_selected = radio[a].value;
            break;
        }
    }
    
    document.getElementById("radio_selecionado").innerHTML = radio_selected;
}; */
// O RadioButton possui o mesmo Name para as diferentes opções, e funciona de modo que
// podemos marcar apenas uma delas. a var radio obtem todos os radiobuttons e, a partir disso,
// podemos fazer um loop e verificar qual radio está marcado, atribuindo este valor
// a variavel radio_selected. então mostramos radio_selected no id radio_selecionado

// Check Boxes
/* 
document.getElementById("mostrar_check").onclick = function () {
    var check = document.getElementsByName("interesse");
    document.getElementById("check_selecionado").innerHTML = "";

    for (var b = 0;  b < check.length; b++) {
        if (check[b].checked) {
            document.getElementById("check_selecionado").innerHTML += '<li>' + check[b].value + '</li>';
        }
    }
}; */
// Semelhante ao radio button, obtemos todos os checkboxes a partir do getElementsByTagName
// e então fazemos um for. a diferença é que mostramos no check_selecionado uma lista
// de quais estão selecionados, utilizando o <li>
// para evitar que o innerHTML se repita varias vezes com o mesmo valor, limpamos o valor do check
// sempre quando o botão é clicado


/* document.getElementById("mostrar_data").onclick = function () {

    var data_select = document.getElementById("data_evento").value;
    var data_completa = new Date(data_select);
    document.getElementById("data_selecionada").innerHTML = data_completa;
}; */

// obtemos a data a partir do date com id data_evento. a partir disso criamos um objeto
// Date novo, utilizando data_select como parametro. depois disso soltamos a data_completa
// no campo abaixo com id data_selecionada
// ou seja, a partir de um form de data podemos obter todas as informações da data

// Aula 31 - Evento OnChange

/* document.getElementById("escolaridade").onchange = function () {
    var campo_select = document.getElementById("escolaridade");
    var indice_selecionado = campo_select.options.selectedIndex;
    var valor_selecionado = campo_select.options[indice_selecionado].innerHTML;
    document.getElementById("escolaridade_selecionada").innerHTML = valor_selecionado;
}; */
// criamos um evento onChange para o select com id escolaridade. isso quer dizer
// que sempre que houver alguma mudança nesse elemento, conseguiremos obter o indice e,
// consequentemente, o valor selecionado

/* var check = document.getElementsByName("lanche");

for (var a = 0;  a < check.length; a++) {
    check[a].onchange = function () {
        document.getElementById("check_selecionado").innerHTML = "";
        for (var b = 0;  b < check.length; b++) {
            if (check[b].checked) {
                document.getElementById("check_selecionado").innerHTML += '<li>' + check[b].value + '</li>';
            }
        }
    }  
} */
// a diferença com os checkboxes é que criamos um loop e fazemos um onChange para cada
// elemento com o name "lanche"

// Aula 34 - jQuery

/* $("#esconder").click(function() {
    $(".exemplo").css("display", "none");
}); */
// com o jQuery fazemos o mesmo que faziamos com o vanilla javascript mas
// de forma mais simples. aqui, selecionamos o elemento com id esconder,
// e no seu clique atribuimos uma função que troca o css dos elementos com
// classe = exemplo para display: none. a sintaxe é um pouco diferente,
// mas menos verbosa

// porém, o jQuery tem alguns metódos que facilitam, por exemplo, o hide(),
// equivalente ao display: none.
/* $("#esconder").click(function() {
    $(".exemplo").hide();
});

// Aula 35 - Manipulação do conteúdo HTML

var conteudo_html = $("#paragrafo-html").html();
console.log(conteudo_html);

var conteudo_texto = $("#paragrafo-text").text();
console.log(conteudo_texto);

$("#paragrafo-html").html("Mudar conteúdo do parágrafo");
conteudo_html = $("#paragrafo-html").html();
console.log(conteudo_html);

// o metódo html() obtém o texto com as tags, como <p> etc. o metódo text()
// obtém o texto sem as tags. ambos servem para fazer alterações do conteúdo

var url_link = $("#paragrafo-link").attr("href");
console.log(url_link);

$("#paragrafo-link").attr("href", "http://www.udemy.com");
url_link = $("#paragrafo-link").attr("href");
console.log(url_link);

$("#mudar_imagem").click(function() {
    $("#imagem_js").attr("src", "https://cdn.tutsplus.com/net/uploads/2013/12/managing-async-nodejs-retina-preview.png");
    $("#mudar_imagem").hide();
});

// o metódo attr() serve para obter o valor de algum atríbuto html, como "href",
// "src", "target", etc

$("#paragrafo-empty").html(""); // remove o conteúdo, mas podemos fazer isso com metódos específicos do jQuery
$("#paragrafo-empty").empty(); // remove o conteúdo, mantendo o elemento
$("#paragrafo-empty").remove(); // remove o elemento inteiro */

// Aula 36 - Loop Each

var lista = ["HTML","CSS","Javascript", "jQuery", "PHP"];

$.each(lista, function(indice, valor) {
    console.log("O elemento de índice [" + indice + "] tem o valor de: " + valor);
});

// sintaxe do loop each. ele recebe dois parametros: a variavel que queremos iterar
// (no nosso caso a array lista) e uma função, que também recebe dois parametros,
// sendo o primeiro o indice, que sera o nome de cada indice no loop e o valor,
// que sera equivalente ao valor na iteração

var pessoa = {
    'nome': 'João Pedro',
    'DN': '20/01/1990',
    'CPF': '111.111.111-11'
};

$.each(pessoa, function(chave, valor) {
    console.log('O elemento de chave [' + chave + '] tem o valor de ' + valor);
});

// com o loop each, podemos iterar também sobre objetos. então, ao inves de obtemos
// um número no primeiro argumento da função, obtemos a chave, como por exemplo: 'nome'

/* var interesses = $("#interesses li")
console.log(interesses);

$.each(interesses, function(indice, valor) {
    console.log($(valor).text());
});
 */
// Aula 37 - Formulários em jQuery

/* var conteudo_input = $("#campo_nome").val();
console.log(conteudo_input);
// lembrando que tudo em jQuery, praticamente, são metódos, podemos utilizar o metódo
// val() para obter o valor de um input em um formulário

var valor_selecionado = $('#options').val();
console.log(valor_selecionado);
// obtendo o valor de um select box

var texto_selecionado = $('#options').find(":selected").text();
console.log(texto_selecionado);
// obtendo o texto de um select box que está selecionado, com o metódo find()

$("#options").change(function () {
    var texto_selecionado = $('#options').find(":selected").text();
    console.log(texto_selecionado);
});
// obtendo o texto de um select box que está selecionado sempre que a seleção
// for trocada, com o change

var valor_radio_selecionado = $("input[name='genero']:checked").val();
console.log(valor_radio_selecionado); */
// radio buttons são inputs separados todos com o mesmo name, assim controlamos o que está selecionado
// com o jQuery obtémos o input com name = "genero" que estiver selecionado

/* var texto_selecionado = $('#options').find(":selected").text();
console.log(texto_selecionado);
// para obter o texto da opção selecionada, temos que utilizar o metódo find

var texto_radio_selecionado = $("input[name='genero']:checked").parent('span').text();
console.log(texto_radio_selecionado);
// porém, para obter o texto, temos que utilizar o metódo parent(), pois o input não possui
// texto, e sim seu elemento pai, o span

$("input[name='genero']").change(function() {
    var novo_radio_selecionado = $("input[name='genero']:checked").parent('span').text();;
    console.log(novo_radio_selecionado);
});
// atualizando sempre com o change

$("input[name='interesse']").change(function() {
    var checkboxes_selecionados = $("input[name='interesse']:checked");
    var textos = [];
    
    $.each(checkboxes_selecionados, function( index, value ) { 
        textos.push($(value).parent("span").text());
    });
    
    console.log(textos);
    
}); */
// para obtermos os valores de texto de vários check boxes, fazemos de forma semelhante aos
// radio buttons. a diferença é que, como vários podem estar selecionados, fazemos um loop
// e sempre esvaziamos a variável antes do loop acontecer

//Aula 38 - Manipulação de CSS

/* $(".exemplo").css("display", "none");
// ex. de manipulação de css com jQuery

$(".exemplo").hide();
// ex. de um metódo do jQuery que faz a mesma coisa (display: none = hide())

$('#adicionar_classe').click(function () {
    $('#paragrafo-classes').addClass('styling')
});
// podemos mudar completamente o estilo de um elemento adicionando uma classe
// para mudar tantas características de css utilizando o javascript e css seria
// mais trabalhoso. com o jQuery, podemos simplesmente criar uma classe e adiciona-la
// ao elemento quando quisermos

$('#remover_classe').click(function () {
    $('#paragrafo-classes').removeClass('styling')
});
// fica mais fácil, também, remover as propriedades, já que é só remover a classe

$('#alternar_classe').click(function () {
    $('#paragrafo-classes').toggleClass('styling')
}); */
// fazendo de uma forma melhor, temos o metódo toggleClass, que checa se a classe já está
// aplicada ou não, e então remove ou adiciona a classe quando o botão é clicado

// Aula 39 - Eventos

/* $("elemento").on({
    click: function(){
        // Código a ser executado no evento click
    }, 

    mouseenter: function(){
        // Código a ser executado no evento mouseenter
    }, 

    mouseleave: function(){
        // Código a ser executado no evento mouseleave
    } 
});
// temos o elemento .on(), que recebe um objeto como parâmetro, sendo que as duplas
// de chave e valor são os eventos (click, change, etc)) e as funções que esses eventos
// irão executar

$("#nome").keyup(function() {
    if (($("#nome").val())) {
        $("#confirmar").show();
    }
    else {
        $("#confirmar").hide();
    }
}) */

// Aula 40 - Efeitos

/* $("#botao-esconder").click(function () {
    $(this).hide(1000);
    $("#texto-escondido").show();
}); */
// aqui, passamos um parametro para o metodo hide que nos permite definir
// em quanto tempo a função será executada. ou seja, o elemento será escondido
// após 1000 ms (1s). porém, no nosso caso ficou muito ruim, já que o metódo show()
// chamado na linha de baixo acaba acontecendo antes desse tempo, já que o javascript
// é uma linguagem assíncrona, fazendo com que vários comandos possam ser executados
// ao mesmo tempo

// dito isso, podemos passar uma função CALLBACK também como parâmetro para a função
// hide(), fazendo com que o show() seja chamado apenas depois destes 1000ms (1s)
// obs: o hide, por exemplo, recebe dois parametros, dessa forma:
// -> hide(velocidade, callback);
/* $( "#botao-esconder" ).click(function() {
    $(this).hide(1000, function(){
        $("#texto-escondido").show();
    });
}); */

/* $("#toggle-tab").click(function() {
    $("#tab-content").slideToggle(200, function() {
        $("#toggle-tab").toggleClass("flip");
    });
}) */
// novamente, o toogle é muito importante para nos permitir alternar entre o
// hide() e o show(), já que ele faz isso automaticamente para nós. isso quer dizer
// que, ao definirmos um click para o toogle-tab e, a partir disso, um toggle para o 
// tab content, automaticamente o botão de mostrar e ocultar estará funcionando
// além disso, o toggleClass também troca e retira a classe de um elemento. utilizamos
// isso no flip, para fazer o botão alternar em 188 graus dando a impressão de ocultar/exibir
// para o usuário. o slideToggle serve para darmos um efeito melhor para o toggle
// existem várias outras variações do toggle, como o fadeToggle, por exemplos

// Aula 41 - Animate
// podemos também utilizar o metódo animate para ter maior versatilidade nas animações.
// é necessário um pouco mais de código, mas as vezes pode ser necessário utilizá-lo
// sintaxe do animate -> $("elemento").animate({propriedade: valor}, velocidade, callback);
/* $("#animar").click(function() {
    $("#quadrado").animate({
        width: "+=20px",
        height: "+=20px"
    }, 2000)
}); */

/* $("#animar").click(function() {
    $("#quadrado").animate({
        width: "+=200px",
    }, 5000);

    $("#quadrado").animate({
        height: "+=200px",
    }, 5000);
}); */
// obs: NÃO é necessário utilizar funções callback para controlar a execução dos metódos
// com o animate. o animate, por padrão, executa as animações uma após a outra, fazendo com que,
// caso seja da nossa vontade ter uma ordem específica para as animações, seja realmente apenas
// escrever uma após a outra. além disso, praticamente qualquer propriedade css pode ser animada,
// porém uma exceção são as cores. cores NÃO podem ser animadas com o animate
// obs: as propriedades devem ser escrita em camelCase, por exemplo: paddingLeft, e não padding-left

// Aula 42 - Metódos em cadeia
// no jQuery, podemos realizar vários metódos em cadeia no mesmo objeto utilizando um
// ponto. ou seja, podemos utilizar vários metódos seguidamente utilizando apenas um
// um comando. isso faz com que a gente não precise selecionar um elemento mais de uma vez,
// igual fizemos anteriormente
/* 
$("#animar").click(function() {
    $("#quadrado").animate({
        width: "+=200px",
    },800).animate({
        height: "+=200px",
    },800,function(){
        $("#quadrado").css("background-color", "green");
    })
}); */
// podemos utilizar diversos metódos em cadeia, como o animate() e o css(). a diferença aqui,
// é que a edição de cor feita com o css() será feita já no início, pois ela não segue a mesma
// regra do animate(). se quisessemos fazer com que a cor mudasse no final, teriamos mesmo
// que utilizar uma função callback

// Aula 43 - Funções Callback
// Funções callback são funções passadas como parâmetro para outras funções. Como o javascript
// é uma linguagem assíncrona, podemos ter problemas com a ordem da execução do código.
// As funções callback existem para termos um controle maior da ordem de execução
// das funções, já que uma línguagem assíncrona como o javascript, pode executar vários comandos
// ao mesmo tempo, fazendo com que as vezes as coisas funcionem de maneira inesperada
function pegar_usuario(callback){
    window.setTimeout(function() {
        var u = {
            'nome': 'João'
        };

        callback(u);
    }, 2000);
}
        
function saudar_usuario(user) {
    console.log('Olá ' + user.nome + ', como vai?');
}

pegar_usuario(saudar_usuario);
// o que fizemos nesse exemplo foi criar uma função que recebe outra função como argumento
// demos a ela o nome de callback, mas poderia ser outro nome. assim, mesmo com o setTimeOut,
// a função erá executada apenas depois a da execução da primeira função

// ou então, de outra forma
pegar_usuario(function(user) {
    console.log('Olá ' + user.nome + ', como vai?');
});

// boa parte dos comandos jQuery se baseia em funções callback, por exemplo
/* $( "#esconder" ).click(function() {
    $(".exemplo").hide();
}); */

// o metódo setTimeOut também funciona como uma função Callback
window.setTimeout(function(){},1000);

// Aula 44 - Try/Catch/Throw - Lidando com erros
// as vezes, podemos nos deparar com erros em nosso código que afetarão todo o 
// javascript da nossa página. para essas situações podemos usar o try/catch

function pegar_usuario(){

    window.setTimeout(function(){
        var u = {
            'nome': 'João'
        };
        return u;
    }, 1000);
    
}
        
function saudar_usuario(user) {
    console.log('Olá ' + user.nome + ', como vai?');
}

var user = {nome : ""};
try {
    if (user.nome == "") {
        throw "Nome em branco";
        // o throw para a execução do programa. ou seja, ele nem irá tentar
        // executar as funções abaixo. com ele, criamos um erro personalizado
        //, que será obtido no catch abaixo
    }

    var user = pegar_usuario();
    saudar_usuario(user);
} catch(err) {
    console.log(err + "  se fodeu");
    // podemos ter acesso às informações do erro através do parâmetro passado para o catch.
    // normalmente, esse parâmetro é chamado de err
}

// Aula 45 - Operador If Ternário
// condição ? "valor se for verdadeiro" : "valor se for falso";

// Exemplo com if normal:
var nome = "";
if (nome) {
    var mensagem = "Olá " + nome;
} else {
    var mensagem = "Nome não informado";
}

// Exemplo com if ternário:
nome ? mensagem = "Olá " + nome : mensagem = "Nome não informado";

// Ou ainda mais simples:
mensagem = nome ? "Olá " + nome : "Nome não informado";

// Aula 46 - Escopo
function criar_nome() {
    var nome = 'Maria';
    console.log(nome); // O console mostrará 'Maria'
}

criar_nome();

console.log(nome); // Este comando gerará um erro, 
// pois aqui não temos acesso às variáveis de escopo local da função criar_nome.
// toda função possui seu escopo local, fazendo com que variáveis definidas dentro
// dela não possam ser utilizadas globalmente

// se criarmos uma variável sem a keyword VAR, ela SEMPRE será definida como GLOBAL
// sempre que quisermos uma variável LOCAL, devemos utilizar a keyword VAR
function criar_nome() {
    nome = 'Maria';
    console.log(nome); // O console mostrará 'Maria'
}

criar_nome();

// outra coisa interessante, é que o objeto window tem como propriedade cada uma
// das variáveis globais do código. por exemplo:
console.log(window.nome);

// algo interessante de se dizer é que as variáveis dentro de bloco são globais
// no javascript. mas podemos mudar isso com o let

for (let a = 0; a < 5; a++) {
    console.log(a);
}

// como a variável foi definida apenas localmente, podemos repetir o nome dela
// novamente em outro loop

for (let a = 0; a < 3; a++) {
    console.log(a);
}

// temos também as const, que são utilizadas para variáveis que não irão
// mudar durante o código
const PI = "3.14";

// Aula 47 - Namespaces
// Conforme nossa aplicação cresce, podemos ter variáveis com o mesmo nome, ocasionando
// em problemas para a aplicação, etc. Para contornar isso, utiliza-se o conceito de namespaces,
// namespaces não estão no javascript, mas podemos simular seu comportamento

var meuWebApp = {
    'nome': "Felipe",

    'ver_nome': function () {
        console.log(this.nome);
    }
};

meuWebApp.ver_nome();
// criamos um objeto que serve como um namespace para nossas variáveis e funções.

var meuWebApp = (function() {
    var nome = "Felipe";

    return {
        'ver_nome': function() {
            return nome;
        },
        'mudar_nome': function(novo_nome) {
            nome = novo_nome;
        },
        'apagar_nome': function() {
            nome = null;
        }
    }
})();

console.log(meuWebApp.ver_nome());
// quanto colocamos o () no final da nossa variável, que é uma função, a função
// será executada automaticamente
// nesse caso, criamos um namespace com funções, onde definimos as variáveis,
// um return e, dentro do return, colocamos as funções que quisermos

// o metódo com objeto utilizado como namespace é mais intuitivo e fácil de usar.
// o metódo com função permite que a gente proteja melhor as variáveis. por exemplo,
// nome só poderia ser alterado com a função mudar_nome que criamos.