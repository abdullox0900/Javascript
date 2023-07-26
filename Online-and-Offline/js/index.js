const elBody = document.body
const elResult = document.getElementById('result');
const elHeadLink = document.createElement('link')

elHeadLink.setAttribute('rel', 'icon')
elHeadLink.setAttribute('href', './svg/icon.svg')
document.head.append(elHeadLink)

elBody.style.cssText = `
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

elResult.style.cssText = `
    font-size: 30px;
    font-weight: 700;
    font-family: sans-serif;
`

window.addEventListener('online', () => {
    elResult.textContent = 'Online'
    elResult.style.color = '#F7AD00'
})

window.addEventListener('offline', () => {
    elResult.textContent = 'Offline'
    elResult.style.color = '#000'
})

elResult.textContent = 'Online'
elResult.style.color = '#F7AD00'