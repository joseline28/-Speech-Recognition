const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');

recognition.addEventListener('result', (e)=>{
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

  p.innerText = text;
  if(e.results[0].isFinal){
    if (text.includes('hola que tal')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'un gusto verte Joseline';
      texts.appendChild(p)
    }
    if (text.includes("what's yo") || text.includes('como has estado')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'Excelente gracias';
      texts.appendChild(p)
    }
    if (text.includes('Abre Spotify')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'Abriendo';
      texts.appendChild(p)
      console.log('opening youtube')
      window.open('https://www.youtube.com/channel/UCdxaLo9ALJgXgOUDURRPGiQ')
    }
    p = document.createElement('p');
  }
});


recognition.addEventListener('end', ()=>{
  recognition.start();
})

recognition.start();
