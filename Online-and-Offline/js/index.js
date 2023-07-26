const elResult = document.getElementById('result');


// elResult.style.cssText = `
//      width: 100px;
//      height: 100px;
//      background-color: blue;
// `

let color = '#F7AD00'

let svg = `
    <svg  width="231" height="231" viewBox="0 0 231 231" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path id='wifi' d="M12 50.8125V37.875C12 31.0125 14.7261 24.4311 19.5786 19.5786C24.4311 14.7261 31.0125 12 37.875 12L63.75 12" stroke=${color} stroke-width="22.1786" stroke-linecap="round" stroke-linejoin="round"/>
    <path id='wifi' d="M12.0001 180.188L12.0001 193.125C12.0001 199.988 14.7262 206.569 19.5787 211.422C24.4312 216.274 31.0126 219 37.8751 219H63.7501" stroke=${color} stroke-width="22.1786" stroke-linecap="round" stroke-linejoin="round"/>
    <path id='wifi' d="M167.25 12H193.125C199.987 12 206.569 14.7261 211.421 19.5786C216.274 24.4311 219 31.0125 219 37.875V50.8125" stroke=${color} stroke-width="22.1786" stroke-linecap="round" stroke-linejoin="round"/>
    <path id='wifi' d="M167.25 219H193.125C199.988 219 206.569 216.274 211.421 211.422C216.274 206.569 219 199.988 219 193.125V180.188" stroke=${color} stroke-width="22.1786" stroke-linecap="round" stroke-linejoin="round"/>
    <path id='wifi' d="M115.5 162.075H115.611" stroke=${color} stroke-width="22.1786" stroke-linecap="round" stroke-linejoin="round"/>
    <path id='wifi' d="M84.1411 130.715C92.4593 122.399 103.74 117.727 115.502 117.727C127.264 117.727 138.544 122.399 146.862 130.715" stroke=${color} stroke-width="22.1786" stroke-linecap="round" stroke-linejoin="round"/>
    <path id='wifi' d="M52.7682 99.343C61.0061 91.1046 70.7861 84.5696 81.5497 80.111C92.3134 75.6524 103.85 73.3575 115.5 73.3575C127.151 73.3575 138.687 75.6524 149.451 80.111C160.214 84.5696 169.994 91.1046 178.232 99.343" stroke=${color} stroke-width="22.1786" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
`

elResult.innerHTML += svg

const elSvg = document.querySelectorAll('path')

elSvg.forEach(inner => {
    let elStroke = document.createAttribute('stroke')
    elStroke.value = '#000'

    elStroke.appendChild(elStroke)

    setAttribute(path, stroke='#000')
})

window.addEventListener('online', () => {
    color = '#F7AD00'

})

window.addEventListener('offline', () => {
    color = '#000'
})
