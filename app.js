// Função para criar cartões
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

// Função para carregar as perguntas
function carregarPerguntas(perguntas) {
    perguntas.forEach(pergunta => {
        criaCartao(pergunta.categoria, pergunta.pergunta, pergunta.resposta);
    });
}

// Supondo que você tenha uma função para obter perguntas de perguntas.js
carregarPerguntas(perguntas);
