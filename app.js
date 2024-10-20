function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';

    cartao.innerHTML = `
        <div class="cartao__conteudo">
            <div class="cartao__conteudo__pergunta">
                <h3>${categoria}</h3>
                <p>${pergunta}</p>
            </div>
            <div class="cartao__conteudo__resposta">
                <p>${resposta}</p>
            </div>
        </div>
    `;

    let respostaEstaVisivel = false;

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel;
        cartao.classList.toggle('active', respostaEstaVisivel);
    }

    cartao.addEventListener('click', viraCartao);
    container.appendChild(cartao);
}

// Exemplo de perguntas
const perguntas = [
    { categoria: "Programação", pergunta: "O que é JavaScript?", resposta: "O JavaScript é uma linguagem de programação." },
    { categoria: "HTML", pergunta: "O que é HTML?", resposta: "HTML é a linguagem de marcação para criar páginas web." }
];

perguntas.forEach(p => criaCartao(p.categoria, p.pergunta, p.resposta));
