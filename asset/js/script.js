console.log('Holaaaa Calculadora')

function sumar(){
    const formulario = document.getElementById('formulario');

    let dato1 = formulario['dato1'];
    let dato2 = formulario['dato2'];
    let resultado = parseInt(dato1.value) + parseInt(dato2.value);
        if(isNaN (resultado))
        resultado = 'La Operacion no se puede realizar';
    document.getElementById('resultado').innerHTML = `Resultado es : ${resultado}`;

    console.log( resultado );
}