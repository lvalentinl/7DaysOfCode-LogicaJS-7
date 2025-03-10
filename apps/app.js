let numero1 = 0;
let numero2 = 0;
let tipoDeOperacion = 0;
let resultado = 0;

function asignarTextoHTML(idEtiqueta, texto){
    let textoAsignado = document.getElementById(idEtiqueta);
    textoAsignado.innerHTML = texto;
    return;
}

function limpiarInput(idInput){
    return document.getElementById(idInput).value = '';
}

function suma(n1, n2){
    resultado = n1+n2;
    return;
}

function resta(n1, n2){
    resultado = n1-n2;
    return;
}

function multiplicacion(n1, n2){
    resultado = n1*n2;
    return;
}

function division(n1, n2){
    resultado = n1/n2;
    return;
}

function btnSuma(){
    tipoDeOperacion =  1;
    return;
}

function btnResta(){
    tipoDeOperacion =  2;
    return;
}

function btnMultiplicacion(){
    tipoDeOperacion =  3;
    return;
}

function btnDivision(){
    tipoDeOperacion =  4;
    return;
}

function btnResultado(){
    let valorIngresado1 = document.getElementById('id_input_valor1').value;
    let valorIngresado2 = document.getElementById('id_input_valor2').value;

    if (tipoDeOperacion == 0) {
        alert(`Escoge el tipo de operación`);
    } else {
        if (valorIngresado1 == '' || valorIngresado2 == '') {
            alert(`Ingresar los valores en cada campo`);
        } else {
            numero1 = parseInt(valorIngresado1);
            numero2 = parseInt(valorIngresado2);

            if (tipoDeOperacion == 1) {
                suma(numero1, numero2);
            }
            if (tipoDeOperacion == 2) {
                resta(numero1, numero2);
            }
            if (tipoDeOperacion == 3) {
                multiplicacion(numero1, numero2);
            }
            if (tipoDeOperacion == 4) {
                division(numero1, numero2);
            }
            limpiarInput('id_input_valor1');
            limpiarInput('id_input_valor2');
            
            asignarTextoHTML('id_p_resultado', `El resultado es: ${resultado}`)
        }
        tipoDeOperacion = 0;
    }

    return;
}

function condicionesIniciales(){
    asignarTextoHTML('id_p_resultado', ``);
    limpiarInput('id_input_valor1');
    limpiarInput('id_input_valor2');
    tipoDeOperacion = 0;
    return;
}
condicionesIniciales();

function btnSalir(){
    setTimeout(() => {
        condicionesIniciales();
    }, 2000);
    
    asignarTextoHTML('id_p_resultado', `Hasta la próxima`);
    return;
}