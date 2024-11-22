let contador = 0; 
function contar() { contador++; atualizarResultado(); } 
function zerar() { contador = 0; atualizarResultado(); } 

function atualizarResultado() { 
    let res = document.getElementById('resultado'); 
    res.innerHTML = `<p>O contador está em <strong>${contador}</strong> cliques</p>`; 
}
