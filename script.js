document.getElementById('btntabuada').addEventListener('click', function() {
    const numero = document.getElementById('numerousuario').value;
    const resultadoDiv = document.getElementById('res');
    
    if (numero === '') {
        resultadoDiv.innerHTML = 'Por favor, digite um número.';
        return;
    }

    let resultado = '';
    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}<br>`;
    }

    resultadoDiv.innerHTML = resultado;
});