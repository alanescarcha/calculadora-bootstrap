let introducir = (numero)=>{
    let caja = document.calculadora.salida.value;
    document.calculadora.salida.value = caja + numero;
}
let calcular = ()=>{
    let caja = document.calculadora.salida.value;
    document.calculadora.salida.value=eval(caja);
}
let reset = ()=>{
    document.calculadora.reset()
}

function copyToClipboard() {
    var textBox = document.getElementById("textoACopiar");
    textBox.select();
    var confirmacion = document.execCommand("copy");
}