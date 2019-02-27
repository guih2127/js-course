// Folha 4 - Exercícios

document.getElementById("estados").onchange = function () {
    var index = this.options.selectedIndex;
    window.localStorage.setItem("estado", index);
}

document.getElementById("estados").selectedIndex = localStorage["estado"];

document.getElementById("envios").onchange = function () {
    var data_atual = new Date ();
    var data_entrega = new Date ();
    var index = this.options.selectedIndex;
    var data = document.getElementById("data_pedido");
    var entrega = document.getElementById("data_entrega");
    data.innerHTML = data_atual.toLocaleDateString();
    if (index == 1) {
        data_entrega.setDate(data_atual.getDate() + 18);
    }
    else if (index == 2) {
        data_entrega.setDate(data_atual.getDate() + 12);
    }
    entrega.innerHTML = data_entrega.toLocaleDateString();
}

document.getElementById("comecar_parar").onclick = function () {
    var cronometro = document.getElementById("cronometro");
    var milisegundos = 0;
    var segundos = 0;
    var minutos = 0;
    var horas = 0;

    window.setInterval(function() {
        milisegundos++;
        if (milisegundos == 100) {
            milisegundos = 0;
            segundos++;
            
            if (segundos == 60) {
                segundos = 0;
                minutos++;

                if (minutos == 60) {
                    minutos = 0;
                    horas++;
                }
            }
        }
        cronometro.innerHTML = horas + ":" + minutos + ":" + segundos + ":" + milisegundos;

    }, 10);
}
