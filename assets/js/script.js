var perguntas = document.querySelectorAll('#pergunta1, .none');
var perguntaAtual = 0;
var respostas = {};

function trocarPergunta() {
    var inputs = perguntas[perguntaAtual].getElementsByClassName('alternativa');
    var respostaSelecionada = '';
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            respostaSelecionada = inputs[i].id;
            break;
        }
    }

    if (respostaSelecionada !== '') {
        if (respostas[respostaSelecionada]) {
            respostas[respostaSelecionada]++;
        } else {
            respostas[respostaSelecionada] = 1;
        }
    }

    perguntas[perguntaAtual].style.display = 'none';
    perguntaAtual = (perguntaAtual + 1) % perguntas.length;
    perguntas[perguntaAtual].style.display = 'block';

    // Verifica se é a última pergunta e exibe os resultados
    if (perguntaAtual === 0) {
        exibirResultados();
    }
}

function exibirResultados() {
    var totalRespostas = Object.values(respostas).reduce((total, valor) => total + valor, 0);

    for (var alternativa in respostas) {
        var porcentagem = (respostas[alternativa] / totalRespostas) * 100;
        console.log(`Alternativa ${alternativa}: ${porcentagem.toFixed(2)}%`);
    }
}