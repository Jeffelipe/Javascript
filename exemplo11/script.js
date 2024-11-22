function verificarParImpar()
 
{ 
        let numero = document.getElementById('numero').value; 
        let res = document.getElementById('resultado');
    if (numero === '')
 { res.innerHTML = `<p>Por favor, insira um número.</p>`;
 
} else {    
    numero = Number(numero);
    if (numero % 2 === 0)
 {
        res.innerHTML = `<p>O número <strong>${numero}</strong> é Par.</p>`; 
} else {
        res.innerHTML = `<p>O número <strong>${numero}</strong> é Ímpar.</p>`;
 } 
}
 }
