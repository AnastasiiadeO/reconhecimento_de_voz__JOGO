const elementoChute = document.getElementById('chute');


//usande Web Speech API
window.SpeechRecognition = window.SpeechRecongnition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();


recognition.addEventListener('result', onSpeak);

function onSpeak(evento) {
   // console.log(evento.results[0][0].transcript);
    chute = evento.results[0][0].transcript;
    exibeChuteNaTela(chute);
    verificaSeValido(chute);
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
    `
}


recognition.addEventListener('end', () => recognition.start());



