$(document).ready(function() {
    $('button').on('click', calc);
});

function calc() {
    let weight = $('#peso').val();
    let height = $('#altura').val();
    let imc = (weight / height**2).toFixed(2);
    let imcClass;

    if (imc < 18.5) {
        imcClass = '<span class="lowW">baixo peso.';
    } else if (imc < 25) {
        imcClass = '<span class="normalW">normal.';
    } else if (imc < 30) {
        imcClass = '<span class="highW">sobrepeso.';
    } else {
        imcClass = '<span class="obesity">obesidade.';
    }

    if (isFinite(imc)) {
        $('#result').html('<h4>Seu IMC é de ' + imc + ', que é classificado como ' + imcClass + '</h4>');
    } else {
        $('#result').html('<h4>Insira valores válidos</h4>');
    }
}