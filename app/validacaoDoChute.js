function verificaSeValido(chute) {
    const numero = +chute; //isso  vai transformar o chute que vem em forma de string, em um número inteiro

    if(chuteForInvalido(numero)) {
        if (chute.toUpperCase() === "GAME OVER") {
            document.body.innerHTML = `
            <h2>GAME OVER!</h2>
            <h3>Se quiser começar de novo, aperta o botão <i class="fa-solid fa-circle-arrow-down"></i></h3>
            <button class="recomecar">Recomecar o jogo</button>
            `
            recomecarJogo();
        } else {
        elementoChute.innerHTML += `
        <div>Valor inválido!</div>
        `;
        return;
        }
    }

    if(numeroForMaiorOuMenorDoValorPermetido(numero)) {
        elementoChute.innerHTML += `
        <div>Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>
        `;
        return;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Parabéns! Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button class="recomecar">Recomecar o jogo</button>
        `
        recomecarJogo();
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-hand-point-down"></i></div>
        `;
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-hand-point-up"></i></div>
        `;
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorDoValorPermetido(numero) {
    return numero > maiorValor || numero < menorValor
}

function recomecarJogo() {
    const btnRecomecar = document.querySelector('.recomecar');
    btnRecomecar.onclick = () => {
        location.reload();
    }
}