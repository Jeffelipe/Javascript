
    function comparar() {
        let num1 = parseFloat(window.prompt('Digite o primeiro número:'));
        let num2 = parseFloat(window.prompt('Digite o segundo número:'));
        let res = document.getElementById('res');

        if (isNaN(num1) || isNaN(num2)) {
            res.innerHTML = `<p>Por favor, insira números válidos!</p>`;
        } else if (num1 > num2) {
            res.innerHTML = `<p>O número <strong>${num1}</strong> é maior que <strong>${num2}</strong>.</p>`;
        } else if (num1 < num2) {
            res.innerHTML = `<p>O número <strong>${num2}</strong> é maior que <strong>${num1}</strong>.</p>`;
        } else {
            res.innerHTML = `<p>Os dois números são iguais: <strong>${num1}</strong>.</p>`;
        }
    }