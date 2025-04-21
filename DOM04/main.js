document.addEventListener('DOMContentLoaded', function() {
    // Este evento é acionado quando o DOM - HTML está completamente carregado e analisado
    console.log('DOM completamente carregado e analisado');
    const mostrarBotao = document.getElementById('mostrarBotao');
    const resultadoElemento = document.getElementById('resultado');
    const opcoes = document.getElementsByName('opcao');

    mostrarBotao.addEventListener('click', function() {
        let opcaoSelecionada = null;
        console.log('Opções disponíveis: '+opcoes.length);
        for (let i = 0; i < opcoes.length; i++) {
            console.log(opcoes[i].value);
            if (opcoes[i].checked) {
                opcaoSelecionada = opcoes[i].value;
                break;
            }
        }

        if (opcaoSelecionada) {
            resultadoElemento.textContent = `Você selecionou a opção: - ${opcaoSelecionada}`;
        } else {
            resultadoElemento.textContent = 'Nenhuma opção foi selecionada.';
        }
    });
});