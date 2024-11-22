const paginas = {
    "inicio": "<h1>Bem-vindo ao nosso projeto HTML</h1>",
    "sobre": "<h1>Sobre nós</h1><p> <strong> Informações sobre a empresa...</strong></p>",
    "servicos": "<h1> Nossos Serviços </h1><p>Descrição dos serviços oferecidos...</p>",
    "contato": "<h1>Contato</h1><p>Informações de contato...</p>"
};

function navegarPara(pagina) {
    let conteudo = document.getElementById("conteudo");
    conteudo.innerHTML = paginas[pagina];
}
