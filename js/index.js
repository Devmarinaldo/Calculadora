function calcular(){
    var numero1 = document.getElementsByName("numero1")[0].value;
    var numero2 = document.querySelector(".numero2").value;

    var operador = document.querySelector('#operador').value;

    this.calcularinterno(numero1, numero2, operador);
}

function calcularinterno(numero1, numero2, operador){

    var numero1 = parseInt(numero1);
    var numero2 = parseInt(numero2);
    
    if(operador == "+"){
        var resultado = numero1 + numero2;
    }
    if(operador == "-"){
        var resultado = numero1 - numero2;
    }
    if(operador == "/"){
        var resultado = numero1 / numero2;
    }
    if(operador == "*"){
        var resultado = numero1 * numero2;
    }
    
    document.querySelector('#resultado').innerHTML = resultado;

}