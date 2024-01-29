// "use strict"

// const elInput = document.querySelector('input');
// const elBtn = document.getElementById('btn');

// function submit(name) {
//     // location.href = `https://www.youtube.com/results?search_query=${name}`

//     window.open(`https://www.youtube.com/results?search_query=${name}`)

//     setTimeout(() => {
//         window.close()
//     }, 5000)
// }

// elBtn.addEventListener('click', () => {
//     submit(elInput.value)
// })

// console.log(location.href);

// console.log(window);

const elTextArea = document.getElementById('textarea');
const elBtn = document.getElementById('btn');

elBtn.addEventListener('click', () => {
    let recognition = new webkitSpeechRecognition()
    recognition.lang = 'ru'

    recognition.onresult = function(e) {
        elTextArea.innerHTML = e.results[0][0].transcript
    }
    recognition.start()
})

// elBtn.addEventListener('click', () => {
//     let speech = true

//     window.SpeechRecognition = window.webkitSpeechRecognition;
//     const recognition = new SpeechRecognition();
//     recognition.interimResult = true;

//     recognition.addEventListener('result', (e) => {
//         const transcript = Array.from(e.results)
//         .map((result) => result[0])
//         .map((result) => result.transcript)

//         console.log(transcript);

//         elTextArea.innerHTML = transcript
//     })

//     if(speech == true) {
//         recognition.start()
//     }

// })