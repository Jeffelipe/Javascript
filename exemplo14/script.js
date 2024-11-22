function sistema() {
    let agora = new Date();
    let saida = window.document.getElementById("saida");

    saida.innerHTML = `<p> O que eu recebi do sistema foi <mark> <strong> ${agora}</strong> </mark></p>`;
}